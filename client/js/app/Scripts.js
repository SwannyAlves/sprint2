function handleClick() {
  var imageName = document.getElementById("menu-icon").src.split("assets")[1];
  if (imageName === "/menu.svg") {
    document.getElementById("header__search").style.display = "none";
    document.getElementById("menu-icon").src = "assets/close.svg";
    document.getElementById("myside-menu").style.width = "40%";
    document.getElementById("search-input").style.display = "none";
    // document.getElementById("mobile-head").style.height = "5vh";
  } else {
    document.getElementById("menu-icon").src = "assets/menu.svg";
    document.getElementById("myside-menu").style.width = "0";
    document.getElementById("header__search").style.display = "flex";
    setTimeout(() => {
      //espera 500 milisegundos antes de voltar com o input
      // document.getElementById("mobile-head").style.height = "auto";
      document.getElementById("search-input").style.display = "flex";
    }, 250); //500 milisegundos
  }
}
