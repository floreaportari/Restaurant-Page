function CreateItems(id, dishName, dishDesc, dishPrice) {
  this.id = id;
  this.dishName = dishName;
  this.dishDesc = dishDesc;
  this.dishPrice = dishPrice;
}

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
  console.log(item);
}
