/**
 * MobiWash Online Booking System - Login Module
 * JavaScript functionality for login validation, modal management, and navigation toggle
 */

// ==========================================
// AUTHENTICATION CONFIGURATION
// ==========================================
// Basic credentials for login validation
const validCredentials = {
  username: "admin",
  password: "password",
};

// ==========================================
// LOGIN FORM VALIDATION
// ==========================================
/**
 * Validates login credentials and handles authentication
 * Prevents default form submission and shows error modal if credentials are incorrect
 */
function validateLogin() {
  // Prevent default form submission
  event.preventDefault();

  // Get input values
  const usernameInput = document.getElementById("uname").value.trim();
  const passwordInput = document.getElementById("pwd").value.trim();

  // Validate credentials
  if (
    usernameInput === validCredentials.username &&
    passwordInput === validCredentials.password
  ) {
    // Successful login - redirect to main page
    window.location.href = "index.html";
  } else {
    // Failed login - show error modal
    showModal();
  }
}

// ==========================================
// MODAL MANAGEMENT
// ==========================================
/**
 * Displays the error modal when login credentials are incorrect
 */
function showModal() {
  const modal = document.querySelector(".modal");
  modal.style.display = "block";
}

/**
 * Hides the error modal and clears input fields
 * Called when user clicks "TRY AGAIN" button
 */
function dismissModal() {
  const modal = document.querySelector(".modal");
  modal.style.display = "none";

  // Clear input fields for next attempt
  document.getElementById("uname").value = "";
  document.getElementById("pwd").value = "";
}

// ==========================================
// SIDEBAR NAVIGATION TOGGLE
// ==========================================
// Track sidebar state
let sidebarExpanded = false;

/**
 * Toggles the sidebar between expanded and collapsed states
 * - Adjusts sidebar width between 50px (closed) and 272px (open)
 * - Rotates toggle button 90 degrees
 * - Fades navigation links in/out
 */
function toggleNav() {
  const sidebar = document.querySelector(".nav-sidebar");
  const toggleBtn = document.querySelector(".btn-toggle-nav");
  const sidebarList = document.querySelector(".nav-sidebar ul");

  if (!sidebarExpanded) {
    // Expand sidebar
    sidebar.style.width = "272px";
    toggleBtn.style.transform = "rotate(90deg)";

    // Show navigation links with fade-in effect
    sidebarList.style.visibility = "visible";
    sidebarList.style.opacity = "1";

    sidebarExpanded = true;
  } else {
    // Collapse sidebar
    sidebar.style.width = "50px";
    toggleBtn.style.transform = "rotate(0deg)";

    // Hide navigation links with fade-out effect
    sidebarList.style.visibility = "hidden";
    sidebarList.style.opacity = "0";

    sidebarExpanded = false;
  }
}

// ==========================================
// PAGE INITIALIZATION
// ==========================================
/**
 * Initialize page when DOM is loaded
 */
document.addEventListener("DOMContentLoaded", function () {
  // Hide error modal by default on login page
  const modal = document.querySelector(".modal");
  if (modal) {
    modal.style.display = "none";
  }

  // Initialize sidebar as collapsed on home page
  const sidebar = document.querySelector(".nav-sidebar");
  if (sidebar) {
    sidebar.style.width = "50px";

    // Set initial state for nav list
    const sidebarList = document.querySelector(".nav-sidebar ul");
    if (sidebarList) {
      sidebarList.style.visibility = "hidden";
      sidebarList.style.opacity = "0";
    }
  }

  // Attach form validation to form submission
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      validateLogin();
    });
  }
});
