document.addEventListener('DOMContentLoaded',()=>{
    let cart = JSON.parse(localStorage.getItem('shoppingCart'));
    const emptycart = document.querySelector('.emptycart');
    const activecart = document.querySelector('.activecart');
    const carttotal = document.querySelector('#total');
    const fulltotal = document.querySelector('#finaltotal');
    const checkoutbtn = document.querySelector('#btncheckout');
 
    

        function rendercart(){
            if (cart.length===0){
            emptycart.style.display = 'flex';
            activecart.style.display = 'none';
            
            }
            else{
                emptycart.style.display = 'none';
                activecart.style.display = 'block';
                activecart.innerHTML = cart.map(item => `
                    <section class="cartitem">
                        <section class="prod">
                            <img src="${item.img}" class="cartimg">
                            <p>${item.title}</p>
                        </section>
                        <section class="prodprice">
                            <p>${item.price}</p>
                        </section>
                        <section class="quantity">
                            <button class="itemremove"><img src="../../images/remove.svg" alt=""></button>
                            <p>${item.quantity}</p>
                            <section class="deletecan">
                                <button class="itemadd"><img src="../../images/add.svg" alt=""></button>
                                <button class="itemdelete"><img src="../../images/delete.svg" alt=""></button>
                            </section>
                            
                        </section>             
                    
                </section>
                <section class="dividerhori"></section>
                `).join('')
                minusbtnattacheventlistener();
                addbtnattacheventlistener();
                deletebtnattacheventlistener()

                const grandTotal = cart.reduce((total, item) =>{
                    const pricenum = parseFloat(String(item.price).replace(/[^0-9.]/g, ''));
                    return total + (pricenum * item.quantity);
                },0)
                carttotal.innerHTML = `$${grandTotal.toFixed(1)}`;
                fulltotal.innerHTML = `$${(grandTotal*1.15).toFixed(1)}`

            }
        }
        
        function reducecartitem(event){
            
            const cartitem = event.target.closest('.cartitem');
            const cartitemname = cartitem.querySelector('.prod p').textContent;

            const itemtoreduce = cart.find(item => item.title===cartitemname);
            console.log('hi');
            
            if (itemtoreduce.quantity>1){
                itemtoreduce.quantity -=1;
            }
            else{
                cart = cart.filter(item => item.title !== cartitemname);
            }
            localStorage.setItem('shoppingCart',JSON.stringify(cart));
            rendercart();
        }

        function increasecartitem(event){
            
            const cartitem = event.target.closest('.cartitem');
            const cartitemname = cartitem.querySelector('.prod p').textContent;

            const itemtoreduce = cart.find(item => item.title===cartitemname);
            
            if (itemtoreduce){
                itemtoreduce.quantity +=1;
            }
   
            localStorage.setItem('shoppingCart',JSON.stringify(cart));
            rendercart();
        }

        function deletecartitem(event){
            
            const cartitem = event.target.closest('.cartitem');
            const cartitemname = cartitem.querySelector('.prod p').textContent;       
            cart = cart.filter(item => item.title !== cartitemname);
            
            localStorage.setItem('shoppingCart',JSON.stringify(cart));
            rendercart();
        }
        
        function tocheckout(){
            if (cart.length===0){
                alert('Add Items To Cart, Before Trying To Check Out.')
            }
            else{
                window.location.href='../Checkout/index.html';
            }
            
        }

        function addbtnattacheventlistener(){
            const increaseitem = document.querySelectorAll('.itemadd');
            increaseitem.forEach(button=>{
                button.addEventListener('click',(e)=>{
                    increasecartitem(e);           
                })
            })
        }

        function minusbtnattacheventlistener(){
            const reduceitem = document.querySelectorAll('.itemremove');
            reduceitem.forEach(button=>{
                button.addEventListener('click',(e)=>{
                    reducecartitem(e);           
                })
            })
        }

        function deletebtnattacheventlistener(){
            const deleteitem = document.querySelectorAll('.itemdelete');
            deleteitem.forEach(button=>{
                button.addEventListener('click',(e)=>{
                    deletecartitem(e);           
                })
            })
        }
        if (checkoutbtn){
            checkoutbtn.addEventListener('click', tocheckout);
        }
        rendercart();
     
});
    

    

