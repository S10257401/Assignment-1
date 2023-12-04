let cartOpen = false;

function navigateToCart() {
    // Change 'cart.html' to the desired HTML file
    window.location.href = 'cart.html';
}

function toggleCart() {
    console.log("Cart clicked!");
    const cartIcon = document.querySelector('.cart i');
    cartOpen = !cartOpen;

    if (cartOpen) {
        // Add a visual indication when the cart is open (change color to red, for example)
        cartIcon.style.color = 'red';
        // Implement additional logic to show/hide the actual cart content
    } else {
        // Reset the visual indication when the cart is closed
        cartIcon.style.color = 'white';
        // Implement additional logic to show/hide the actual cart content
    }
}

function addToCart(productId, productName, productPrice) {
    // Implement logic to add items to the cart (you can use local storage, etc.)
    console.log(`Added to cart: ${productName} - $${productPrice}`);
    // Implement additional logic for the cart, e.g., update cart count, etc.
}
