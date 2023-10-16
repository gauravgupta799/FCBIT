// document.getElementById("year").innerHTML = new Date().getFullYear();
const header = document.querySelector('.header');


// Function to toggle the "sticky" class on the header
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
})
//======  Sticky header end ======



// gsap.registerPlugin(ScrollTrigger);

// // ====== Pre-loader start ======
// const till = gsap.timeline({
//     paused:"true"
// });
// till.to("#percent, #bar",{
//     duration:0.2,
//     opacity:0,
//     zIndex:-1,
// });
// till.to("#preloader",{
//     duration:1,
//     yPercent:-100
// })
// window.onload = () =>{
//     document.querySelector("#body").classList.add("disable-scroll")
//     const percent = document.getElementById("percent");
//     const bar = document.getElementById("barconfirm");
//     let width = 0;
//     let id;
//     function frame(){
//         width = width + Math.floor(Math.random() * 10);
//         if(width >= 100){
//             clearInterval(id);
//             till.play();
//         }else{
//             width++;
//             bar.style.width = width + "%";
//             percent.innerHTML = width + "%";
//         }
//     }
//     id = setInterval(frame, 40);
// }


// // ======  Active Page Link start ======
// const windowPathname = window.location.pathname;
// const navLinks = document.querySelectorAll(".header__mobile-link");
// navLinks.forEach(link =>{
//   const navLinkPathname = new URL(link.href).pathname;
//   if((windowPathname === navLinkPathname) || (windowPathname === "/index.html" && navLinkPathname === "/")){
//     link.classList.add("active");
//   }
// })
// //======  Active Page Link end ======


const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".header__mobile");
const overlay = document.querySelector(".overlay");
// const body = document.querySelector("#body");

hamburger.addEventListener("click", () =>{
  mobileMenu.classList.add("open");
  overlay.classList.add("active");
});
// document.addEventListener("click", () =>{
//   mobileMenu.classList.remove("open");
//   overlay.classList.remove("active");
// })

// // Mobile Menu Toggle start
// $(document).ready(function() {
//     $('.hamburger').click(function(){
//         $(".header__mobile").addClass('open');
//         $(".overlay").addClass('active');
//     });
//     $("#body").click(function(){
//         $(".header__mobile").removeClass('open');
//         $(".overlay").removeClass('active');
//     })
//     $(".footer__input input").focusin(function(){
//         $(".footer__input").addClass("border-color");
//         $(".footer__input").removeClass("error");
//     })
//     $(".footer__input input").focusout(function(){
//         $(".footer__input").removeClass("border-color");
//     });
//     const mobileMenu = document.querySelector(".header__mobile");
//     if(mobileMenu.classList.contains("open")){
//         console.log("true")
//     }else{
//         console.log("fasle")
//     }
// })
// Mobile Menu Toggle End


// // form Validation start
// document.getElementById("footer__form").addEventListener("~submit", (e) => {
//     e.preventDefault();
//     const inputField = document.querySelector('input[type="email"]');
//     if(inputField.value != ""){
//         $(".footer__input").removeClass("error");
//         inputField.value = "";
//     }else{
//         $(".footer__input").addClass("error");
//     }
// })
// // form Validation end 


// Swiper start
const swiper1 = new Swiper(".swiper-project", {
    spaceBetween:30,
    slidesPerView:1,
    // grabCursor:true,
    navigation: {
      nextEl: ".chevron--next",
      prevEl: ".chevron--prev",
    },
    breakpoints:{
        768:{
            slidesPerView:1.5,
            // spaceBetween:15,
        },
        992:{
            slidesPerView:2.5,
            // spaceBetween:5,
        },
    }
})

// Swiper Cutomers
const swiper2 = new Swiper(".swiper-customers", {
    spaceBetween:30,
    slidesPerView:1,
    grabCursor:true,
    breakpoints:{
        768:{
            slidesPerView:1.2,
            // spaceBetween:15,
        },
        992:{
            slidesPerView:1.8,
            // spaceBetween:5,
        },
    }
})



