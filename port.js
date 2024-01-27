document.addEventListener('DOMContentLoaded', function () {
    // Existing code for toggling the menu
    function toggleMenu() {
        var navLinks = document.getElementById('nav-links');
        navLinks.classList.toggle('active');
    }
//pop up

    // Attach click event listener to the hamburger menu
    document.querySelector('.hamburger-menu').addEventListener('click', toggleMenu);

    // Function to filter services
    function filterServices(filterClass) {
        const serviceItems = document.querySelectorAll('.service-item');
        serviceItems.forEach(item => {
            if (filterClass === '*' || item.classList.contains(filterClass)) {
                item.style.display = 'block'; // Show item
            } else {
                item.style.display = 'none'; // Hide item
            }
        });
    }

    // Add click event to each filter button
    const filterButtons = document.querySelectorAll('.service-filter button');
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filterClass = this.getAttribute('data-filter').replace('.', '');
            filterServices(filterClass);
        });
    });
    //skill


    // Dark mode toggle functionality
    const toggleDarkMode = () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    };

    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // Attach event listener to dark mode toggle button
    const darkModeToggleButton = document.getElementById('dark-mode-toggle');
    if (darkModeToggleButton) {
        darkModeToggleButton.addEventListener('click', toggleDarkMode);
    }
    //ripple
    $(document).ready(function() {
        $("#ripple-container").ripples({
            resolution: 512,      // Higher for more detailed ripples
            dropRadius: 20,       // Radius of the ripple effect
            perturbance: 0.01,    // Lower for smoother ripples
            interactive: true,    // Allows interaction with the ripples
            crossOrigin: ''       // Use if images are involved, for CORS
        });
    });
    // Initialize Typed.js on the .mutiple-text element
    var typed = new Typed(".mutiple-text", {
        strings: ["Web Developer !", "DevOps Engineer !", "Data Engineer !", " UX/UI Designer !"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});
