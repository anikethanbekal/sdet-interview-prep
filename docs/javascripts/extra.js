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

    // Enhanced Dark Mode Toggle with SVG icons
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const iconSun = document.getElementById('icon-sun');
    const iconMoon = document.getElementById('icon-moon');
    function setDarkMode(isDark) {
        if (isDark) {
            document.body.classList.add('dark-mode');
            if (iconSun) iconSun.style.display = 'block';
            if (iconMoon) iconMoon.style.display = 'none';
        } else {
            document.body.classList.remove('dark-mode');
            if (iconSun) iconSun.style.display = 'none';
            if (iconMoon) iconMoon.style.display = 'block';
        }
    }
    // On load, set theme from localStorage
    const theme = localStorage.getItem('theme');
    setDarkMode(theme === 'dark');

    // Add animation to the toggle button
    function animateToggle() {
        if (darkModeToggle) {
            darkModeToggle.style.transform = 'rotate(180deg) scale(1.2)';
            darkModeToggle.style.transition = 'transform 0.5s cubic-bezier(.68,-0.55,.27,1.55)';
            setTimeout(() => {
                darkModeToggle.style.transform = '';
            }, 500);
        }
    }
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            const isDark = !document.body.classList.contains('dark-mode');
            setDarkMode(isDark);
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            animateToggle();
        });
    }
});