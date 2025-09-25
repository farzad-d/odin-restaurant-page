import "normalize.css";
import "./styles.css";
import loadHome from "./components/home.js";
import loadAbout from "./components/about.js";
import loadMenu from "./components/menu.js";

const content = document.getElementById("content");
const btns = document.querySelectorAll(".btn");

const nav = document.querySelector("nav");
nav.addEventListener("click", (e) => {
  if (e.target === nav) return;

  content.replaceChildren();
  btns.forEach((b) => b.classList.remove("active-btn"));
  e.target.classList.add("active-btn");

  switch (true) {
    case e.target.classList.contains("home-btn"):
      loadHome();
      break;
    case e.target.classList.contains("about-btn"):
      loadAbout();
      break;
    case e.target.classList.contains("menu-btn"):
      loadMenu();
  }
});
