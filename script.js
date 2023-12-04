function filterItems() {
    const categoryFilter = document.getElementById('categoryFilter');
    const selectedCategory = categoryFilter.value;
    
    const items = document.querySelectorAll('.flex-item');

    items.forEach(item => {
        const category = item.dataset.category.toLowerCase();
        
        if (selectedCategory === 'all' || category === selectedCategory) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}