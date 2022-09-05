export function contactForm() {
  const contactContainer = document.createElement("div");
  contactContainer.setAttribute("id", "contact-container");
  const form = document.createElement("form");

  let attr = ["First Name", "Last Name", "Email"];
  let labelFor = ["fName", "lName", "email"];

  for (let i = 0; i > 3; i++) {
    const formRow = document.createElement("div");
    const label = document.createElement("label");
    const input = document.createElement("input");
    label.setAttribute("for", `${labelFor[i]}`);
    input.setAttribute("type", "text");

    label.innerHTML = `${attr[i]}`;

    formRow.appendChild(label);
    formRow.appendChild(input);
    form.appendChild(formRow);
  }
  contactContainer.appendChild(form);
  const content = document.querySelector("#content");
  return content.appendChild(contactContainer);
}
