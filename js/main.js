document.addEventListener("DOMContentLoaded", function() {
    const headerPlaceholder = document.getElementById('main-header');
    const footerPlaceholder = document.getElementById('main-footer');

    // Cargar Navbar
    if (headerPlaceholder) {
        fetch('/_navbar.html')
            .then(response => response.text())
            .then(data => {
                headerPlaceholder.innerHTML = data;
            });
    }

    // Cargar Footer
    if (footerPlaceholder) {
        fetch('/_footer.html')
            .then(response => response.text())
            .then(data => {
                footerPlaceholder.innerHTML = data;
            });
    }
});
