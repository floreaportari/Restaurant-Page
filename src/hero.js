export function attachHero() {
  const content = document.querySelector("#content");
  const heroImg = document.createElement("img");
  heroImg.src = "../src/assets/hero.jpg";
  content.appendChild(heroImg);

  const header = document.createElement("h1");
  header.textContent = "Welcome to our restaurant";
  header.classList.add("heading-text");
  content.appendChild(header);

  const p = document.createElement("p");
  p.textContent = "The one that will catch your taste";
  p.classList.add("heading-p");
  content.appendChild(p);
}

export function navMenu() {
  const navContainer = document.createElement("div");
  navContainer.classList.add("nav-container");
  const ul = document.createElement("ul");

  const navLinks = ["Home", "About", "Menu", "Contact"];
  for (let i = 0; i < navLinks.length; i++) {
    const newLi = document.createElement("li");
    newLi.innerHTML = navLinks[i];
    newLi.setAttribute("id", `${navLinks[i]}`);
    ul.appendChild(newLi);
  }
  navContainer.appendChild(ul);
  content.appendChild(navContainer);
}
