import fastFoodImg from "../assets/images/hero-photo.png";

function loadHome() {
  const content = document.getElementById("content");

  const headline = document.createElement("h1");
  headline.textContent = "Welcome To Your Restaurant!";
  content.appendChild(headline);

  const homeContainer = document.createElement("div");
  homeContainer.id = "home-container";
  content.appendChild(homeContainer);

  const heroImage = new Image();
  heroImage.src = fastFoodImg;
  homeContainer.appendChild(heroImage);

  const heroDescription = document.createElement("div");
  heroDescription.classList.add("desc");
  heroDescription.innerHTML = `<p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. PageMaker including versions of Lorem Ipsum."
    <br>
    <br>
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
    </p>`;

  homeContainer.appendChild(heroDescription);
}

export default loadHome;
