// MENU: header-menu toggle
window.headerMenuHandler = (event) => {
  const header = document.querySelector("#partials-header-menu");
  const headerMenu = document.querySelector(
    "#partials-header-menu [data-id='partials-header-menu-list']"
  );
  if (header && headerMenu) {
    if (event.target == header) {
      headerMenu.classList.toggle("display-none");
    } else {
      if (event.target.contains(headerMenu) && event.target !== headerMenu) {
        //clicked outside the headerMenu
        if (!headerMenu.classList.contains("display-none")) {
          headerMenu.classList.add("display-none");
        }
      }
    }
  }
};
if (window.headerMenuHandler) {
  document.removeEventListener("click", window.headerMenuHandler, false);
  document.addEventListener("click", window.headerMenuHandler, false);
}

// BUTTON LOGOUT: #button-logout
const buttonLogout = document.querySelector("#button-logout");
if (buttonLogout) {
  buttonLogout.addEventListener("click", () => {
    let currentUrl = window.location.href;
    window.location.href = "/auth/logout?callbackUrl=" + currentUrl;
  });
}

// BUTTON LOGIN: #button-login
const buttonLogin = document.querySelector("#button-login");
if (buttonLogin) {
  buttonLogin.addEventListener("click", () => {
    window.location.href = "/auth/google";
  });
}
