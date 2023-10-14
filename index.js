var loader = document.getElementById("preloader");
var stick = document.querySelector("nav");

    window.addEventListener("load" , function(){
        loader.style.display = "none";
        stick.classList.add('sticky-top');
    })
var scroll =document.querySelector("nav").offsetHeight;

document.documentElement.style.setProperty('--scroll-padding',scroll +'px');