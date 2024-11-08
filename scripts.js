let navlink = document.getElementById("navlink");
let navicon = document.getElementById("navicon");

navicon.addEventListener("click", () =>{
    navlink.classList.toggle('hidden');
})

let darkMood = document.getElementById('dark');
let mainElement = document.getElementById('main');
darkMood.addEventListener("click", ()=> {
    mainElement.classList.toggle("dark");
})