import "./style.css";
import { showHome } from "./home.js";
import { showMenu } from "./menu.js";
import { showAbout } from "./about.js";

showHome();

const homeBtn = document.querySelector(".home");
homeBtn.addEventListener("click", () => showHome())

const menuBtn = document.querySelector(".menu");
menuBtn.addEventListener("click", () => showMenu())

const aboutBtn = document.querySelector(".about");
aboutBtn.addEventListener("click", () => showAbout())
