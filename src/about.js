import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animation Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once visible to only animate once
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    // Parallax Effect for Hero
    const heroSection = document.querySelector('.about-hero');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition < window.innerHeight) {
                // Move background slower than scroll
                heroSection.style.backgroundPositionY = `${70 + scrollPosition * 0.1}%`;
                // Adjust calculation based on initial background-position if needed. 
                // Default is center which is 50%. Let's try to manipulate Y.
                // Actually 'center/cover' means center x and center y.
                // Let's use string manipulation or just set it. 
                // A simpler parallax is often: transform: translateY(val) on content or bg-attachment: fixed (but fixed has mobile issues).
                // Let's try changing background-position-y.
                // Assuming it starts centered (50%).
                heroSection.style.backgroundPosition = `center ${50 + scrollPosition * 0.05}%`;
            }
        });
    }
});
