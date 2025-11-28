// Script for navigation bar
let navbarList = document.querySelector(".navbar-list")
let menuButton = document.querySelector(".menu")
menuButton.addEventListener("click", () => {
  navbarList.classList.toggle("active")
})