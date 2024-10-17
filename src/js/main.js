(() => {
  window.addEventListener("load", function () {
    feather.replace();
    const menuButton = document.querySelector("#menuButton");
    const mobileMenu = document.querySelector(".header-mobile-menu");
    let isMobileMenuOpened = false;

    function toggleMobileMenu(state) {
      isMobileMenuOpened = state !== undefined ? state : !isMobileMenuOpened;
      menuButton.classList.toggle("_active", isMobileMenuOpened);
      mobileMenu.classList.toggle("_active", isMobileMenuOpened);
    }

    if (menuButton && mobileMenu) {
      menuButton.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleMobileMenu();
      });
    }
    document.body.addEventListener("click", (e) => {
      if (!mobileMenu.contains(e.target) && e.target !== menuButton) {
        toggleMobileMenu(false);
      }
    });
  });
})();
