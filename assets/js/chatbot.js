import cleoImage from "./../pngs/cleo.png";
import chatIcon from "./../pngs/chat.png";
import gamePadIcon from "./../pngs/gamePad.png";
import arrowHeadIcon from "./../svgs/arrowHead.svg";
import backIcon from "./../svgs/back.svg";
import expandIcon from "./../svgs/expand.svg";
import ellipsisIcon from "./../svgs/ellipsis.svg";

import { $, _, __ } from "./utils";

export class Chatbot {
  chatbotContainer = $("lsg-chatbot-cta-container");
  email = "";
  chats = [
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
  widgetHead = `
    <div class="widget-head">
      <button class="back-btn">
        <img src=${backIcon} />
      </button>
  
      <button class="expand-btn">
        <img src=${expandIcon} />
      </button>
    </div>
  `;
  activities = [
    { label: "Recommendations for healthy snacks ..." },
    { label: "When does the next LSG internship s.." },
  ];
  chatbotCta = null;
  cleoBoxContainer = null;
  cleoImagePopup = null;
  getStartedBtn = null;
  backBtns = null;
  menuLeftChatWithCleo = null;

  renderActivity = (activity) => {
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
  renderActivities = (activities = []) => {
    return `
    <div class="activities">
      ${activities.map((activity) => this.renderActivity(activity)).join("")}
    </div>
  `;
  };
  renderChat = (chat) => {
    return `
      <div class="message ${chat.sender}">
        <p>${chat.message}</p>
      </div>
    `;
  };

  renderChats = (chats = []) => {
    console.log({ thecahts: chats });
    return `
      <div class="chats">
        ${chats.map((chat) => this.renderChat(chat)).join("")}
      </div>
    `;
  };

  renderChatBox = () => {
    return `
      ${this.widgetHead}
      <div class="chat-box">
        ${this.renderChats(this.chats)}
        <input id="chat-box-input" placeholder="Type a message to Cleo..." />
      </div>
    `;
  };

  init() {
    // add the cleo image that pops up when the chatbot button is hovered.
    this.chatbotContainer.innerHTML += `
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
    ${this.widgetHead}

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
    ${this.widgetHead}
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

      ${this.renderActivities(this.activities)}
    </div>
  </div>

  <div id="cleo-stage-3">
    ${this.renderChatBox()}
  </div>

  <div class="outer-circle">
    <div class="inner-circle"></div>
  </div>

  <div id="bottom-shade">
  </div>
</div>
    `;

    this.chatbotCta = $("lsg-chatbot-cta");
    this.cleoBoxContainer = _(".cleo");
    this.cleoImagePopup = _(".cleo-image-popup");
    this.getStartedBtn = $("get-started-btn");
    this.backBtns = __(".back-btn");
    this.menuLeftChatWithCleo = _(".menu-left");

    

    if (this.backBtns?.length) {
      this.backBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          console.log("back btn clicked");
          this.handleBackBtn();
        });
      });
    }

    this.menuLeftChatWithCleo.addEventListener("click", () => {
      this.handleStageSwitch();
    });

    this.chatbotCta.addEventListener("click", () => {
      this.openChatDialog();
      this.handleStageSwitch();
    });

    this.getStartedBtn.addEventListener("click", () => {
      this.openChatDialog();
      this.handleStageSwitch();
    });

    $("onboarding-form").addEventListener("submit", (event) => {
      this.onboardUser(event);
    });
  }

  isStageShown = (stage) => {
    if ($(`cleo-stage-${stage}`)) {
      return $(`cleo-stage-${stage}`).classList.contains("show");
    } else return null;
  };

  getStageShown = () => {
    // stage 1 is meet cleo,
    // stage 2 is "hey user"

    for (let i = 0; i < 4; i++) {
      if (this.isStageShown(i)) {
        return i;
      }
    }

    return -1;
  };

  hideStage = (stage) => {
    const stageNode = $(`cleo-stage-${stage}`);
    if (this.isStageShown(stage) && stageNode) {
      stageNode.classList.remove("show");
    }
  };

  showStage = (stage) => {
    const stageNode = $(`cleo-stage-${stage}`);
    if (!this.isStageShown(stage) && stageNode) {
      stageNode.classList.add("show");
    }
  };

  hideInitialCTA = () => {
    const cta = $("lsg-chatbot-cta");
    const outerCircle = _(".outer-circle");
    const bottomShade = $("bottom-shade");

    cta.classList.add("hide");
    outerCircle.classList.add("hide");
    this.cleoImagePopup.classList.add("hide");
    bottomShade.classList.add("show");
  };

  handleStageSwitch = () => {
    console.log("whooo");
    const currentStage = this.getStageShown();
    console.log({ currentStage });
    // if (currentStage === -1) return;
    // close chatbot cta if stage is 0
    if (currentStage === 0) {
      this.hideInitialCTA();
    }

    this.hideStage(currentStage);
    this.showStage(currentStage + 1);
  };

  handleBackBtn = () => {
    const currentStage = this.getStageShown();
    if (currentStage === -1) return;

    this.hideStage(currentStage);
    this.showStage(currentStage - 1);
  };

  openChatDialog = () => {
    this.cleoImagePopup.classList.remove("can-show");
    this.cleoBoxContainer.classList.add("show");
  };

  onboardUser = (event) => {
    console.log("adeeee");
    event.preventDefault();
    const nameInputValue = $("cleo-username-input").value;
    const userNameNode = $("username");

    console.log({ nameInputValue });
    if (nameInputValue) {
      userNameNode.innerHTML = `, ${nameInputValue}`;
    }

    this.handleStageSwitch();
  };
}
