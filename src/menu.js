export function showMenu() {
  function CreateItems(id, dishName, dishDesc, dishPrice) {
    this.id = id;
    this.dishName = dishName;
    this.dishDesc = dishDesc;
    this.dishPrice = dishPrice;
  }

  const content = document.querySelector("#content");
  const menuContainer = document.createElement("div");
  menuContainer.setAttribute("id", "menu-container");
  const h2 = document.createElement("h2");
  h2.textContent = "MENU";

  const foodArr = [];

  for (let i = 0; i < 6; i++) {
    const dishNamesList = [
      "Kimchi",
      "Soft Tofu Stew",
      "Samgyeopsal",
      "Chimaek",
      "Soy sauce crab",
      "Tteokbokki",
    ].map((title) => title);

    const dishDescList = [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    ].map((desc) => desc);

    const dishPriceList = [23.99, 12.99, 16.99, 21.99, 9.99, 17.99].map(
      (tag) => tag
    );

    const item = new CreateItems(
      i + 1,
      dishNamesList[i],
      dishDescList[i],
      dishPriceList[i]
    );
    foodArr.push(item);
  }

  foodArr.forEach((obj) => {
    const itemRow = document.createElement("div");
    itemRow.setAttribute("class", "item-row");
    const dishTitle = document.createElement("h4");
    const dishInfo = document.createElement("p");
    const priceTag = document.createElement("span");
    const foodImage = document.createElement("img");

    dishTitle.textContent = obj.dishName;
    dishInfo.textContent = obj.dishDesc;
    priceTag.textContent = `${obj.dishPrice}$`;
    foodImage.src = "../src/assets/hot-pot.png";

    itemRow.appendChild(dishTitle);
    itemRow.appendChild(dishInfo);
    itemRow.appendChild(priceTag);
    itemRow.appendChild(foodImage);

    menuContainer.appendChild(itemRow);
    menuContainer.appendChild(h2);
  });

  return content.appendChild(menuContainer);
}
