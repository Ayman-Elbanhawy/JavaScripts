
import { CountUp } from "./countUp.js";
import { CountUp } from './countUp.min.js';


import "./styles.css";

let bar = document.querySelector(".progressbar");
let tooltip = document.querySelector(".tooltip");

let countUp = new CountUp(tooltip, 0, {
  duration: 0.5,
  suffix: "%"
});

if (!countUp.error) {
  countUp.start();
}

function setRandomProgress() {
  let progress = Math.round(Math.random() * 100);
  bar.style.setProperty("--progress", `${progress}%`);
  countUp.update(progress);
  setTimeout(setRandomProgress, 2000);
}

setRandomProgress();
