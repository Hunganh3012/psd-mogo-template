// ------------style hamburger bars header toogle on Mobile-----------------------
const menuToggle=document.querySelector(".header-toggle");
const menuHeader=document.querySelector(".header-menu");
const expandClass= "is-expend";
menuToggle.addEventListener("click",function(){
    menuHeader.classList.add(expandClass);
});
window.addEventListener("click",function(e){
    if(!menuHeader.contains(e.target) && !e.target.matches(".header-toggle")){
        menuHeader.classList.remove(expandClass)
    }
});
//-----------------------Quote slick slider-----------------------------
$(document).ready(function(){
    $('.quote-item').slick(
        {
            autoplay:true,
            arrows: true,
            prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
            responsive: [
                {
                  breakpoint: 767,
                  settings: {
                    arrows: false,
                  },
                },
            ],
        });
});
$(document).ready(function(){
    $('.quote-avatar-item').slick(
        {
            autoplay:true,
            arrows: true,
            prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
            responsive: [
                {
                  breakpoint: 767,
                  settings: {
                    arrows: false,
                  },
                },
            ],
    });
});