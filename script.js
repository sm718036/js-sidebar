let sideBarBtn = document.querySelector(".fa-bars");
let navMenu = document.querySelector("aside");
let closeBtn = document.querySelector(".fa-xmark");
let barsDiv = document.querySelector(".tohide");

sideBarBtn.addEventListener("click", function(){
    navMenu.classList.toggle("open-sidebar");
    barsDiv.classList.add("bars");
})

closeBtn.addEventListener("click", function(){
    navMenu.classList.remove("open-sidebar");
    barsDiv.classList.remove("bars");
})