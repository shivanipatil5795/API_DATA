/*document.addEventListener('DOMContentLoaded', () => {
    // Simulated cart array to store added products
    let cart = [];

    fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
        .then(response => response.json())
        .then(data => {
            const productContainer = document.getElementById('product-container');
            const searchInput = document.getElementById('search-input');
            const cartItems = document.getElementById('cart-items');
            let currentCategory = 'All';

            function createProductCard(product) {
                const card = document.createElement('div');
                card.classList.add('card');

                const img = document.createElement('img');
                img.src = product.image;
                img.alt = product.title;
                card.appendChild(img);

                const title = document.createElement('h3');
                title.textContent = product.title;
                card.appendChild(title);

                const price = document.createElement('p');
                price.textContent = `Price: ${product.price}`;
                card.appendChild(price);

                const vendor = document.createElement('p');
                vendor.textContent = `Vendor: ${product.vendor}`;
                card.appendChild(vendor);

                if (product.badge_text) {
                    const badge = document.createElement('div');
                    badge.classList.add('badge');
                    badge.textContent = product.badge_text;
                    card.appendChild(badge);
                }

                // Add to Cart button
                const addToCartBtn = document.createElement('button');
                addToCartBtn.textContent = 'Add to Cart';
                addToCartBtn.addEventListener('click', () => {
                    addToCart(product);
                });
                card.appendChild(addToCartBtn);

                return card;
            }

            function renderProducts(category, searchQuery = '') {
                productContainer.innerHTML = '';

                data.categories.forEach(cat => {
                    if (cat.category_name === category || category === 'All') {
                        cat.category_products.forEach(product => {
                            if (product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                product.vendor.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                product.price.includes(searchQuery) ||
                                (product.badge_text && product.badge_text.toLowerCase().includes(searchQuery.toLowerCase()))) {
                                const card = createProductCard(product);
                                productContainer.appendChild(card);
                            }
                        });
                    }
                });
            }

            function addToCart(product) {
                // Add product to cart
                cart.push(product);
                updateCartUI();
            }

            function updateCartUI() {
                cartItems.innerHTML = '';
                cart.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = `${item.title} - ${item.price}`;
                    cartItems.appendChild(li);
                });
            }

            renderProducts('All');

            window.filterCategory = function(category) {
                const btns = document.querySelectorAll('.nav-btn');
                btns.forEach(btn => btn.classList.remove('active'));

                if (category === 'Men') {
                    btns[0].classList.add('active');
                } else if (category === 'Women') {
                    btns[1].classList.add('active');
                } else if (category === 'Kids') {
                    btns[2].classList.add('active');
                }

                currentCategory = category;
                renderProducts(category, searchInput.value);
            };

            searchInput.addEventListener('input', () => {
                renderProducts(currentCategory, searchInput.value);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
*/

/*document.addEventListener('DOMContentLoaded', () => {
    // Simulated cart array to store added products
    let cart = [];

    fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
        .then(response => response.json())
        .then(data => {
            const productContainer = document.getElementById('product-container');
            const searchInput = document.getElementById('search-input');
            const cartItems = document.getElementById('cart-items');
            const cartIcon = document.querySelector('.cart-icon');
            const cartItemsContainer = document.getElementById('cart-items-container');
            let currentCategory = 'All';

            function createProductCard(product) {
                const card = document.createElement('div');
                card.classList.add('card');

                const img = document.createElement('img');
                img.src = product.image;
                img.alt = product.title;
                card.appendChild(img);

                const title = document.createElement('h3');
                title.textContent = product.title;
                card.appendChild(title);

                const price = document.createElement('p');
                price.textContent = `Price: ${product.price}`;
                card.appendChild(price);

                const vendor = document.createElement('p');
                vendor.textContent = `Vendor: ${product.vendor}`;
                card.appendChild(vendor);

                if (product.badge_text) {
                    const badge = document.createElement('div');
                    badge.classList.add('badge');
                    badge.textContent = product.badge_text;
                    card.appendChild(badge);
                }

                // Add to Cart button
                const addToCartBtn = document.createElement('button');
                addToCartBtn.textContent = 'Add to Cart';
                addToCartBtn.addEventListener('click', () => {
                    addToCart(product);
                });
                card.appendChild(addToCartBtn);

                return card;
            }

            function renderProducts(category, searchQuery = '') {
                productContainer.innerHTML = '';

                data.categories.forEach(cat => {
                    if (cat.category_name === category || category === 'All') {
                        cat.category_products.forEach(product => {
                            if (product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                product.vendor.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                product.price.includes(searchQuery) ||
                                (product.badge_text && product.badge_text.toLowerCase().includes(searchQuery.toLowerCase()))) {
                                const card = createProductCard(product);
                                productContainer.appendChild(card);
                            }
                        });
                    }
                });
            }

            function addToCart(product) {
                // Add product to cart
                cart.push(product);
                updateCartUI();
                cartItemsContainer.classList.remove('hidden');
                document.querySelector('main').style.marginRight = '300px';  // Push main content left
            }

            function updateCartUI() {
                cartItems.innerHTML = '';
                cart.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = `${item.title} - ${item.price}`;
                    cartItems.appendChild(li);
                });
            }

            renderProducts('All');

            window.filterCategory = function(category) {
                const btns = document.querySelectorAll('.nav-btn');
                btns.forEach(btn => btn.classList.remove('active'));

                if (category === 'Men') {
                    btns[0].classList.add('active');
                } else if (category === 'Women') {
                    btns[1].classList.add('active');
                } else if (category === 'Kids') {
                    btns[2].classList.add('active');
                }

                currentCategory = category;
                renderProducts(category, searchInput.value);
            };

            searchInput.addEventListener('input', () => {
                renderProducts(currentCategory, searchInput.value);
            });

            cartIcon.addEventListener('click', () => {
                cartItemsContainer.classList.toggle('hidden');
                document.querySelector('main').style.marginRight = cartItemsContainer.classList.contains('hidden') ? '0' : '300px';
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});  */


