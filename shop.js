adocument.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartLink = document.getElementById('cart-link');
    const cartCount = document.getElementById('cart-count');
    const cartSection = document.getElementById('cart');
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const checkoutButton = document.getElementById('checkout');
    const cartOverlay = document.getElementById('cart-overlay');
    const closeCartButton = document.getElementById('close-cart');

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', event => {
            const productElement = event.target.closest('.product');
            const productId = productElement.dataset.id;
            const productName = productElement.dataset.name;
            const productPrice = parseFloat(productElement.dataset.price);

            addToCart(productId, productName, productPrice);
            updateCartCount();
            updateCartView();
        });
    });

    cartLink.addEventListener('click', event => {
        event.preventDefault();
        openCart();
    });

    cartOverlay.addEventListener('click', () => {
        closeCart();
    });

    closeCartButton.addEventListener('click', () => {
        closeCart();
    });

    checkoutButton.addEventListener('click', () => {
        alert('Proceeding to checkout');
        // Implement checkout logic here
    });

    function addToCart(id, name, price) {
        const existingProduct = cart.find(item => item.id === id);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({ id, name, price, quantity: 1 });
        }
    }

    function updateCartCount() {
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    }

    function updateCartView() {
        cartItems.innerHTML = '';
        let totalPrice = 0;

        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
            cartItems.appendChild(listItem);
            totalPrice += item.price * item.quantity;
        });

        totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
    }

    function openCart() {
        cartSection.classList.add('open');
        cartOverlay.classList.add('open');
    }

    function closeCart() {
        cartSection.classList.remove('open');
        cartOverlay.classList.remove('open');
    }
});
