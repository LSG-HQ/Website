import { CityScape3DRendering } from "./script.js";
import { Chatbot } from "./js/chatbot.js";

(async function () {
  const href = window.location.href;
  if (href.includes("main")) {
    const cityScape3DRendering = new CityScape3DRendering();
    await cityScape3DRendering.render();
  } else if (href.includes("new")) {
    const chatbot = new Chatbot();
    chatbot.init();
  }
})();

// import hamburger from "./js/hamburger.js";
import aos from "./js/aos.js";

// hamburger.init();

const wordContainer = document.getElementById("wordContainer");
const caret = document.getElementById("caret");
const header = document.querySelector(".we_exist");
const wordsSets = [
  "Raise the potential of the human race",
  "Inspire life without limits",
  "Build the future",
  "Disrespect the impossible",
  // "Playing infinite games",
  // "Technology",
  // "Delivering on hope",
  // "Ourselves",
];

const headerText = ["We exist to", "We believe in"];
let caretVisible = true;
let currentCharIndex = 0;
let currentHeaderChar = 0;

let interval;

async function displayLine(lineIndex) {
  const sentence = wordsSets[lineIndex];
  const currentHeaderWord = headerText[lineIndex < 4 ? 0 : 1];

  const wordWithCaret =
    sentence.substring(0, currentCharIndex + 1) +
    (caretVisible ? "<span>|</span>" : "");
  if (wordContainer) wordContainer.innerHTML = `<div>${wordWithCaret}</div>`;

  const currentHeaderText = currentHeaderWord.substring(
    0,
    currentHeaderChar + 1
  );
  // header.textContent = currentHeaderText;

  currentCharIndex = Math.min(currentCharIndex + 1, sentence.length);
  currentHeaderChar = Math.min(currentHeaderChar + 1, currentHeaderWord.length);

  /**
   * if the header text and the current word text is done,
   * clear the interval, reset the indices then wait for two seconds
   * before you move on to the next line
   */
  if (
    currentCharIndex == sentence.length &&
    currentHeaderChar == currentHeaderWord.length
  ) {
    clearInterval(interval);
    currentCharIndex = 0;
    currentHeaderChar = 0;

    await sleep(2000);
    interval = setInterval(() => {
      let nextLineIndex = lineIndex + 1;
      if (nextLineIndex == wordsSets.length) {
        nextLineIndex = 0;
      }
      displayLine(nextLineIndex);
    }, 150);
  }
}

function initalizeTypewriterEffect() {
  interval = setInterval(() => {
    displayLine(0);
  }, 150);
}

initalizeTypewriterEffect();

function sleep(ms) {
  console.log("Sleeping for " + ms);
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// UTILS.JS

const $ = (id) => {
  return document.getElementById(id);
};

const _ = (selector) => {
  return document.querySelector(selector);
};

const __ = (selector) => {
  return document.querySelectorAll(selector);
};

// ANIMATE ON SCROLL
aos.init();

// hamburger
const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileMenu = $("mobile-menu");
const closeBtn = $("close-btn");

const openMobileNav = () => {
  mobileMenu.classList.add("translate-x-0");
  mobileMenu.classList.remove("translate-x-full");
};

const closeMobileNav = () => {
  mobileMenu.classList.add("translate-x-full");
  mobileMenu.classList.remove("translate-x-0");
};

const isOpen = () => {
  return mobileMenu.classList.contains("translate-x-0");
};

if (!hamburgerBtn) return;
hamburgerBtn.addEventListener("click", () => {
  if (isOpen()) {
    closeMobileNav();
  } else {
    openMobileNav();
  }
});

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    closeMobileNav();
  });
}
