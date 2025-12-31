// Function to scroll smoothly to the menu section
function scrollToMenu() {
    const menuSection = document.getElementById('menu');
    menuSection.scrollIntoView({ behavior: 'smooth' });
}

// Function to handle ordering items
function orderItem(itemName) {
    alert(`Great choice! You have added ${itemName} to your cart.`);
}
