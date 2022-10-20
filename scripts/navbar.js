// Get menu toggler element
const menuToggle = document.getElementById("menuToggle");

// Open and close the mobile navbar menu
function mobileMenuController() {
  // Get navbar menu element
  const navBarItems = document.getElementsByClassName("navBarItem");
  
  // Open and close the menu based on menu display status
  if (navBarItems[0].classList.contains("displayed")) {
    // Hide navbar items
    Array.from(navBarItems).forEach((item) => item.classList.remove("displayed"));
    menuToggle.querySelector("a").innerHTML = '<img src="media/icons/menu.svg"/>';
  } else {
    // Display navbar items
    Array.from(navBarItems).forEach((item) => item.classList.add("displayed"))
    menuToggle.querySelector("a").innerHTML = '<img src="media/icons/x.svg"/>';
  }
}

// Open or close the mobile menu when the menu toggle is clicked
menuToggle.addEventListener("click", mobileMenuController, false);