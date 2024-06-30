import cleoImage from "./pngs/cleo.png";
import chatIcon from "./pngs/chat.png";
import gamePadIcon from "./pngs/gamePad.png";
import arrowHeadIcon from "./svgs/arrowHead.svg";
import backIcon from "./svgs/back.svg";
import expandIcon from "./svgs/expand.svg";
import ellipsisIcon from "./svgs/ellipsis.svg";

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

console.log("ayayaya");

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
  wordContainer.innerHTML = `<div>${wordWithCaret}</div>`;

  const currentHeaderText = currentHeaderWord.substring(0, currentHeaderChar + 1);
  header.textContent = currentHeaderText;

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

// CHATBOT.JS

const chatbotContainer = $("lsg-chatbot-cta-container");
const email = "";

console.log("adekunle gold");

const chats = [
  {
    message: "Hello, I'm Cleo, your AI assistant. How can I help you today?",
    sender: "bot",
  },
  { message: "I'm looking for a job", sender: "user" },
  {
    message: "Great! What kind of job are you looking for?",
    sender: "bot",
  },
  { message: "I'm looking for a remote job", sender: "user" },
  {
    message:
      "I have a few recommendations for you. Would you like to see them?",
    sender: "bot",
  },
  { message: "Yes, please", sender: "user" },
  {
    message: "Here are a few recommendations for remote jobs",
    sender: "bot",
  },
];

const widgetHead = `
  <div class="widget-head">
    <button class="back-btn">
      <img src=${backIcon} />
    </button>

    <button class="expand-btn">
      <img src=${expandIcon} />
    </button>
  </div>
`;

const activities = [
  { label: "Recommendations for healthy snacks ..." },
  { label: "When does the next LSG internship s.." },
];

const renderActivity = (activity) => {
  const activityLabel = activity?.label;
  return `
    <div class="activity">
      <div>
        <img src=${chatIcon} alt=${activityLabel} class="chat" />
        <p>${activityLabel ?? ""}</p>
      </div>

      <img src=${ellipsisIcon} class="ellipsis" />
    </div>
  `;
};

const renderActivities = (activities = []) => {
  return `
  <div class="activities">
    ${activities.map((activity) => renderActivity(activity)).join("")}
  </div>
`;
};

const renderChat = (chat) => {
  return `
    <div class="message ${chat.sender}">
      <p>${chat.message}</p>
    </div>
  `;
};

const renderChats = (chats = []) => {
  console.log({ thecahts: chats });
  return `
    <div class="chats">
      ${chats.map((chat) => renderChat(chat)).join("")}
    </div>
  `;
};

const renderChatBox = () => {
  return `
    ${widgetHead}
    <div class="chat-box">
      ${renderChats(chats)}
      <input id="chat-box-input" placeholder="Type a message to Cleo..." />
    </div>
  `;
};

// ${cleoImage};
// add the cleo image that pops up when the chatbot button is hovered.
chatbotContainer.innerHTML += `
  <button id="lsg-chatbot-cta"></button>
  <img src=${cleoImage} alt="CLEO" class="cleo-image-popup can-show">
  <div class="cleo">
    <div id="cleo-stage-0">
      <img src=${cleoImage} alt="CLEO" class="cleo-image">
      <h3>Meet Cleo! <br />Your AI Assistant</h3>

      <p>Ask me anything about LSG, this website or life and I’ll do my best to show you a few new ideas.</p>

      <div class="flex w-full">
        <button type="button" id="get-started-btn">Get started
          <img src=${arrowHeadIcon} />
        </button>
      </div>
    </div>

    <div id="cleo-stage-1">
      ${widgetHead}

      <img src=${cleoImage} alt="CLEO" class="cleo-image">

      <form id="onboarding-form" >
        <label>
          Name
          <input type="text" placeholder="Enter name" id="cleo-username-input" />
        </label>

        <label>
          Email
          <input type="email" placeholder="Enter email" id="cleo-email" />
        </label>

        <div class="form-btns">
          <button type="submit">Send
            <img src=${arrowHeadIcon} />
          </button>
        </div>
      </form>
    </div>

    <div id="cleo-stage-2">
      ${widgetHead}
      <h3><span>Hey</span><b id="username"></b></h3>

      <p class="how-can-help">How can I help?</p>

      <div class="menu">
        <div class="menu-left">
          <img src=${chatIcon}></img>
          <p>Chat with Cleo</p>
        </div>

        <div class="menu-right">
          <div class="menu-right-up">
            <img src=${gamePadIcon}></img>
          </div>
          <div class="menu-right-bottom"></div>
        </div>
      </div>

      <div class="recent-activities">
        <div class="flex justify-between items-center">
          <p>Recent Activities</p>
          <a class="underline">View All</a>
        </div>

        ${renderActivities(activities)}
      </div>
    </div>

    <div id="cleo-stage-3">
      ${renderChatBox()}
    </div>

    <div class="outer-circle">
      <div class="inner-circle"></div>
    </div>

    <div id="bottom-shade">
    </div>
  </div>
`;

