document.addEventListener('DOMContentLoaded', function() {
    function performSearch() {
        var query = document.getElementById('input-search-bar').value;
        if (query.trim() !== "") {
            window.location.href = "dicaA.html";
        }
    }

    document.getElementById('input-search-bar').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            performSearch();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var userName = localStorage.getItem('name');

    var loginMenuItem = document.getElementById('login');

    if (userName) {
        loginMenuItem.textContent = 'Perfil';

        loginMenuItem.href = 'perfil.html';
    }
});