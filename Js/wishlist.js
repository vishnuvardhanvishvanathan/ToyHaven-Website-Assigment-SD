document.addEventListener('DOMContentLoaded',()=>{
    const wishlistbtn = document.querySelectorAll('.wishbtn');

    const wishlistpgbtn = document.querySelector('.WishListbtn');
// 
function checkwishlistStatusForButtons() {
        const wishlist = JSON.parse(localStorage.getItem('shoppingwishlist')) || [];
        if (wishlist.length === 0) return;

        // Check product detail page button
        if(wishlistbtn){
            wishlistbtn.forEach(btn=>{

            const card = btn.closest('.prod') || btn.closest('.outer-cover');
            const title = card?.querySelector('.des h5')?.textContent;
                if (title && wishlist.some(item => item.title === title)) {
                    btn.dataset.inwishlist = "false";
                    toggleWishlistState(btn);
                }
            });
        }
        
        if (wishlistpgbtn){
            console.log('hi')
            const card = wishlistpgbtn.closest('.product-desc') || wishlistpgbtn.closest('.outer-cover');
            const title = card?.querySelector('#title')?.textContent;
                if (title && wishlist.some(item => item.title === title)) {
                    wishlistpgbtn.dataset.inwishlist = "false";
                    toggleWishlistStateforpage(wishlistpgbtn);
                }
        }
    }

        
   
    function toggleWishlistState(button) {
        const wishicon = button.tagName === 'IMG' ? button : button.querySelector('img');
        const isInWishlist = button.dataset.inwishlist === "true";
        

        if (isInWishlist) {
        
            button.dataset.inwishlist = "false";
            button.classList.remove("checkout-active");
            if (wishicon) wishicon.src = "../../images/favorite.svg";

        } else {
        
            button.dataset.inwishlist = "true";
            button.classList.add("checkout-active");
            if (wishicon) wishicon.src = "../../images/activefavourite.svg";
        }
    }

    
    function toggleWishlistStateforpage(button) {
        const wishicon = button.tagName === 'IMG' ? button : button.querySelector('img');
        const isInWishlist = button.dataset.inwishlist === "true";
        

        if (isInWishlist) {
        
            button.dataset.inwishlist = "false";
            button.classList.remove("checkout-active");
            if (wishicon) wishicon.src = "../../../images/wishlistcard.svg";

        } else {
        
            button.dataset.inwishlist = "true";
            button.classList.add("checkout-active");
            if (wishicon) wishicon.src = "../../../images/activefavourite.svg";
        }
    }
// 
    function AddProductTowishlist(event){
        
        const card = event.target.closest('.prod')
        const product_img = card.querySelector('a[href*="Product_Pages"] img').src;
        const product_title = card.querySelector('.des h5').textContent;
        const product_price = card.querySelector('.des h4').textContent;
        const productAnchor = card.querySelector('a[href*="Product_Pages"]');
        const exactLink = productAnchor ? productAnchor.getAttribute('href') : '#';
        
        console.log(exactLink)
        const newProduct = {
            title: product_title,
            price: product_price,
            img: product_img,
            quantity: 1,
            link:exactLink

        };
        saveToLocalStorage(newProduct);

    }
  
    function AddProductTowishlistFromPage(event){
        const button = event.currentTarget || event.target;
 
        
        const card = button.closest('.outer-cover');
        const product_img = card.querySelector('#primimg').src;
        const product_title = card.querySelector('.product-desc h2').textContent;
        const product_price = card.querySelector('#price').textContent;
        const product_link = window.location.href;
        console.log(product_title);

        const newProduct = {
            title: product_title,
            price: product_price,
            img: product_img,
            quantity: 1,
            page_link:product_link
        };
        saveToLocalStorage(newProduct);

    }
    function saveToLocalStorage(product){
        let wishlist = JSON.parse(localStorage.getItem('shoppingwishlist')) || [];

        const existingItemIndex = wishlist.findIndex(item => item.title === product.title);

        if (existingItemIndex > -1){
            wishlist = wishlist.filter(item => item.title !== wishlist[existingItemIndex].title);
        }
        else{
            wishlist.push(product)         
        }
        localStorage.setItem('shoppingwishlist',JSON.stringify(wishlist));
        

    }
  

    if(wishlistbtn){
        wishlistbtn.forEach(img=>{
            img.addEventListener('click',(e)=>{
                const targetBtn = e.currentTarget;
                AddProductTowishlist(e);  
                toggleWishlistState(targetBtn);  
     
            })
        })
    }
    
    if (wishlistpgbtn){
        wishlistpgbtn.addEventListener('click',(e)=>{
            const targetBtn = e.currentTarget;
            AddProductTowishlistFromPage(e);
            toggleWishlistStateforpage(targetBtn);
    
        })
    }
    
    checkwishlistStatusForButtons();
    

});
