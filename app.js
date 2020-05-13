const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const card = document.querySelector('#card1');

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

function clickRotate() {
  card.classList.toggle('rotated');
}

card.addEventListener('click', clickRotate);

new Scene({
  ".square": i => ({
    0: {
      transform: "translate(-50%, -50%) rotate(0deg) scale(0)",
      "border-width": "15px",
      opacity: 0,
    },
    0.1: {
      opacity: 1,
      transform: "rotate(0deg) scale(0.4)",
      "border-width": "15px",
    },
    0.3: {
      transform: "rotate(45deg) scale(1)",
    },
    0.7: {
      opacity: 1,
    },
    0.8: {
      "border-width": "0px",
    },
    1: {
      opacity: 0,
    },
    options: {
      delay: 0.35 * i,
    },
  })
}, {
  iterationCount: "infinite",
  selector: true,
  easing: Scene.EASE_OUT,
}).playstyle();
