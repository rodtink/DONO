const nav_open = document.querySelector(".ri-menu-5-fill")
const menu = document.querySelector(".ul")
const nav_close = document.querySelector("#colse_menu")


nav_open.addEventListener("click", function() {
    menu.classList.add("show_menu")
})

nav_close.addEventListener("click", function() {
    menu.classList.remove("show_menu")
})

let client_link1 = document.querySelector('.client_link1');
let client_link2 = document.querySelector('.client_link2');
let client_link3 = document.querySelector('.client_link3');

let client_det1 = document.querySelector('.client_det1');
let client_det2 = document.querySelector('.client_det2');
let client_det3 = document.querySelector('.client_det3');

 client_link1.addEventListener('click' , () =>{
    client_det1.style.left = '0%';
    client_det1.classList.toggle('add_anim_left');
    client_det1.style.display= 'block';
    client_det2.style.display= 'none';
    client_det3.style.display= 'none';
});
 client_link2.addEventListener('click' , () =>{
    client_det2.style.left = '0%';
    client_det2.classList.toggle('add_anim_left');
    client_det2.style.display= 'block';
    client_det1.style.display= 'none';
    client_det3.style.display= 'none';
});
 client_link3.addEventListener('click' , () =>{
    client_det3.style.left = '0%';
    client_det3.classList.toggle('add_anim_left');
    client_det3.style.display= 'block';
    client_det2.style.display= 'none';
    client_det1.style.display= 'none';
});


const number = document.querySelectorAll(".count")

let interval = 5000;

number.forEach((valueDisplay) => {
    let StartValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-count"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function() {
        StartValue += 1;
        valueDisplay.textContent = StartValue
        if (StartValue == endValue) {
            clearInterval(counter);
        }
    }, duration)
});

