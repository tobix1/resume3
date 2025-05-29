// JavaScript for Tobi Evans Owowumi's Resume

document.addEventListener('DOMContentLoaded', function() {
    // Page navigation functionality
    const pages = document.querySelectorAll('.resume-page');
    const totalPages = pages.length;
    
    // Initially show only the first page
    showPage(0);
    
    // Add navigation buttons
    const navigationDiv = document.createElement('div');
    navigationDiv.className = 'page-navigation';
    navigationDiv.innerHTML = `
        <button id="prev-page">Previous Page</button>
        <span id="page-indicator">Page 1 of ${totalPages}</span>
        <button id="next-page">Next Page</button>
    `;
    document.body.appendChild(navigationDiv);
    
    const prevButton = document.getElementById('prev-page');
    const nextButton = document.getElementById('next-page');
    const pageIndicator = document.getElementById('page-indicator');
    
    let currentPage = 0;
    
    // Show only the current page
    function showPage(pageIndex) {
        pages.forEach((page, index) => {
            if (index === pageIndex) {
                page.style.display = 'block';
            } else {
                page.style.display = 'none';
            }
        });
        
        // Update buttons state
        prevButton.disabled = pageIndex === 0;
        nextButton.disabled = pageIndex === totalPages - 1;
        
        // Update page indicator
        pageIndicator.textContent = `Page ${pageIndex + 1} of ${totalPages}`;
    }
    
    // Navigate to previous page
    prevButton.addEventListener('click', function() {
        if (currentPage > 0) {
            currentPage--;
            showPage(currentPage);
            window.scrollTo(0, 0); // Scroll to top
        }
    });
    
    // Navigate to next page
    nextButton.addEventListener('click', function() {
        if (currentPage < totalPages - 1) {
            currentPage++;
            showPage(currentPage);
            window.scrollTo(0, 0); // Scroll to top
        }
    });
    
    // Initialize button states
    prevButton.disabled = currentPage === 0;
    nextButton.disabled = currentPage === totalPages - 1;
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft' && currentPage > 0) {
            currentPage--;
            showPage(currentPage);
            window.scrollTo(0, 0);
        } else if (e.key === 'ArrowRight' && currentPage < totalPages - 1) {
            currentPage++;
            showPage(currentPage);
            window.scrollTo(0, 0);
        }
    });
});
