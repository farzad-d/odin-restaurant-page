import fastFoodImg from "./fast-food.png";
const heroText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. PageMaker including versions of Lorem Ipsum.";

function home() {
  const content = document.getElementById("content");

  const headline = document.createElement("h1");
  headline.textContent = "Welcome To Your Restaurant!";
  content.appendChild(headline);

  const heroImage = new Image();
  heroImage.src = fastFoodImg;
  content.appendChild(heroImage);

  const heroDescription = document.createElement("p");
  heroDescription.textContent = heroText;
  content.appendChild(heroDescription);
}

export default home;
