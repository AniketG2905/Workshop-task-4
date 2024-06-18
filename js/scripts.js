// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Search functionality
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('keyup', function() {
        const query = searchInput.value.toLowerCase();
        const contentItems = document.querySelectorAll('.content-grid div');
        
        contentItems.forEach(function(item) {
            const title = item.getAttribute('data-title').toLowerCase();
            if (title.includes(query)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
    
    // Simulate content loading
    const contentGrids = document.querySelectorAll('.content-grid');
    contentGrids.forEach(function(grid) {
        for (let i = 0; i < 2; i++) {
            const contentItem = document.createElement('div');
            contentItem.setAttribute('KGF', `Content ${i+1}`);
            contentItem.innerHTML = `<img src="img/hqdefault.jpg" alt="Content ${i+1}">`;
            grid.appendChild(contentItem);
        }
    });
});
