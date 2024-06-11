const wordContainer = document.getElementById("wordContainer");
const caret = document.getElementById("caret");
const header = document.querySelector(".we_exist");
const wordsSets = [
  "Raise the potential of the human race",
  "Inspire life without limits",
  "Build the future",
  "Disrespect the impossible",
  "Playing infinite games",
  "Technology",
  "Delivering on hope",
  "Ourselves",
];

const headerText = ["We exist to", "We Believe In"];
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
  wordContainer.innerHTML = `<div>${wordWithCaret}</div>`;

  const currentHeaderText = currentHeaderWord.substring(0, currentHeaderChar);
  header.textContent = currentHeaderText;

  currentCharIndex = Math.min(currentCharIndex + 1, sentence.length);
  currentHeaderChar = Math.min(currentHeaderChar + 1, currentHeaderWord.length);

  console.log(currentCharIndex, sentence.length);
  console.log(currentHeaderChar, currentHeaderWord.length);

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
