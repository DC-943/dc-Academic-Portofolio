document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(
    ".navbar-container .mobile-menu-toggle"
  )
  const mobileMenu = document.querySelector(".mobile-menu-items")

  toggleButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active")
  })
})
