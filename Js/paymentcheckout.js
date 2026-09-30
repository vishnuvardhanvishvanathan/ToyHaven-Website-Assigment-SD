document.addEventListener('DOMContentLoaded',()=>{
    
    const expirydate = document.querySelector('#expiry_date');
    const cardnumber = document.querySelector('#card_number');
    const card_holder = document.querySelector('#card_holder');
    const cvc = document.querySelector('#cvc');
    const cardmax = 16;
    const cvcmax = 3;

    const submitbtn = document.querySelector('.paybtn');

    if (cardnumber){
        cardnumber.addEventListener("input", () => {
        cardnumber.value = cardnumber.value.replace(/[^0-9]/g, '');
        if (cardnumber.value.length > cardmax) {
                cardnumber.value = cardnumber.value.slice(0, cardmax);
        }
        

    })
        cvc.addEventListener('keydown', (e) =>{
            if (['-', '+', 'e', 'E'].includes(e.key)) {
            e.preventDefault();
            }
        }) 
    }

    if(card_holder){
        card_holder.addEventListener("input", ()=>{
        card_holder.value = card_holder.value.replace(/[^a-zA-Z\s]/g, '');
        if (card_holder.value.length > 50) {
                card_holder.value = card_holder.value.slice(0, 50);
        }

    })
    }
    
    
    

    if(cvc){
        cvc.addEventListener("input",()=>{
        cvc.value = cvc.value.replace(/[^0-9]/g, '');
        if (cvc.value.length > cvcmax) {
            
                cvc.value = cvc.value.slice(0, cvcmax);
        }
    })

        cvc.addEventListener('keydown', (e) =>{
            if (['-', '+', 'e', 'E'].includes(e.key)) {
            e.preventDefault();
            }
        })    
    }
   

    
    function verify(e){
        
        const today = new Date().toISOString().split('T')[0];
        if (expirydate.value<today){
            e.preventDefault(); 
            alert("Expiry date cannot be past today's date.");
            return;
        }
        
        if (cardnumber.value.length!==cardmax){
            e.preventDefault();
            alert("Card number must be 16 digits.");
            return;
        }
        if (cvc.value.length!==cvcmax){
            e.preventDefault();
            alert("CVC must be 3 digits.");
            return;
        }
        alert("Payment details valid!");
        setTimeout(() => {
        window.location.href = "../../index.html"; 
    }, 100);
    }   
    
  

    if (submitbtn) {
        submitbtn.addEventListener('click', (e) => {
            verify(e);
        });
    }

});

   
