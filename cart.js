
// TO DO
    
    // 1. Create object for product details

    const items = {
        'A': {
            name: 'Apple',
            price: '0.50',
            image: '',
            // a. add boolean to show if product is on offer.
            onOffer: true,
            offerDetails: {
                 // b. add offer details which will be triggered later e.g. threshold and new price
                threshold: 3,
                newPrice: 130,
            }
        },
        'B': {
            name: 'Banana',
            price: '0.30',
            image: '',
            onOffer: true,
            offerDetails: {
                threshold: 2,
                newPrice: 45,
            }
        },
        'C': {
            name: 'Orange',
            price: '0.20',
            image: '',
            onOffer: false,
            offerDetails: {
                threshold: 0,
                newPrice: 0,
            }
        },
        'D': {
            name: 'Pear',
            price: '0.15',
            image: '',
            onOffer: false,
            offerDetails: {
                threshold: 0,
                newPrice: 0,
            }
        },
        
    }
    // Keep track of items in cart
    let itemsInCart = [];
    
    if (document.readyState == "loading") {
        document.addEventListener('DOMContentLoaded', ready);
    } else {
        ready();
    }

    function ready() {
        // Add to cart button event listener
        const addToCartBtns = document.querySelectorAll('.shop__cart-btn');
        addToCartBtns.forEach(btn => btn.addEventListener('click', handleAddToCart));
        
        // Remove from cart button event listener
        const removeFromCartBtns = document.querySelectorAll('.cart__btn-remove');
        removeFromCartBtns.forEach(btn => btn.addEventListener('click', handleRemoveFromCart));
    }

    // 2. Create functionality for add/remove cart
    //    a. Add to bag button adds product
        
    //    b. handle cart items and keep track of what's added.
        function handleAddToCart(event) {
            let addToCartBtn = event.target;
            let itemId = addToCartBtn.parentElement.parentElement.dataset.productId;
            addToCart(itemId);
            // Add item id to 'itemsInCart' for tracking;
            itemsInCart.push(itemId);
        }
        function addToCart(itemId) {
            const cartContainer = document.getElementById('cart');
            let newCartItem = document.createElement('div');
            newCartItem.classList.add('card', 'cart__item');
            newCartItem.dataset.cartId = itemId;
            let cartItemTemplate = `
            <div class="row row-cols-4">
                <div class="col-2 d-none d-sm-block">
                    <img src="https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=200" alt="${items[itemId].name}" class="img-fluid">
                </div>
                <div class="col align-self-center text-center">
                    <p class="card-text m-0 cart__name">
                        ${items[itemId].name}
                    </p>
                    <p class="card-text cart__price">
                    £${items[itemId].price}
                    </p>
                </div>
                <div class="col align-self-center text-center">
                    <p class="card-text cart__quantity">Quantity: <span class="cart__quantity-total">1</span></p>
                </div>
                <div class="col align-self-center text-center">
                    <button class="btn btn-danger cart__btn-remove">Remove</button>
                </div>
            </div>`;
            newCartItem.innerHTML = cartItemTemplate;
            cartContainer.append(newCartItem);
            newCartItem.getElementsByClassName('cart__btn-remove')[0].addEventListener('click', handleRemoveFromCart);
        }
    //    c. Remove from cart button to remove
    function handleRemoveFromCart(event) {
        let removeBtnClick = event.target;
        let cartId = removeBtnClick.parentElement.parentElement.parentElement.dataset.cartId;
        console.log(cartId);
        removeBtnClick.parentElement.parentElement.parentElement.remove();
    }



    // 3. Functionality to check and update items of offer
    // a. is 1a true? do b.
    // b. check 1b. offer details. What is the threshold for offer to trigger? Should trigger on multiple of this number above 0



    // 4. Calculate totals

    function updateTotals() {
        const cartPrices = document.querySelectorAll('.cart__price');
        const subtotalContainer = document.querySelector('.total__subtotal');


    }

