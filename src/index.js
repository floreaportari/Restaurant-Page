import "./styles.css";
import { attachHero, navMenu } from "./hero.js";
import { aboutRest } from "./about.js";
import { showMenu } from "./menu.js";

navMenu();
attachHero();

const allBtns = document.querySelectorAll(".btn");
allBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.id === "Home") {
      window.location.reload();
    } else if (e.target.id === "About") {
      aboutRest();
    } else if (e.target.id === "Menu") {
      showMenu();
    }
  });
});
