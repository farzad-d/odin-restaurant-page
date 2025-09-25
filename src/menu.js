import burger from "./burger.jpg";
import sandwich from "./sandwich.jpg";
import pasta from "./pasta.jpg";
import pizza from "./pizza.jpg";
import taco from "./taco.jpg";
import salad from "./salad.jpg";

const foods = [
  {
    name: "Pizza",
    price: "15",
    ingredients: "Pepperoni, Mozzarella, Tomato Sauce",
    photoPath: pizza,
  },
  {
    name: "Burger",
    price: "8",
    ingredients: "Ground Beef, Lettuce, Tomato, Onion, Pickles, Bun",
    photoPath: burger,
  },
  {
    name: "Taco",
    price: "3",
    ingredients: "Ground Beef, Lettuce, Cheese, Salsa, Tortilla",
    photoPath: taco,
  },
  {
    name: "Pasta",
    price: "12",
    ingredients: "Noodles, Marinara Sauce, Meatballs",
    photoPath: pasta,
  },
  {
    name: "Salad",
    price: "7",
    ingredients: "Lettuce, Cucumber, Tomato, Onion, Vinaigrette Dressing",
    photoPath: salad,
  },
  {
    name: "Sandwich",
    price: "6",
    ingredients: "Turkey, Swiss Cheese, Lettuce, Mayo, Wheat Bread",
    photoPath: sandwich,
  },
];

class Food {
  id = crypto.randomUUID();

  constructor({ name, price, ingredients, photoPath }) {
    this.name = name;
    this.price = price;
    this.ingredients = ingredients;
    this.photoPath = photoPath;
  }

  addToContainer(container) {
    const card = document.createElement("div");
    card.classList.add("card");
    container.appendChild(card);

    const foodPhoto = document.createElement("img");
    foodPhoto.classList.add("food-photo");
    foodPhoto.src = this.photoPath;
    card.appendChild(foodPhoto);

    const foodName = document.createElement("p");
    foodName.classList.add("food-name");
    foodName.textContent = this.name;
    card.appendChild(foodName);

    const foodPrice = document.createElement("p");
    foodPrice.classList.add("food-price");
    foodPrice.textContent = `${this.price} $`;
    card.appendChild(foodPrice);

    const foodIngredients = document.createElement("p");
    foodIngredients.classList.add("food-ingredients");
    foodIngredients.textContent = this.ingredients;
    card.appendChild(foodIngredients);
  }
}

function loadMenu() {
  const content = document.getElementById("content");

  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "Food Menu";
  content.appendChild(menuTitle);

  const cards = document.createElement("div");
  cards.id = "cards";
  content.appendChild(cards);

  foods.forEach((food) => {
    let newCard = new Food(food);
    newCard.addToContainer(cards);
  });
}

export default loadMenu;
