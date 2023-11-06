document.getElementById("year").innerHTML = new Date().getFullYear();
const body = document.querySelector("#body");
const header = document.querySelector('.header');

//======  Loader start ======
window.onload = () => {
  const loader = document.querySelector(".loader-container");
  loader.style.display = "none";
}
//====== Loader start ======

//====== Sticky header start ======
function toggleHeaderSticky(scrollY){
  if (scrollY > 20){
    header.classList.add("sticky");
  } else{
    header.classList.remove("sticky");
  }
}
window.addEventListener("scroll",()=>{
  const scrollY = window.scrollY;
  toggleHeaderSticky(scrollY);
});
//====== Sticky header end ======

//====== Active Page Link start ======
const windowPathname = window.location.pathname;
const navLinks = document.querySelectorAll(".header__navLink");
navLinks.forEach(link =>{
  const navLinkPathname = new URL(link.href).pathname;
  if((windowPathname === navLinkPathname) || (windowPathname === "/index.html" && navLinkPathname === "/")){
    link.classList.add("active");
  }
});
//====== Active Page Link end ======

//====== Mobile Menu Toggle start ======
$(document).ready(function() {
    $('.hamburger').click(function(){
        $(".header__mobile").addClass('open');
        $(".overlay").addClass('active');
        $("html").addClass("overflow-hidden");
    });
    $(".overlay").click(function(){
        $(".header__mobile").removeClass('open');
        $(".overlay").removeClass('active');
        $("html").removeClass("overflow-hidden");
    });
    $(".header__submenu--mobile").hide();
    $(".header__submenu--heading-mobile").click(function(e){
        $(".header__submenu--mobile").toggle(1000);
    });
    $(".video__action-btns").click(function (e){
      $(".video__popup-container").addClass('video-show');
      $(".video__popup-overlay").addClass('video-overlay-show');
      $("html").addClass("overflow-hidden");
    });
    $(".video__popup-close").click(function(){
      $(".video__popup-container").removeClass('video-show');
      $(".video__popup-overlay").removeClass('video-overlay-show');
      $("html").removeClass("overflow-hidden");
    });
});
//====== Mobile Menu Toggle end ======

//====== Timeline start ======
$(document).ready(function () {
  var mySwiper = new Swiper(".swiper-container--timeline", {
    autoHeight: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    speed: 500,
    direction: "horizontal",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar"
    },
    loop: false,
    effect: "slide",
    spaceBetween: 15,
    slidesPerView:1,
    on: {
      init: function () {
        $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
        $(".swiper-pagination-custom .swiper-pagination-switch").eq(0).addClass("active");
      },
      slideChangeTransitionStart: function () {
        $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
        $(".swiper-pagination-custom .swiper-pagination-switch").eq(mySwiper.realIndex).addClass("active");
      }
    },
    breakpoints:{
      540:{
        spaceBetween: 25,
      },
  }
    
  });
  $(".swiper-pagination-custom .swiper-pagination-switch").click(function () {
    mySwiper.slideTo($(this).index());
    $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
    $(this).addClass("active");
  });
});
//====== Timeline end ======

//====== Swipers start ======
const swiper1 = new Swiper(".swiper-project", {
    spaceBetween:30,
    slidesPerView:1,
    navigation: {
      nextEl: ".chevron--next",
      prevEl: ".chevron--prev",
    },
    breakpoints:{
        768:{
            slidesPerView:1.5,
        },
        992:{
            slidesPerView:2.5,
        },
    }
});

const swiper2 = new Swiper(".swiper-customers", {
    spaceBetween:30,
    slidesPerView:1,
    grabCursor:true,
    autoplay:{
      delay:3000,
    },
    breakpoints:{
        768:{
            slidesPerView:1.2,
        },
        992:{
            slidesPerView:1.8,
        },
    }
});
//====== Swipers end ======


//====== Animation start ======
//====== Animation end ======