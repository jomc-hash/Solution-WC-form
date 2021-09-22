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
consoleText(["Bienvenido a Solution Web Company", "Tecnología avanzada para el desarrollo de su empresa."], "text", ["white", "white", "white"]);
function consoleText(words, id, colors) {
    if (colors === undefined) colors = ["#fff"];
    var visible = true;
    var con = document.getElementById("console");
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id);
    target.setAttribute("style", "color:" + colors[0]);
    window.setInterval(function () {
        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount);
            window.setTimeout(function () {
                var usedColor = colors.shift();
                colors.push(usedColor);
                var usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute("style", "color:" + colors[0]);
                letterCount += x;
                waiting = false;
            }, 1000);
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function () {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 1000);
        } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount);
            letterCount += x;
        }
    }, 120);
    window.setInterval(function () {
        if (visible === true) {
            con.className = "console-underscore hidden";
            visible = false;
        } else {
            con.className = "console-underscore";
            visible = true;
        }
    }, 400);
}

//función para dar formato a los números telefónicos (###) ###-#####
document.getElementById('telefono').addEventListener('blur', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{3})(\d{3})(\d{4})/);
    if (x != null) {
        e.target.value = '(' + x[1] + ') ' + x[2] + '-' + x[3] ;
    }
});

//Limpiar formulario
const forms = document.querySelectorAll('form');
const form = forms[0];
form.addEventListener("submit", function (event) {
    event.preventDefault();
    Array.from(form.elements).forEach(

        (input, index) => {
            (input.type != "textarea" && input.type != "submit") ? input.value = "" : false;
            document.querySelector("#mensaje").value = "¡Quiero una página asombrosa!";
        });

    M.toast({ html: 'Gracias por su mensaje. En breve lo contactaremos', displayLength: 1200, outDuration: 380 });
});

