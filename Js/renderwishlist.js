document.addEventListener('DOMContentLoaded',()=>{
    let wishlist = JSON.parse(localStorage.getItem('shoppingwishlist'));
    const emptylist = document.querySelector('.emptywishlist');
    const activelist = document.querySelector('.activewishlist');
    const listtotal = document.querySelector('#total');
    const fulltotal = document.querySelector('#finaltotal');
    const checkoutbtn = document.querySelector('#btncheckout');
    
    

        function renderlist(){
            if (wishlist.length===0){
            emptylist.style.display = 'flex';
            activelist.style.display = 'none';
            
            }
            else{
                emptylist.style.display = 'none';
                activelist.style.display = 'flex';
                activelist.innerHTML = wishlist.map(item => `
                   <section class="wishcard">
                    <img class="productimg" src="${item.img}" alt="">
                    <section class="about">
                        <h2 class="prodtitle">${item.title}</h2>
                        <h2>${item.price}</h2>
                        <a class="shopitembtn" href="${item.link}">VIEW ITEM</a>
                        <span class="deletewish">Delete  item</span>
                    </section>
                    <section class="clsbtn">
                        <img src="../../images/cls-btn.svg" alt="">
                    </section>
                </section>
                <section class="dividerhori"></section>
                `).join('')
                deletebtnattacheventlistener();
                cardattacheventlistener();

            
            }
        }
        
        function deletelistitem(event){
            
            const listitem = event.target.closest('.wishcard');
            const listitemname = listitem.querySelector('.about .prodtitle').textContent;       
            wishlist = wishlist.filter(item => item.title !== listitemname);
            
            localStorage.setItem('shoppingwishlist',JSON.stringify(wishlist));
            renderlist();
        }
        function growcard(targetcard){
            if(targetcard){
                targetcard.style.transition = 'transform 0.4s ease-in-out'
            }
        }  
           
        function deletebtnattacheventlistener(){
            const deleteitem = document.querySelectorAll('.deletewish, .clsbtn');
            deleteitem.forEach(span=>{
                span.addEventListener('click',(e)=>{
                    deletelistitem(e);           
                })
            })
        }
        function cardattacheventlistener(){
            const wishcard = document.querySelectorAll(".wishcard");
            wishcard.forEach(card=>{
                card.addEventListener('mouseenter',(e)=>{
                    const targetcard = e.currentTarget;
                    growcard(targetcard);
                    card.style.transform = 'scale(1.05) translateY(-1px)';
                })
            
                card.addEventListener('mouseleave', (e)=>{
                        e.currentTarget.style.transform = 'scale(1) translateY(0)';
                })
            })
        }
     
 
        renderlist();
     
});