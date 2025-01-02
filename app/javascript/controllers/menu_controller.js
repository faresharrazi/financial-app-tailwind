// app/javascript/controllers/menu_controller.js
import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="menu"
export default class extends Controller {
  static targets = [
    "profileDropdown",
    "mobileMenu",
    "menuOpenIcon",
    "menuCloseIcon",
  ];

  // For profile menu
  toggleProfile(event) {
    event.preventDefault();
    this.profileDropdownTarget.classList.toggle("hidden");
  }

  // For mobile menu (hamburger)
  toggleMobileMenu(event) {
    event.preventDefault();
    // Toggle the mobile menu container
    this.mobileMenuTarget.classList.toggle("hidden");
    // Swap the hamburger icon and the X icon
    this.menuOpenIconTarget.classList.toggle("hidden");
    this.menuCloseIconTarget.classList.toggle("hidden");
  }
}
