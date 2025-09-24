// import fastFoodImg from "./fast-food.png";

const foods = [
  {
    name: "Pizza",
    price: "15",
    ingredients: "Pepperoni, Mozzarella, Tomato Sauce",
  },
  {
    name: "Burger",
    price: "8",
    ingredients: "Ground Beef, Lettuce, Tomato, Onion, Pickles, Bun",
  },
  {
    name: "Taco",
    price: "3",
    ingredients: "Ground Beef, Lettuce, Cheese, Salsa, Tortilla",
  },
  {
    name: "Pasta",
    price: "12",
    ingredients: "Noodles, Marinara Sauce, Meatballs",
  },
  {
    name: "Salad",
    price: "7",
    ingredients: "Lettuce, Cucumber, Tomato, Onion, Vinaigrette Dressing",
  },
  {
    name: "Sandwich",
    price: "6",
    ingredients: "Turkey, Swiss Cheese, Lettuce, Mayo, Wheat Bread",
  },
];

class Food {
  id = crypto.randomUUID();

  constructor({ name, price, ingredients }) {
    this.name = name;
    this.price = price;
    this.ingredients = ingredients;
  }

  addToContainer(container) {
    const card = document.createElement("div");
    card.classList.add("card");
    container.appendChild(card);

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
