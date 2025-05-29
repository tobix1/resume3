/**
 * Resume Website JavaScript
 * Author: Tobi Evans Owowumi
 * Purpose: Enhance resume interactivity and user experience
 */

document.addEventListener('DOMContentLoaded', function() {
    // Remove any existing page navigation div
    const existingNav = document.querySelector('.page-navigation');
    if (existingNav) {
        existingNav.remove();
    }
    
    // Remove any existing print button
    const existingPrintBtn = document.querySelector('.print-button');
    if (existingPrintBtn) {
        existingPrintBtn.remove();
    }
    // Add smooth scrolling for better navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Print functionality removed as requested
    
    // Page navigation functionality removed as requested
    
    // Highlight skills on hover
    function enhanceSkills() {
        const skillItems = document.querySelectorAll('.skills p');
        skillItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.backgroundColor = '#f0f7ff';
                this.style.transition = 'background-color 0.3s';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.backgroundColor = 'transparent';
            });
        });
    }
    
    // Add animation to job details
    function animateJobDetails() {
        const jobDetails = document.querySelectorAll('.job-details');
        jobDetails.forEach(detail => {
            detail.style.transition = 'all 0.5s ease';
        });
    }
    
    // Initialize functions
    // Print button removed
    // Page navigation removed
    enhanceSkills();
    animateJobDetails();
});
