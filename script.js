document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

const text = "Wordpress & Frontend Developer";
let index = 0;

function typingEffect() {

if(index < text.length){

document.getElementById("typing").innerHTML += text.charAt(index);

index++;

setTimeout(typingEffect,100);

}

}

typingEffect();



const elements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", ()=>{

elements.forEach(el=>{

const position = el.getBoundingClientRect().top;

if(position < window.innerHeight - 100){

el.classList.add("show");

}

});

});