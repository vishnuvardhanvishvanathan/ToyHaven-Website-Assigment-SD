document.addEventListener('DOMContentLoaded',()=>{
    let cart = JSON.parse(localStorage.getItem('shoppingCart'));

    const productdetails = document.querySelector('.productdetails');
    const paytotal = document.querySelector('#tot');
    const subtotal = document.querySelector('#subt');
    const checkoutbtn = document.querySelector('#paymentbtn');

    if (checkoutbtn){
        checkoutbtn.addEventListener('click', (e)=>{
            e.preventDefault();
            const fnameInput = document.querySelector('#firstname');
            const lnameInput = document.querySelector('#lastname');


            const streetaddress = document.querySelector('#streetaddress1');
            const phoneInput = document.querySelector('#phone');
            const zipcode = document.querySelector('#zipcode');

            const errorMsg = document.querySelector('.errormsg');

            const errorMsg1 = document.querySelector('#error-message1');
            const errorMsg2 = document.querySelector('#error-message2');
            const errorMsg3 = document.querySelector('#error-message3');
            const errorMsg4 = document.querySelector('#error-message4');

            [errorMsg1, errorMsg2, errorMsg3, errorMsg4].forEach(el => {
                if (el) el.style.display = 'none';
            });

            const fnameval = fnameInput ? fnameInput.value.trim(): '';
            const lnameval = lnameInput ? lnameInput.value.trim() : '';

            const streetaddressval = streetaddress ? streetaddress.value.trim(): '';
            const phoneval = phoneInput ? phoneInput.value.trim(): '';
            const zipcodeval = zipcode ? zipcode.value.trim(): '';

            if (!fnameval || !lnameval || !streetaddressval || !phoneval || !zipcodeval){
                showError(errorMsg, 'Please fill in all fields.');
                return;
            }
            if (!isNaN(fnameval) || !isNaN(lnameval)){
                showError(errorMsg1, 'Please enter valid first and last name.');
                return;
            }
            if (zipcodeval.length<5 || zipcodeval.length!==6 || isNaN(zipcodeval)){
                showError(errorMsg3, 'Please enter a valid zip code.');
                return;
            }
            if (isNaN(phoneval) || phoneval.length!==10){
                showError(errorMsg4, 'Please Enter a valid 10 digit phone number! ');
                return;
            }
            
      
            
            window.location.href = '../../Pages/payment-checkout/index.html';
        })
    }
    function showError(element, message){
        if(element){
            element.textContent = message;
            element.style.display = 'block'
        }
    }
    function rendercart(){
        console.log("hi");
        
        
        if (cart.length>0){
            productdetails.innerHTML = cart.map(item => `
                <section class="cartitem">
                    <section class="prod">
                        <img src="${item.img}" class="cartimg">
                        <section class="about">
                            <p>${item.title}</p>
                            <section class="price">
                                <section class="prodprice">
                                    <p>${item.price}</p>
                                </section>
                                <p class="multiply">X</p>
                                <section class="quantity">
                                    <p>${item.quantity}</p>                        
                                </section>
                            </section>
                        </section>
                        <section>
                            <h3 class="subtotal">$${(item.quantity*parseFloat(String(item.price).replace(/[^0-9.]/g, '')))}</h3>
                        </section>
                    </section>
                    
                </section>
            
            `).join('')
                        

            const grandTotal = cart.reduce((total, item) =>{
                const pricenum = parseFloat(String(item.price).replace(/[^0-9.]/g, ''));
                return total + (pricenum * item.quantity);
            },0)
            subtotal.innerHTML = `$${(grandTotal).toFixed(1)}`;
            paytotal.innerHTML = `$${(grandTotal*1.15).toFixed(1)}`

        }
    }
        
        rendercart();
     
    
});
    