import "../src/styles.css";
import { attachHero, navMenu } from "./hero.js";
import { aboutRest } from "./about.js";
import { showMenu } from "./menu.js";
import { contactForm } from "./contact.js";

navMenu();
attachHero();

const content = document.querySelector("#content");
const container = document.createElement("div");

const allBtns = document.querySelectorAll(".btn");
allBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.id === "Home") {
      container.innerHTML = "";
    } else if (e.target.id === "About") {
      container.innerHTML = "";
      container.appendChild(aboutRest());
    } else if (e.target.id === "Menu") {
      container.innerHTML = "";
      container.appendChild(showMenu());
    } else if (e.target.id === "Contact") {
      container.innerHTML = "";
      container.appendChild(contactForm());
    }
  });
});

content.appendChild(container);
