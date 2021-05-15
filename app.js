//menu
const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

// text
if(document.querySelector(".animate")){
  var typed = new Typed(".animate", {
    strings: ["student", "designer", "gamer", "freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
}


//aos
AOS.init();