/*document.addEventListener('DOMContentLoaded', () => {
    
    let cart = [];
    let wishlist = [];

    fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
        .then(response => response.json())
        .then(data => {
            const productContainer = document.getElementById('product-container');
            const searchInput = document.getElementById('search-input');
            const cartItems = document.getElementById('cart-items');
            const wishlistItems = document.getElementById('wishlist-items');
            const cartIcon = document.querySelector('.cart-icon');
            const wishlistIcon = document.querySelector('.wishlist-icon');
            const cartItemsContainer = document.getElementById('cart-items-container');
            const wishlistItemsContainer = document.getElementById('wishlist-items-container');
            let currentCategory = 'All';

            function createProductCard(product) {
                const card = document.createElement('div');
                card.classList.add('card');

                const img = document.createElement('img');
                img.src = product.image;
                img.alt = product.title;
                card.appendChild(img);

                const title = document.createElement('h3');
                title.textContent = product.title;
                card.appendChild(title);

                const price = document.createElement('p');
                price.textContent = `Price: ${product.price}`;
                card.appendChild(price);

                const vendor = document.createElement('p');
                vendor.textContent = `Vendor: ${product.vendor}`;
                card.appendChild(vendor);

                if (product.badge_text) {
                    const badge = document.createElement('div');
                    badge.classList.add('badge');
                    badge.textContent = product.badge_text;
                    card.appendChild(badge);
                }

                const addToCartBtn = document.createElement('button');
                addToCartBtn.textContent = 'Add to Cart';
                addToCartBtn.addEventListener('click', () => {
                    addToCart(product);
                });
                card.appendChild(addToCartBtn);

                const addToWishlistBtn = document.createElement('button');
                addToWishlistBtn.textContent = 'Add to Wishlist';
                addToWishlistBtn.addEventListener('click', () => {
                    addToWishlist(product);
                });
                card.appendChild(addToWishlistBtn);

                return card;
            }

            function renderProducts(category, searchQuery = '') {
                productContainer.innerHTML = '';

                data.categories.forEach(cat => {
                    if (cat.category_name === category || category === 'All') {
                        cat.category_products.forEach(product => {
                            if (product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                product.vendor.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                product.price.includes(searchQuery) ||
                                (product.badge_text && product.badge_text.toLowerCase().includes(searchQuery.toLowerCase()))) {
                                const card = createProductCard(product);
                                productContainer.appendChild(card);
                            }
                        });
                    }
                });
            }

            function addToCart(product) {
                cart.push(product);
                updateCartUI();
                cartItemsContainer.classList.add('open');
                wishlistItemsContainer.classList.remove('open');
                document.querySelector('main').style.marginRight = '300px';  
                updateCartCount();
            }

            function addToWishlist(product) {
                wishlist.push(product);
                updateWishlistUI();
                wishlistItemsContainer.classList.add('open');
                cartItemsContainer.classList.remove('open');
                document.querySelector('main').style.marginRight = '300px';  
                updateWishlistCount();
            }

            function updateCartUI() {
                cartItems.innerHTML = '';
                cart.forEach((item, index) => {
                    const li = document.createElement('li');
                    li.classList.add('cart-item');
                    li.innerHTML = `
                        <img src="${item.image}" alt="${item.title}" class="item-image">
                        <span>${item.title} - ${item.price}</span>
                        <button class="delete-btn" onclick="removeFromCart(${index})">Delete</button>
                    `;
                    cartItems.appendChild(li);
                });
            }

            function updateWishlistUI() {
                wishlistItems.innerHTML = '';
                wishlist.forEach(item => {
                    const li = document.createElement('li');
                    li.classList.add('wishlist-item');
                    li.innerHTML = `
                        <img src="${item.image}" alt="${item.title}" class="item-image">
                        <span>${item.title} - ${item.price}</span>
                    `;
                    wishlistItems.appendChild(li);
                });
            }

            function updateCartCount() {
                document.getElementById('cart-count').textContent = cart.length;
            }

            function updateWishlistCount() {
                document.getElementById('wishlist-count').textContent = wishlist.length;
            }

            function toggleCart() {
                cartItemsContainer.classList.toggle('open');
                wishlistItemsContainer.classList.remove('open');
                document.querySelector('main').style.marginRight = cartItemsContainer.classList.contains('open') ? '300px' : '0';
            }

            function toggleWishlist() {
                wishlistItemsContainer.classList.toggle('open');
                cartItemsContainer.classList.remove('open');
                document.querySelector('main').style.marginRight = wishlistItemsContainer.classList.contains('open') ? '300px' : '0';
            }

            window.removeFromCart = function(index) {
                cart.splice(index, 1);
                updateCartUI();
                updateCartCount();
            };

            window.placeOrder = function() {
                if (cart.length === 0) {
                    alert('Your cart is empty!');
                    return;
                }
                alert('Order placed successfully!');
                cart = [];
                updateCartUI();
                updateCartCount();
                cartItemsContainer.classList.remove('open');
                document.querySelector('main').style.marginRight = '0';
            };

            cartIcon.addEventListener('click', toggleCart);
            wishlistIcon.addEventListener('click', toggleWishlist);

            renderProducts('All');

            window.filterCategory = function(category) {
                const btns = document.querySelectorAll('.nav-btn');
                btns.forEach(btn => btn.classList.remove('active'));

                if (category === 'Men') {
                    btns[0].classList.add('active');
                } else if (category === 'Women') {
                    btns[1].classList.add('active');
                } else if (category === 'Kids') {
                    btns[2].classList.add('active');
                }

                currentCategory = category;
                renderProducts(category, searchInput.value);
            };

            searchInput.addEventListener('input', () => {
                renderProducts(currentCategory, searchInput.value);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
*/


