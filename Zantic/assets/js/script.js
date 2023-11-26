const menuIcon = document.querySelectorAll(".mobile-menu-icon");
const menuBar = document.querySelector(".nav-menu-mobile");

console.log(menuIcon);

for (let i = 0; i < menuIcon.length; i++) {
  menuIcon[i].addEventListener("click", () => {
    console.log('HI');
    menuBar.classList.toggle("menu-open");
    console.log('HI2');
    if (menuBar.classList.contains("menu-open")) {
      menuBar.style.maxHeight = menuBar.scrollHeight + "px";
    } else {
      menuBar.style.maxHeight = "0";
    }
  });
}