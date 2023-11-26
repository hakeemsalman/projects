const menuIcon = document.querySelector(".menu-icon");
const menuBar = document.querySelector(".mobile-nav-menu");

menuIcon.addEventListener("click", () => {
  menuBar.classList.toggle("menu-open");
  if (menuBar.classList.contains("menu-open")) {
    menuBar.style.maxHeight = menuBar.scrollHeight + "px";
  } else {
    menuBar.style.maxHeight = "0";
  }
});

function toggleElement() {
  const parnterButton = document.querySelector(".peoples-button");
  if (window.innerWidth < 768) {
    parnterButton.innerText = "Learn More";
  } else {
    parnterButton.innerText = "View Team";
  }
}
window.addEventListener("resize", toggleElement);
toggleElement();