document.addEventListener('DOMContentLoaded', () => {
    
    let cart = [];
    let wishlist = [];

    fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
        .then(response => response.json())
        .then(data => {
            const productContainer = document.getElementById('product-container');
            const searchInput = document.getElementById('search-input');
            const cartItems = document.getElementById('cart-items');
            const wishlistItems = document.getElementById('wishlist-items');
            const cartIcon = document.querySelector('.cart-icon');
            const wishlistIcon = document.querySelector('.wishlist-icon');
            const cartItemsContainer = document.getElementById('cart-items-container');
            const wishlistItemsContainer = document.getElementById('wishlist-items-container');
            let currentCategory = 'All';

            function createProductCard(product) {
                const card = document.createElement('div');
                card.classList.add('card');

                const img = document.createElement('img');
                img.src = product.image;
                img.alt = product.title;
                card.appendChild(img);

                const title = document.createElement('h3');
                title.textContent = product.title;
                card.appendChild(title);

                const price = document.createElement('p');
                price.textContent = `Price: ${product.price}`;
                card.appendChild(price);

                const vendor = document.createElement('p');
                vendor.textContent = `Vendor: ${product.vendor}`;
                card.appendChild(vendor);

                if (product.badge_text) {
                    const badge = document.createElement('div');
                    badge.classList.add('badge');
                    badge.textContent = product.badge_text;
                    card.appendChild(badge);
                }

                const addToCartBtn = document.createElement('button');
                addToCartBtn.textContent = 'Add to Cart';
                addToCartBtn.addEventListener('click', () => {
                    addToCart(product);
                });
                card.appendChild(addToCartBtn);

                const addToWishlistBtn = document.createElement('button');
                addToWishlistBtn.textContent = 'Add to Wishlist';
                addToWishlistBtn.addEventListener('click', () => {
                    addToWishlist(product);
                });
                card.appendChild(addToWishlistBtn);

                return card;
            }

            function renderProducts(category, searchQuery = '') {
                productContainer.innerHTML = '';

                data.categories.forEach(cat => {
                    if (cat.category_name === category || category === 'All') {
                        cat.category_products.forEach(product => {
                            if (product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                product.vendor.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                product.price.includes(searchQuery) ||
                                (product.badge_text && product.badge_text.toLowerCase().includes(searchQuery.toLowerCase()))) {
                                const card = createProductCard(product);
                                productContainer.appendChild(card);
                            }
                        });
                    }
                });
            }

            function addToCart(product) {
                cart.push(product);
                updateCartUI();
                cartItemsContainer.classList.add('open');
                wishlistItemsContainer.classList.remove('open');
                document.querySelector('main').style.marginRight = '300px';  
                updateCartCount();
            }

            function addToWishlist(product) {
                wishlist.push(product);
                updateWishlistUI();
                wishlistItemsContainer.classList.add('open');
                cartItemsContainer.classList.remove('open');
                document.querySelector('main').style.marginRight = '300px';  
                updateWishlistCount();
            }

            function updateCartUI() {
                cartItems.innerHTML = '';
                cart.forEach((item, index) => {
                    const li = document.createElement('li');
                    li.classList.add('cart-item');
                    li.innerHTML = `
                        <img src="${item.image}" alt="${item.title}" class="item-image">
                        <span>${item.title} - ${item.price}</span>
                        <button class="delete-btn" onclick="removeFromCart(${index})">Delete</button>
                        <button class="move-to-wishlist-btn" onclick="moveToWishlist(${index})">Move to Wishlist</button>
                    `;
                    cartItems.appendChild(li);
                });

                if (cart.length > 0) {
                    const placeOrderBtn = document.createElement('button');
                    placeOrderBtn.classList.add('place-order-btn');
                    placeOrderBtn.textContent = 'Place Order';
                    placeOrderBtn.addEventListener('click', placeOrder);
                    cartItems.appendChild(placeOrderBtn);
                }
            }

            function updateWishlistUI() {
                wishlistItems.innerHTML = '';
                wishlist.forEach((item, index) => {
                    const li = document.createElement('li');
                    li.classList.add('wishlist-item');
                    li.innerHTML = `
                        <img src="${item.image}" alt="${item.title}" class="item-image">
                        <span>${item.title} - ${item.price}</span>
                        <button class="delete-btn" onclick="removeFromWishlist(${index})">Delete</button>
                        <button class="add-to-cart-btn" onclick="moveToCart(${index})">Add to Cart</button>
                    `;
                    wishlistItems.appendChild(li);
                });
            }

            function updateCartCount() {
                document.getElementById('cart-count').textContent = cart.length;
            }

            function updateWishlistCount() {
                document.getElementById('wishlist-count').textContent = wishlist.length;
            }

            function toggleCart() {
                cartItemsContainer.classList.toggle('open');
                wishlistItemsContainer.classList.remove('open');
                document.querySelector('main').style.marginRight = cartItemsContainer.classList.contains('open') ? '300px' : '0';
            }

            function toggleWishlist() {
                wishlistItemsContainer.classList.toggle('open');
                cartItemsContainer.classList.remove('open');
                document.querySelector('main').style.marginRight = wishlistItemsContainer.classList.contains('open') ? '300px' : '0';
            }

            window.removeFromCart = function(index) {
                cart.splice(index, 1);
                updateCartUI();
                updateCartCount();
            };

            window.removeFromWishlist = function(index) {
                wishlist.splice(index, 1);
                updateWishlistUI();
                updateWishlistCount();
            };

            window.moveToWishlist = function(index) {
                const product = cart[index];
                removeFromCart(index);
                addToWishlist(product);
            };

            window.moveToCart = function(index) {
                const product = wishlist[index];
                removeFromWishlist(index);
                addToCart(product);
            };

            window.placeOrder = function() {
                if (cart.length === 0) {
                    alert('Your cart is empty!');
                    return;
                }
                alert('Order placed successfully!');
                cart = [];
                updateCartUI();
                updateCartCount();
                cartItemsContainer.classList.remove('open');
                document.querySelector('main').style.marginRight = '0';
            };

            cartIcon.addEventListener('click', toggleCart);
            wishlistIcon.addEventListener('click', toggleWishlist);

            renderProducts('All');

            window.filterCategory = function(category) {
                const btns = document.querySelectorAll('.nav-btn');
                btns.forEach(btn => btn.classList.remove('active'));

                if (category === 'Men') {
                    btns[0].classList.add('active');
                } else if (category === 'Women') {
                    btns[1].classList.add('active');
                } else if (category === 'Kids') {
                    btns[2].classList.add('active');
                }

                currentCategory = category;
                renderProducts(category, searchInput.value);
            };

            searchInput.addEventListener('input', () => {
                renderProducts(currentCategory, searchInput.value);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
