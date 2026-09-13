document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navUl = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        navUl.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navUl.classList.contains('active')) {
                navUl.classList.remove('active');
            }
        });
    });

    // Lightbox Functionality for Gallery
    const galleryImages = document.querySelectorAll('.gallery-img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightbox = document.querySelector('.close-lightbox');

    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImg.src = img.src;
        });
    });

    closeLightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // PDF Modal Functionality
    const accountItems = document.querySelectorAll('.account-item');
    const pdfModal = document.getElementById('pdf-modal');
    const pdfModalTitle = document.getElementById('pdf-modal-title');
    const pdfViewBtn = document.getElementById('pdf-view-btn');
    const pdfDownloadBtn = document.getElementById('pdf-download-btn');
    const closePdfModal = document.querySelector('.close-pdf-modal');

    accountItems.forEach(item => {
        item.addEventListener('click', () => {
            const title = item.querySelector('span').innerText;
            const pdfUrl = item.getAttribute('data-pdf');
            
            pdfModalTitle.innerText = title;
            pdfViewBtn.href = pdfUrl;
            pdfDownloadBtn.href = pdfUrl;
            // Provide a default filename for download based on the title
            pdfDownloadBtn.setAttribute('download', title + '.pdf'); 
            
            pdfModal.style.display = 'flex';
        });
    });

    if (closePdfModal) {
        closePdfModal.addEventListener('click', () => {
            pdfModal.style.display = 'none';
        });
    }

    if (pdfModal) {
        pdfModal.addEventListener('click', (e) => {
            if (e.target === pdfModal) {
                pdfModal.style.display = 'none';
            }
        });
    }

    // Smooth Scrolling for anchor links (fallback for browsers that don't support CSS smooth scroll)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
});
