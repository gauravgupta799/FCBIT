document.getElementById("year").innerHTML = new Date().getFullYear();
const body = document.querySelector("#body");
const header = document.querySelector('.header');
const html = document.querySelector("html")

//======  Loader start ======
window.onload = () => {
  const loader = document.querySelector(".loader-container");
  loader.style.display = "none";
}
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

window.addEventListener("load",() => {
  tl.from(".header__logo, .header__navItem, .header__btnWrapper", {
      opacity:0,
      duration:1,
      ease: Power4.easeOut,
  });
  tl.from(".heading",{
      opacity:0,
      duration:1,
      delay:-1,
      y:50,
      stagger:0.5,
      ease: Power4.easeOut,
  });
  tl.from(".hero-btn", {
      opacity:0,
      x:-50,
      ease:Power4.easeOut,
  });
})
//====== Loader end ======

//====== Sticky header start ======
function toggleHeaderSticky(scrollY){
  if (scrollY > 20){
    header.classList.add("sticky");
    let reqQuoteBtn = document.querySelector(".request_quote");
    if(scrollY > 600){
      reqQuoteBtn.classList.add("show-quote-btn");
    }else{
      reqQuoteBtn.classList.remove("show-quote-btn");
    }
  }else{
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


// ============= Popup Modal start ==========
const poupBtns = document.querySelectorAll(".inpect-my-property-btn");
const popUp = document.querySelector(".popup");
poupBtns.forEach((poupBtn) =>{
  poupBtn.addEventListener("click", () => {
    popUp.style.display = "flex";
    html.classList.add("overflow-hidden");
  });

  const closePopupBtn = document.querySelector("#pop-up-close-btn");
  closePopupBtn.addEventListener("click", () => {
    popUp.style.display = "none";
    html.classList.remove("overflow-hidden");
  })
});
// ============= Popup Modal start ==========


// Counter script start
const counterSection = document.querySelector(".sed__figure");
const counters = document.querySelectorAll(".counter");
if(counterSection && counters) {
    let CounterObserver = new IntersectionObserver(
        (entries, observer)=>{
            let [entry] = entries;
            if(!entry.isIntersecting) return;
    
            let speed = 200;
            counters.forEach((counter, index) => {
                const updateCounter = () =>{
                    let targetNumber = +counter.dataset.target;
                    let initialNumber = +counter.innerText;
                    let incPerCount = targetNumber / speed;
                    if(initialNumber  < targetNumber ){
                        counter.innerText = Math.ceil(initialNumber + incPerCount);
                        setTimeout(updateCounter, 20);
                    }
                }
                updateCounter();
            })
            observer.unobserve(counterSection);
        },{
            root:null,
            threshold:0.4,
        }
    );
    CounterObserver.observe(counterSection);
}
// Counter script end


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
            slidesPerView:2,
        },
    }
});
//====== Swipers end ======


//====== Animation start ======

//  animation fade in 
const fadeIn = gsap.utils.toArray(".animate-fade-in");
fadeIn.forEach((mainContent, i) => {
  const anim = gsap.fromTo(
    mainContent,
    { opacity: 0,duration: 1},
    {opacity: 1,duration: 1 }
  );
  ScrollTrigger.create({
    trigger: mainContent,
    animation: anim,
    toggleActions: "play",
    once: true,
    duration: 1,
    stagger:0.5,
    ease: Power4.easeOut,
  });
});

// animate fade in up
const textContainers = gsap.utils.toArray(".animate-fade-in-up");
textContainers.forEach((item, i) => {
  const anim = gsap.fromTo(
    item,
    { opacity: 0, y: 50},
    { opacity: 1, y: 0,duration: 1  }
  );
  ScrollTrigger.create({
    trigger: item,
    animation: anim,
    toggleActions: "play",
    once: true,
    duration: 1,
    stagger:1,
    ease: Power4.easeOut,
  });
});

const fadeIn2 = gsap.utils.toArray(".fade-in");
fadeIn2.forEach((mainContent, i) => {
  const anim = gsap.fromTo(mainContent,
    { opacity: 0, duration:1},
    {opacity: 1, duration:1}
  );
  ScrollTrigger.create({
    trigger: mainContent,
    animation: anim,
    toggleActions: "play",
    once: true,
    // stagger:0.5,
    ease: Power4.easeOut,
  });
});

let revealContainers = document.querySelectorAll(".reveal");

revealContainers.forEach((container) => {
  let image = container.querySelector("img");
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      toggleActions: "restart none none reset"
    }
  });

  tl.set(container, { autoAlpha: 1 });
  tl.from(container, 1.5, {
    xPercent: -100,
    ease: Power2.out
  });
  tl.from(image, 1.5, {
    xPercent: 100,
    scale: 1.3,
    delay: -1.5,
    ease: Power2.out
  });
});
//====== Animation end ======