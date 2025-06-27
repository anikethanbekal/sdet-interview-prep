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

    // Example: Basic Dark Mode Toggle (requires custom header override in MkDocs)
    // For a more robust solution, refer to Material for MkDocs documentation
    // This assumes you add a custom button in a header partial override.
    // E.g., <button id="dark-mode-toggle">Toggle Dark Mode</button>
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            // You might want to save the preference in localStorage
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });

        // Apply theme from localStorage on load
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-mode');
        }
    }
});
