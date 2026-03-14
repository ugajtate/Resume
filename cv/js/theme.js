var darkMode = false;

function toggleDarkMode() {
    var elements = document.querySelectorAll('body, .navBar, .navBar a, .navBar a.active, .navBar p, .search-container, .search-container input, .search-container button, #darkModeToggle, .footer, .footer a, .footer p, .hero, .headshot, .form, .form label, .form input, .form textarea, .form input[type="submit"], .education, .educations-heading, .projects-heading, .projects');
    elements.forEach(function(element) {
        if (darkMode) {
            element.classList.remove('dark-mode');
        } else {
            element.classList.add('dark-mode');
        }
    });
    darkMode = !darkMode;
}
document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);