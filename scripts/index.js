const mobileMenuIcon = document.getElementById("hamburger-menu");
const mobileNav = document.getElementById("mobile-nav")


function openMenu() {
  console.log("working")
  mobileNav.style.display = "flex";
  mobileNav.style.width = "75%"
}
function closeMenu() {
  console.log("working")
  mobileNav.style.width = "0"
}