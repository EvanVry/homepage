const menu = document.getElementById("navmenu");
const navButton = document.getElementById("navbar");
const filter = document.getElementById("filter");

// false = closed, true = opened
let navState = false;

function navigation() {
  // Open animation for navigation menu
  if (!navState) {
    menu.style.animation = "slideIn 700ms forwards";

    filter.style.opacity = 0;
    filter.style.animation = "fadeIn 700ms forwards";

    navButton.innerHTML = "x";
    navState = true;

    // Close animation for navigation menu
  } else {
    menu.style.animation = "slideOut 700ms forwards";

    filter.style.opacity = 0.5;
    filter.style.animation = "fadeOut 700ms forwards";

    navButton.innerHTML = "≡";
    navState = false;
  }
}
