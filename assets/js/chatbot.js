const chatbotContainer = $("lsg-chatbot-cta-container");

// add the cleo image that pops up when the chatbot button is hovered.
chatbotContainer.innerHTML += `
  <button id="lsg-chatbot-cta"></button>
  <img src="./assets/pngs/cleo.png" alt="CLEO" class="cleo-image-popup can-show">
  <div class="cleo">
    <div id="cleo-stage-0">
      <img src="./assets/pngs/cleo.png" alt="CLEO" class="cleo-image">
      <h3>Meet Cleo! <br />Your AI Assistant</h3>

      <p>Ask me anything about LSG, this website or life and I’ll do my best to show you a few new ideas.</p>
    </div>

    <div id="cleo-stage-1">
      <div class="widget-head">
        <button class="back-btn">
          <img src="./assets/svgs/back.svg" />
        </button>

        <button class="expand-btn">
          <img src="./assets/svgs/expand.svg" />
        </button>
      </div>

      <img src="./assets/pngs/cleo.png" alt="CLEO" class="cleo-image">

      <form id="onboarding-form">
        <label>
          Name
          <input type="text" placeholder="Enter name" />
        </label>

        <label>
          Email
          <input type="email" placeholder="Enter email" />
        </label>

        <div class="form-btns">
          <button type="submit">Send
            <img src="./assets/svgs/arrowHead.svg" />
          </button>
        </div>
      </form>
    </div>

    <div id="cleo-stage-2">
      <h3><span>Hey,</span> Steph</h3>

      <p class="how-can-help">How can I help?</p>
      <div></div>
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

const isStageShown = (stage) => {
  if ($(`cleo-stage-${stage}`)) {
    return $(`cleo-stage-${stage}`).classList.contains("show");
  } else return null;
};

const getStageShown = () => {
  // stage 1 is meet cleo,
  // stage 2 is "hey user"

  for (let i = 0; i < 3; i++) {
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

// chatbotContainer.addEventListener("click", () => {
//   cleoImagePopup.classList.remove("can-show");
//   cleoBoxContainer.classList.add("show");

//   handleStageSwitch();
// });
chatbotCta.addEventListener("click", () => {
  cleoImagePopup.classList.remove("can-show");
  cleoBoxContainer.classList.add("show");

  handleStageSwitch();
});
