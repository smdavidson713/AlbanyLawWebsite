window.onload = function () {
  var popup = document.getElementById("popup");
  popup.classList.remove("hidden");
  setTimeout(()=>popup.classList.add("fade-in"));
  document.getElementById("accept").onclick = function () {
     popup.classList.remove("fade-in");
     setTimeout(()=>popup.classList.add("hidden"), 300);
  };
};

/**SLIDESHOW 3**/
var sl = document.getElementsByClassName("mo");
var cs = 0;

function displayS(i) {
    document.querySelector(".a").classList.remove("a");
    cs = cs + i;
    if (cs >= sl.length) {
        cs = 0;
    }
    if (cs < 0) {
        cs = sl.length - 1;
    }
    sl[cs].classList.add("a");
}
document.getElementById("prev2").onclick = function () {
    displayS(-1);
}
document.getElementById("next2").onclick = function () {
    displayS(1);
}

/**SLIDESHOW 1**/
var slides = document.getElementsByClassName("module-section");
var currentSlide = 0;

function displaySlide(i) {
    document.querySelector(".active").classList.remove("active");
    currentSlide = currentSlide + i;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    slides[currentSlide].classList.add("active");
}
document.getElementById("prev").onclick = function () {
    displaySlide(-1);
}
document.getElementById("next").onclick = function () {
    displaySlide(1);
}

/**SLIDESHOW 2**/
var s = document.getElementsByClassName("m");
var c = 0;

function display(i) {
    document.querySelector(".activee").classList.remove("activee");
    c = c + i;
    if (c >= s.length) {
        c = 0;
    }
    if (c < 0) {
        c = s.length - 1;
    }
    s[c].classList.add("activee");
}
document.getElementById("prev1").onclick = function () {
    display(-1);
}
document.getElementById("next1").onclick = function () {
    display(1);
}