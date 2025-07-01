// Custom JavaScript for Unified Coding Hub

// Example: Simple console log to confirm JS is loading
console.log('Unified Coding Hub custom JavaScript loaded!');

// Example: Add a class to external links for styling
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a').forEach(link => {
        if (link.hostname !== window.location.hostname && link.hostname !== '') {
            link.classList.add('external-link');
            link.setAttribute('target', '_blank'); // Open external links in a new tab
            link.setAttribute('rel', 'noopener noreferrer'); // Security best practice
        }
    });

    // Example: Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Example: Dynamic copyright year in footer (assuming you add a span with ID "current-year" in an override)
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- RIPPLE EFFECT FOR BUTTONS ---
    function createRipple(event) {
        const button = event.currentTarget;
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;
        circle.classList.add('ripple');
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
        circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
        button.appendChild(circle);
        circle.addEventListener('animationend', () => circle.remove());
    }
    document.querySelectorAll('.custom-button').forEach(btn => {
        btn.addEventListener('click', createRipple);
    });

    // --- FADE-IN ANIMATION ON LOAD ---
    function fadeInOnLoad() {
        const main = document.querySelector('.md-content, .md-main__inner');
        const sidebar = document.querySelector('.md-sidebar__inner');
        if (main) main.classList.add('fade-in-up');
        if (sidebar) sidebar.classList.add('fade-in-up');
    }
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        window.addEventListener('DOMContentLoaded', fadeInOnLoad);
    }

    // --- SCROLL TO TOP BUTTON ---
    let scrollBtn = document.getElementById('scroll-to-top');
    if (!scrollBtn) {
        scrollBtn = document.createElement('button');
        scrollBtn.id = 'scroll-to-top';
        scrollBtn.innerHTML = '↑';
        document.body.appendChild(scrollBtn);
    }
    function toggleScrollBtn() {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    }
    window.addEventListener('scroll', toggleScrollBtn);
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- ANIMATE ACTIVE SIDEBAR LINK ---
    function animateActiveNav() {
        document.querySelectorAll('.md-nav__link').forEach(link => {
            if (link.classList.contains('active') || link.classList.contains('md-nav__link--active')) {
                link.classList.add('active-nav-animate');
            } else {
                link.classList.remove('active-nav-animate');
            }
        });
    }
    window.addEventListener('DOMContentLoaded', animateActiveNav);
    window.addEventListener('hashchange', animateActiveNav);
});