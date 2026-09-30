document.addEventListener('DOMContentLoaded',()=>{
    const addbtn = document.querySelectorAll('.addbtn');
    console.log(JSON.parse(localStorage.getItem('shoppingCart')));
    const addtocartbtn = document.querySelector('#addcartbtn');
// 
function checkCartStatusForButtons() {
        const cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
        if (cart.length === 0) return;

        // Check product detail page button
        if (addtocartbtn) {
            const card = addtocartbtn.closest('.outer-cover');
            const title = card?.querySelector('.product-desc #title')?.textContent;
            if (title && cart.some(item => item.title === title)) {
                setButtonToCheckoutState(addtocartbtn);
            }
        }

        
    }
    //called when product already in cart
    function setButtonToCheckoutState(button) {
        button.textContent = "Check Out";
        button.dataset.inCart = "true";
        button.classList.add("checkout-active");
    }
// 
    function AddProductToCart(event){
        const card = event.target.closest('.prod')
        const product_img = card.querySelector('a[href*="Product_Pages"] img').src;
        const product_title = card.querySelector('.des h5').textContent;
        const product_price = card.querySelector('.des h4').textContent;


        const newProduct = {
            title: product_title,
            price: product_price,
            img: product_img,
            quantity: 1
        };
        saveToLocalStorage(newProduct);

    }
    function AddProductToCartFromPage(event){
        const button = event.currentTarget || event.target;
        if (button.dataset.inCart === "true") {
            window.location.href = "../../AddToCart/index.html";
            return;
        }
        
        const card = button.closest('.outer-cover');
        const product_img = card.querySelector('#primimg').src;
        const product_title = card.querySelector('#title').textContent;
        const product_price = card.querySelector('#price').textContent;
        console.log(product_title);

        const newProduct = {
            title: product_title,
            price: product_price,
            img: product_img,
            quantity: 1
        };
        saveToLocalStorage(newProduct);
        checkCartStatusForButtons();
    }
    function saveToLocalStorage(product){
        let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

        const existingItemIndex = cart.findIndex(item => item.title === product.title);

        if (existingItemIndex > -1){
            cart[existingItemIndex].quantity+=1;
        }
        else{
            cart.push(product)         
        }
        localStorage.setItem('shoppingCart',JSON.stringify(cart));

    }
  

    if(addbtn){
        addbtn.forEach(img=>{
            img.addEventListener('click',(e)=>{
                AddProductToCart(e);           
            })
        })
    }
    
    if (addtocartbtn)
    addtocartbtn.addEventListener('click',(e)=>{
        AddProductToCartFromPage(e);
    })
    checkCartStatusForButtons();
});
