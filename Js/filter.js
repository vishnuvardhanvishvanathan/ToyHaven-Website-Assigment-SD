document.addEventListener('DOMContentLoaded',()=>{
    const searchinput = document.getElementById('search-name');
    const categoryfilter = document.querySelectorAll('.touch');
    const products = document.querySelectorAll('.prod-container .prod');

    let selectedcategory = 'all';


    function filterproducts(){
        const uservalue = searchinput ? searchinput.value.toLowerCase().trim() : "";
      
        console.log(selectedcategory);
        products.forEach(product =>{
            /*Get each displayed product name*/
            const productname = product.querySelector('h5') ? product.querySelector('h5').textContent.toLowerCase() : "";

            
            /*Product description*/
            const productdescription1 = product.querySelector('span');
            const producttype1 = productdescription1 ? productdescription1.textContent.toLowerCase(): '';

            const productdescription2 = product.querySelector('.type');
            const producttype2 = product.querySelector('.type')?.textContent?.toLowerCase() || '';

            //Checking for matches
            const searchmatch = productname.includes(uservalue);
            console.log(producttype1);
            const matchescategory = selectedcategory === "all" ||  producttype1.includes(selectedcategory) || producttype2.includes(selectedcategory);
            
            if (searchmatch && matchescategory){
                product.style.display = '';
            }
            else{
                product.style.display = 'none';
            }
       
        });
    }


    if (searchinput) searchinput.addEventListener('input', filterproducts);
    categoryfilter.forEach(button=>{
        button.addEventListener('click',(e)=>{
            selectedcategory = e.target.textContent.toLowerCase().trim();
            filterproducts();           
        })
    })
    
});