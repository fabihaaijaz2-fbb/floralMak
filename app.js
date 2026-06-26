// Welcome Message

console.log("Welcome to FloralMak");

// Navbar Shadow

window.addEventListener("scroll",function(){

const nav=document.querySelector(".navbar");

if(window.scrollY>50){

nav.classList.add("shadow");

}else{

nav.classList.remove("shadow");

}

});

// Newsletter

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you for subscribing to FloralMak!");

});

}

// Button Hover

const buttons=document.querySelectorAll(".btn");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});