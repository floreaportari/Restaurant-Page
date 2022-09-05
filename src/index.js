import "./styles.css";
import { attachHero, navMenu } from "./hero.js";
import { aboutRest } from "./about.js";
import { showMenu } from "./menu.js";

navMenu();
attachHero();

const homeBtn = document.querySelector("#Home");
homeBtn.addEventListener("click", () => {
  window.location.reload();
});

const aboutBtn = document.querySelector("#About");
aboutBtn.addEventListener("click", () => {
  aboutRest();
});

const menuBtn = document.querySelector("#Menu");
menuBtn.addEventListener("click", () => {
  showMenu();
});
