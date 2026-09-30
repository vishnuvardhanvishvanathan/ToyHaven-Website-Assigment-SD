document.addEventListener('DOMContentLoaded',()=>{

    const hero = document.querySelector('.heroslide');
    if (hero){

        var slide = new Swiper(hero,{
            nested:true,
            effect:"coverflow",
            grabCursor:true,
            centeredSlides:true,
            loop:true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            slidesPerView: "auto",
            initialSlide: 2,
            speed: 600,
            preventClicks:true,
            slidesPerView:"auto",

            coverflowEffect:{
                rotate:0,
                stretch: 80,
                depth:350,
                modifier:1,
                slideShadows:true,
            },
            pagination: {
            el: '.swiper-pagination',
            clickable: true
            }
        });
    }
    const outerContainer = document.querySelector('.outer-wrapper');
    if (outerContainer) {
        new Swiper(outerContainer, {
        slidesPerView: "auto", 
        spaceBetween: 30,      
        grabCursor: true,
        
        speed: 400,
        preventClicks: true,
        });
    }
    const outersheet = document.querySelector('.myswiper');
    if (outersheet) {
        new Swiper(outersheet, {
        slidesPerView: "auto", 
        spaceBetween: 30,      
        grabCursor: true,
        loop:false,
        speed: 400,
        preventClicks: true,
        });
    }
    
    
    

});


