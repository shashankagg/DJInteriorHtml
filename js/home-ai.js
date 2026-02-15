// ============================================
// Lightbox - Full-screen image viewer
// ============================================

let lightboxImages = [];
let lightboxIndex = 0;

function openLightbox(gridItem) {
    const img = gridItem.querySelector('img');
    if (!img) return;

    // Collect all portfolio images for navigation
    const allItems = document.querySelectorAll('.portfolio-grid-item');
    lightboxImages = Array.from(allItems).map(item => ({
        src: item.querySelector('img').src,
        alt: item.querySelector('img').alt
    }));

    // Find the index of the clicked image
    const clickedSrc = img.src;
    lightboxIndex = lightboxImages.findIndex(i => i.src === clickedSrc);
    if (lightboxIndex === -1) lightboxIndex = 0;

    showLightboxImage();
    document.getElementById('lightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function showLightboxImage() {
    const data = lightboxImages[lightboxIndex];
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');

    lightboxImg.src = data.src;
    lightboxImg.alt = data.alt;
    lightboxCaption.textContent = data.alt;
}

function closeLightbox(event) {
    if (event.target.id === 'lightbox' || event.target.classList.contains('lightbox-close')) {
        document.getElementById('lightbox').classList.remove('active');
        document.body.style.overflow = '';
    }
}

function navigateLightbox(event, direction) {
    event.stopPropagation();
    lightboxIndex = (lightboxIndex + direction + lightboxImages.length) % lightboxImages.length;
    showLightboxImage();
}

// ============================================
// Initialize everything when DOM is ready
// ============================================
document.addEventListener('DOMContentLoaded', function() {

    // Event delegation for portfolio grid items (lightbox open)
    document.querySelectorAll('.portfolio-grid-item').forEach(item => {
        item.addEventListener('click', function() {
            openLightbox(this);
        });
    });

    // Lightbox close & nav buttons
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.addEventListener('click', closeLightbox);
    }
    document.querySelectorAll('.lightbox-close').forEach(btn => {
        btn.addEventListener('click', function(e) {
            document.getElementById('lightbox').classList.remove('active');
            document.body.style.overflow = '';
            e.stopPropagation();
        });
    });
    document.querySelectorAll('.lightbox-prev').forEach(btn => {
        btn.addEventListener('click', function(e) { navigateLightbox(e, -1); });
    });
    document.querySelectorAll('.lightbox-next').forEach(btn => {
        btn.addEventListener('click', function(e) { navigateLightbox(e, 1); });
    });

    // Keyboard navigation for lightbox
    document.addEventListener('keydown', function(e) {
        const lb = document.getElementById('lightbox');
        if (!lb || !lb.classList.contains('active')) return;

        if (e.key === 'Escape') {
            lb.classList.remove('active');
            document.body.style.overflow = '';
        } else if (e.key === 'ArrowLeft') {
            lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
            showLightboxImage();
        } else if (e.key === 'ArrowRight') {
            lightboxIndex = (lightboxIndex + 1) % lightboxImages.length;
            showLightboxImage();
        }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu) mobileMenu.classList.add('hidden');
            }
        });
    });
});

// ============================================
// Legacy SectionManager (kept for reference)
// No longer used since portfolio is always visible
// ============================================