const chatbotCta = $("lsg-chatbot-cta");
const cleoBoxContainer = _(".cleo");
const cleoImagePopup = _(".cleo-image-popup");
const getStartedBtn = $("get-started-btn");
const backBtns = __(".back-btn");
const menuLeftChatWithCleo = _(".menu-left");

console.log({ backBtns });

const isStageShown = (stage) => {
  if ($(`cleo-stage-${stage}`)) {
    return $(`cleo-stage-${stage}`).classList.contains("show");
  } else return null;
};

const getStageShown = () => {
  // stage 1 is meet cleo,
  // stage 2 is "hey user"

  for (let i = 0; i < 4; i++) {
    if (isStageShown(i)) {
      return i;
    }
  }

  return -1;
};

const hideStage = (stage) => {
  const stageNode = $(`cleo-stage-${stage}`);
  if (isStageShown(stage) && stageNode) {
    stageNode.classList.remove("show");
  }
};

const showStage = (stage) => {
  const stageNode = $(`cleo-stage-${stage}`);
  if (!isStageShown(stage) && stageNode) {
    stageNode.classList.add("show");
  }
};

const hideInitialCTA = () => {
  const cta = $("lsg-chatbot-cta");
  const outerCircle = _(".outer-circle");
  const bottomShade = $("bottom-shade");

  cta.classList.add("hide");
  outerCircle.classList.add("hide");
  cleoImagePopup.classList.add("hide");
  bottomShade.classList.add("show");
};

const handleStageSwitch = () => {
  console.log("whooo");
  const currentStage = getStageShown();
  console.log({ currentStage });
  // if (currentStage === -1) return;
  // close chatbot cta if stage is 0
  if (currentStage === 0) {
    hideInitialCTA();
  }

  hideStage(currentStage);
  showStage(currentStage + 1);
};

const handleBackBtn = () => {
  const currentStage = getStageShown();
  if (currentStage === -1) return;

  hideStage(currentStage);
  showStage(currentStage - 1);
};

if (backBtns?.length) {
  backBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log("back btn clicked");
      handleBackBtn();
    });
  });
}

const openChatDialog = () => {
  cleoImagePopup.classList.remove("can-show");
  cleoBoxContainer.classList.add("show");
};

menuLeftChatWithCleo.addEventListener("click", () => {
  handleStageSwitch();
});

chatbotCta.addEventListener("click", () => {
  openChatDialog();
  handleStageSwitch();
});

getStartedBtn.addEventListener("click", () => {
  openChatDialog();
  handleStageSwitch();
});

$("onboarding-form").addEventListener("submit", (event) => {
  onboardUser(event);
});

const onboardUser = (event) => {
  console.log("adeeee");
  event.preventDefault();
  const nameInputValue = $("cleo-username-input").value;
  const userNameNode = $("username");

  console.log({ nameInputValue });
  if (nameInputValue) {
    userNameNode.innerHTML = `, ${nameInputValue}`;
  }

  handleStageSwitch();
};
