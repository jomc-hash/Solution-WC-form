const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

//función para dar formato a los números telefónicos (###) ###-#####
document.getElementById('telefono').addEventListener('blur', function (e) {
  console.log('a')
  var x = e.target.value.replace(/\D/g, '').match(/(\d{3})(\d{3})(\d{4})/);
  if (x != null) {
    e.target.value = '(' + x[1] + ') ' + x[2] + '-' + x[3];
  }
});
