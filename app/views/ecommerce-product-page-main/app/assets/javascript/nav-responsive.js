function burgerMenu() {
    var x = document.querySelector('.menu');
    if (x.className === "menu") {
      x.className += " responsive";
    } else {
      x.className = "menu";
    }
  }