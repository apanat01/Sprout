// Get menu toggler element
const menuToggle = document.getElementById("menuToggle");

// Open and close the mobile navbar menu
function mobileMenuController() {
  // Get navbar menu element
  const menu = document.getElementById("navBarMenu");
  
  // Open and close the menu based on menu display status
  if (menu.classList.contains("displayed")) {
    // Hide navbar items
    menu.classList.remove("displayed");
    menuToggle.querySelector("a").innerHTML = '<img src="media/icons/menu.svg"/>';
  } else {
    // Display navbar items
    menu.classList.add("displayed");
    menuToggle.querySelector("a").innerHTML = '<img src="media/icons/x.svg"/>';
  }
}

// Open or close the mobile menu when the menu toggle is clicked
menuToggle.addEventListener("click", mobileMenuController, false);