// //====== Animation  start ======
// const tl = gsap.timeline();
// window.addEventListener("load",() => {
//     tl.from(".header__logo, .switch",1, {
//         opacity:0,
//         y:-100,
//         delay:-1,
//         stagger:0.5,
//         ease:Expo.easeInOut
//     });
//     tl.from(".menu",{
//         opacity:0,
//         delay:-1,
//         ease:Expo.easeInOut
//     })
//     tl.from(".heading, .subHeading, .form-group",{
//         opacity:0,
//         duration:1,
//         y:50,
//         stagger:0.5,
//         ease: Power4.easeInOut,
//     });
//     tl.from(".hero-btn", {
//         opacity:0,
//         x:-50,
//         ease:Power4.easeOut,
//     })
//     tl.from(".h-divider",{
//         opacity:0,
//         scaleX:0,
//         duration:1,
//         transformOrigin:"left",
//         ease:Expo.easeInOut
//     })
//     tl.from(".hero__footer-link ",1.05, {
//         opacity:0,
//         x:-50,
//         stagger:0.2,
//         ease:Power4.easeInOut
//     }); 
// })

// //  animation fade in 
// const fadeIn = gsap.utils.toArray(".animate-fade-in");
// fadeIn.forEach((mainContent, i) => {
//   const anim = gsap.fromTo(
//     mainContent,
//     { opacity: 0, scale:0 },
//     {opacity: 1, scale:1,}
//   );
//   ScrollTrigger.create({
//     trigger: mainContent,
//     animation: anim,
//     // scroller:"#body",
//     toggleActions: "play",
//     once: true,
//     duration: 1,
//     stagger:0.5,
//     ease: Power4.easeOut,
//   });
// });

// const fadeIn2 = gsap.utils.toArray(".fade-in");
// fadeIn2.forEach((mainContent, i) => {
//   const anim = gsap.fromTo(mainContent,
//     { opacity: 0,},
//     {opacity: 1, duration:1}
//   );
//   ScrollTrigger.create({
//     trigger: mainContent,
//     animation: anim,
//     // scroller:"#body",
//     toggleActions: "play",
//     once: true,
//     stagger:0.2,
//     ease: Power4.easeOut,
//   });
// });

// // animate fade in up
// const textContainers = gsap.utils.toArray(".animate-fade-in-up");
// textContainers.forEach((item, i) => {
//   const anim = gsap.fromTo(
//     item,
//     { opacity: 0, y: 50 },
//     { duration: 1, opacity: 1, y: 0 }
//   );
//   ScrollTrigger.create({
//     trigger: item,
//     animation: anim,
//     toggleActions: "play",
//     // scroller:"#body",
//     once: true,
//     duration: 1,
//     stagger:1,
//     ease: Power4.easeOut,
//   });
// });

// // slider left
// const leftSlide = gsap.utils.toArray(".slide-left");
// leftSlide.forEach((left, i) =>{
//   const anim = gsap.fromTo(left, 
//     { opacity: 0,x:-100},
//     { opacity: 1, x:0, duration:1}
//   );
//   ScrollTrigger.create({
//     trigger: left,
//     animation: anim,
//     toggleActions: "play",
//     // scroller:"#body",
//     delay:0.4,
//     duration: 3,
//     ease: Power4.easeInOut,
//   });
// })

// // slide right
// const rightSlide = gsap.utils.toArray(".slide-right");
// rightSlide.forEach((right, i) =>{
//   const anim = gsap.fromTo(right, 
//     { opacity: 0, x:100},
//     { opacity: 1, x:0, duration:1}
//   );
//   ScrollTrigger.create({
//     trigger: right,
//     animation: anim,
//     toggleActions: "play",
//     // scroller:"#body",
//     delay:0.6,
//     duration: 3,
//     stagger:1,
//     ease: Power4.easeInOut,
//   });
// });
