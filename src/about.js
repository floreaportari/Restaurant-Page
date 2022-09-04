export function aboutRest() {
  const aboutContainer = document.createElement("div");
  aboutContainer.setAttribute("id", "about");
  const aboutHeading = document.createElement("h2");
  const aboutDesc = document.createElement("p");

  aboutHeading.textContent = "About our restaurant";
  aboutDesc.textContent =
    "Our restaurant was founded in 1997. It was rated as one of the best in town. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nisl quam, volutpat non pretium nec, elementum nec augue. Nam sed sem pharetra, dictum neque in, mollis sapien. Integer felis libero, dictum et nulla nec, sodales lobortis sapien. Duis viverra, dolor at lacinia placerat, nisl quam consectetur lectus, quis tristique augue.";

  aboutContainer.appendChild(aboutHeading);
  aboutContainer.appendChild(aboutDesc);

  const content = document.querySelector("#content");
  content.appendChild(aboutContainer);
}
