
// TO DO
    
    // 1. Create object for product details

    const items = {
        A: {
            name: 'Apple',
            price: 0.5,
            image: '',
            // a. add boolean to show if product is on offer.
            onOffer: true,
            offerDetails: {
                 // b. add offer details which will be triggered later e.g. threshold and new price
                threshold: 3,
                newPrice: 130,
            }
        },
        B: {
            name: 'Banana',
            price: 0.3,
            image: '',
            onOffer: true,
            offerDetails: {
                threshold: 2,
                newPrice: 45,
            }
        },
        C: {
            name: 'Orange',
            price: 0.2,
            image: '',
            onOffer: false,
            offerDetails: {
                threshold: 0,
                newPrice: 0,
            }
        },
        D: {
            name: 'Pear',
            price: 0.15,
            image: '',
            onOffer: false,
            offerDetails: {
                threshold: 0,
                newPrice: 0,
            }
        },
        
    }
        

    /* 2. Create functionality for add/remove cart
        a. Add to bag button adds product
        b. Remove from cart button to remove
    */



    // 3. Functionality to check and update items of offer
    // a. is 1a true? do b.
    // b. check 1b. offer details. What is the threshold for offer to trigger? Should trigger on multiple of this number above 0



    // 4. Calculate totals


