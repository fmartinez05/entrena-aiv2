document.addEventListener("DOMContentLoaded", function() {
    const headerPlaceholder = document.getElementById('main-header');
    const footerPlaceholder = document.getElementById('main-footer');

    if (headerPlaceholder) {
        fetch('/_navbar.html')
            .then(response => {
                if (response.ok) return response.text();
                throw new Error('Navbar not found.');
            })
            .then(data => {
                headerPlaceholder.innerHTML = data;
            })
            .catch(error => console.error('Error loading navbar:', error));
    }

    if (footerPlaceholder) {
        fetch('/_footer.html')
            .then(response => {
                if (response.ok) return response.text();
                throw new Error('Footer not found.');
            })
            .then(data => {
                footerPlaceholder.innerHTML = data;
            })
            .catch(error => console.error('Error loading footer:', error));
    }
});
