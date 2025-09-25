import loadHome from "./home.js";
import loadAbout from "./about.js";
import loadMenu from "./menu.js";

const content = document.getElementById("content");

const homeTab = document.getElementById("home-btn");
homeTab.addEventListener("click", () => {
  content.replaceChildren();
  loadHome();
});

const menuTab = document.getElementById("menu-btn");
menuTab.addEventListener("click", () => {
  content.replaceChildren();
  loadMenu();
});

const aboutTab = document.getElementById("about-btn");
aboutTab.addEventListener("click", () => {
  content.replaceChildren();
  loadAbout();
});
