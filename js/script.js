/* ==================== SCRIPT.JS ==================== */
/* This JavaScript file contains all the interactive functions for the portfolio website */
/* Functions included:
   1. Welcome message alert
   2. Scroll to top button
   3. Active navigation highlight
   4. Image modal/lightbox for gallery
   5. Gallery filter buttons
*/

// ==================== WELCOME MESSAGE ====================
// Shows a welcome alert when the page loads
window.addEventListener('load', function() {
    // Only show welcome message on the home page (index.html)
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/portfolio/')) {
        setTimeout(function() {
            alert('Welcome to My Portfolio!\n\nHello, I am Malik Alexis M. Ibra.\nThank you for visiting my personal website!');
        }, 500); // Small delay to let the page load first
    }
});

// ==================== SCROLL TO TOP BUTTON ====================
// Get the scroll to top button element
var scrollTopBtn = document.getElementById('scrollTopBtn');

// Show/hide the button based on scroll position
window.addEventListener('scroll', function() {
    // If user scrolls down more than 300px, show the button
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

// Scroll to top function when button is clicked
if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function() {
        // Smooth scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==================== ACTIVE NAVIGATION HIGHLIGHT ====================
// Highlights the current page in the navigation menu
function highlightCurrentPage() {
    // Get the current page filename from the URL
    var currentPage = window.location.pathname.split('/').pop();
    
    // If no filename (root directory), set to index.html
    if (currentPage === '' || currentPage === 'portfolio') {
        currentPage = 'index.html';
    }
    
    // Get all navigation links
    var navLinks = document.querySelectorAll('.nav-link');
    
    // Loop through each link and check if it matches the current page
    navLinks.forEach(function(link) {
        var linkHref = link.getAttribute('href');
        
        // Remove active class from all links first
        link.classList.remove('active');
        
        // Add active class if this link matches the current page
        if (linkHref === currentPage) {
            link.classList.add('active');
        }
    });
}

// Call the highlight function when page loads
highlightCurrentPage();

// ==================== IMAGE MODAL/LIGHTBOX ====================
// Opens the modal with the clicked image
function openModal(imgElement) {
    // Get the modal element
    var modal = document.getElementById('imageModal');
    var modalImg = document.getElementById('modalImg');
    var modalCaption = document.getElementById('modalCaption');
    
    // Display the modal
    modal.style.display = 'block';
    
    // Set the modal image source to the clicked image source
    modalImg.src = imgElement.src;
    
    // Set the caption to the image alt text
    modalCaption.textContent = imgElement.alt;
    
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
}

// Closes the modal
function closeModal() {
    var modal = document.getElementById('imageModal');
    
    // Hide the modal
    modal.style.display = 'none';
    
    // Re-enable scrolling
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside the image
window.addEventListener('click', function(event) {
    var modal = document.getElementById('imageModal');
    if (event.target === modal) {
        closeModal();
    }
});

// Close modal when pressing Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// ==================== GALLERY FILTER FUNCTION ====================
// Filters gallery items based on category
function filterGallery(category) {
    // Get all gallery items
    var galleryItems = document.querySelectorAll('.gallery-item');
    
    // Get all filter buttons
    var filterButtons = document.querySelectorAll('.filter-btn');
    
    // Update active button
    filterButtons.forEach(function(btn) {
        btn.classList.remove('active');
        // Check if this button's onclick contains the selected category
        if (btn.getAttribute('onclick').includes("'" + category + "'")) {
            btn.classList.add('active');
        }
    });
    
    // Show/hide gallery items based on category
    galleryItems.forEach(function(item) {
        var itemCategory = item.getAttribute('data-category');
        
        if (category === 'all' || itemCategory === category) {
            // Show item
            item.style.display = 'block';
            // Add fade animation
            item.style.animation = 'fadeIn 0.5s ease';
        } else {
            // Hide item
            item.style.display = 'none';
        }
    });
    
    // Show/hide entire sections based on filter
    var sections = document.querySelectorAll('.gallery-section');
    sections.forEach(function(section) {
        var sectionCategory = section.getAttribute('data-category');
        
        if (category === 'all') {
            section.style.display = 'block';
        } else if (sectionCategory === category) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

// ==================== SMOOTH SCROLLING FOR ANCHOR LINKS ====================
// Adds smooth scrolling behavior for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ==================== CONSOLE MESSAGE ====================
// Fun message for developers who check the console
console.log('%c Welcome to My Portfolio! ', 'background: #2c3e50; color: #f1c40f; font-size: 20px; padding: 10px;');
console.log('%c Created by: Malik Alexis M. Ibra ', 'background: #f1c40f; color: #2c3e50; font-size: 14px; padding: 5px;');
console.log('Thank you for visiting my portfolio website!');
