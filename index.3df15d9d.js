!function(e,t,o,n,i){var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r="function"==typeof a[n]&&a[n],s=r.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function c(t,o){if(!s[t]){if(!e[t]){var i="function"==typeof a[n]&&a[n];if(!o&&i)return i(t,!0);if(r)return r(t,!0);if(l&&"string"==typeof t)return l(t);var d=Error("Cannot find module '"+t+"'");throw d.code="MODULE_NOT_FOUND",d}f.resolve=function(o){var n=e[t][1][o];return null!=n?n:o},f.cache={};var u=s[t]=new c.Module(t);e[t][0].call(u.exports,f,u,u.exports,this)}return s[t].exports;function f(e){var t=f.resolve(e);return!1===t?{}:c(t)}}c.isParcelRequire=!0,c.Module=function(e){this.id=e,this.bundle=c,this.exports={}},c.modules=e,c.cache=s,c.parent=r,c.register=function(t,o){e[t]=[function(e,t){t.exports=o},{}]},Object.defineProperty(c,"root",{get:function(){return a[n]}}),a[n]=c;for(var d=0;d<t.length;d++)c(t[d]);if(o){var u=c(o);"object"==typeof exports&&"undefined"!=typeof module?module.exports=u:"function"==typeof define&&define.amd&&define(function(){return u})}}({iyXH2:[function(e,t,o){var n=arguments[3];t.bundle.HMR_BUNDLE_ID="a9ae35caf2427ece";var i="__parcel__error__overlay__",a=t.bundle.Module;function r(){return 0===location.protocol.indexOf("http")?location.hostname:"localhost"}function s(){return location.port}t.bundle.Module=function(e){a.call(this,e),this.hot={data:t.bundle.hotData[e],_acceptCallbacks:[],_disposeCallbacks:[],accept:function(e){this._acceptCallbacks.push(e||function(){})},dispose:function(e){this._disposeCallbacks.push(e)}},t.bundle.hotData[e]=void 0},t.bundle.hotData={};var l=t.bundle.parent;if((!l||!l.isParcelRequire)&&"undefined"!=typeof WebSocket){var c,d,u,f,p=r(),m=s(),h="https:"!=location.protocol||["localhost","127.0.0.1","0.0.0.0"].includes(p)?"ws":"wss";try{f=new WebSocket(h+"://"+p+(m?":"+m:"")+"/")}catch(e){e.message&&console.error(e.message),f={}}var v="undefined"==typeof browser?"undefined"==typeof chrome?null:chrome:browser,g=!1;try{(0,eval)('throw new Error("test"); //# sourceURL=test.js')}catch(e){g=e.stack.includes("test.js")}f.onmessage=async function(e){c={},u=[],d=[];var o=JSON.parse(e.data);if("update"===o.type){"undefined"!=typeof document&&b();let e=o.assets.filter(e=>"d6ea1d42532a7575"===e.envHash);if(e.every(e=>"css"===e.type||"js"===e.type&&x(t.bundle.root,e.id,e.depsByBundle))){console.clear(),"undefined"!=typeof window&&"undefined"!=typeof CustomEvent&&window.dispatchEvent(new CustomEvent("parcelhmraccept")),await k(e);let o={};for(let e=0;e<d.length;e++){let t=d[e][1];o[t]||(j(d[e][0],t),o[t]=!0)}o={};for(let e=0;e<u.length;e++){let n=u[e][1];o[n]||(function(e,o){e(o);var n=e.cache[o];n&&n.hot&&n.hot._acceptCallbacks.length&&n.hot._acceptCallbacks.forEach(function(e){var n=e(function(){return w(t.bundle.root,o)});n&&u.length&&(n.forEach(function(e){j(e[0],e[1])}),u.push.apply(u,n))})}(u[e][0],n),o[n]=!0)}}else"reload"in location?location.reload():v&&v.runtime&&v.runtime.reload&&v.runtime.reload()}if("error"===o.type){for(let e of o.diagnostics.ansi){let t=e.codeframe?e.codeframe:e.stack;console.error("\uD83D\uDEA8 [parcel]: "+e.message+"\n"+t+"\n\n"+e.hints.join("\n"))}if("undefined"!=typeof document){b();var n=function(e){var t=document.createElement("div");t.id=i;let o='<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';for(let t of e){let e=t.frames.length?t.frames.reduce((e,t)=>`${e}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(t.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${t.location}</a>
${t.code}`,""):t.stack;o+=`
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${t.message}
        </div>
        <pre>${e}</pre>
        <div>
          ${t.hints.map(e=>"<div>\uD83D\uDCA1 "+e+"</div>").join("")}
        </div>
        ${t.documentation?`<div>\u{1F4DD} <a style="color: violet" href="${t.documentation}" target="_blank">Learn more</a></div>`:""}
      </div>
    `}return o+="</div>",t.innerHTML=o,t}(o.diagnostics.html);document.body.appendChild(n)}}},f instanceof WebSocket&&(f.onerror=function(e){e.message&&console.error(e.message)},f.onclose=function(){console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost")})}function b(){var e=document.getElementById(i);e&&(e.remove(),console.log("[parcel] ✨ Error resolved"))}function w(e,t){var o,n,i,a=e.modules;if(!a)return[];var r=[];for(o in a)for(n in a[o][1])((i=a[o][1][n])===t||Array.isArray(i)&&i[i.length-1]===t)&&r.push([e,o]);return e.parent&&(r=r.concat(w(e.parent,t))),r}var y=null;async function k(e){let o;n.parcelHotUpdate=Object.create(null);try{if(!g){let t=e.map(e=>{var t;return null===(t=function(e){if("js"===e.type){if("undefined"!=typeof document){let t=document.createElement("script");return t.src=e.url+"?t="+Date.now(),"esmodule"===e.outputFormat&&(t.type="module"),new Promise((e,o)=>{var n;t.onload=()=>e(t),t.onerror=o,null===(n=document.head)||void 0===n||n.appendChild(t)})}if("function"==typeof importScripts)return"esmodule"===e.outputFormat?__parcel__require__(e.url+"?t="+Date.now()):new Promise((t,o)=>{try{importScripts(e.url+"?t="+Date.now()),t()}catch(e){o(e)}})}}(e))||void 0===t?void 0:t.catch(e=>{if(v&&v.runtime&&3==v.runtime.getManifest().manifest_version&&"undefined"!=typeof ServiceWorkerGlobalScope&&n instanceof ServiceWorkerGlobalScope){v.runtime.reload();return}throw e})});o=await Promise.all(t)}e.forEach(function(e){!function e(o,i){var a=o.modules;if(a){if("css"===i.type)y||(y=setTimeout(function(){for(var e=document.querySelectorAll('link[rel="stylesheet"]'),t=0;t<e.length;t++){var o=e[t].getAttribute("href"),n=r(),i="localhost"===n?RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):"+s()).test(o):o.indexOf(n+":"+s());/^https?:\/\//i.test(o)&&0!==o.indexOf(location.origin)&&!i||function(e){var t=e.getAttribute("href");if(t){var o=e.cloneNode();o.onload=function(){null!==e.parentNode&&e.parentNode.removeChild(e)},o.setAttribute("href",t.split("?")[0]+"?"+Date.now()),e.parentNode.insertBefore(o,e.nextSibling)}}(e[t])}y=null},50));else if("js"===i.type){let r=i.depsByBundle[o.HMR_BUNDLE_ID];if(r){if(a[i.id]){let e=a[i.id][1];for(let o in e)if(!r[o]||r[o]!==e[o]){let n=e[o];1===w(t.bundle.root,n).length&&function e(o,n){let i=o.modules;if(i){if(i[n]){let a=i[n][1],r=[];for(let e in a)1===w(t.bundle.root,a[e]).length&&r.push(a[e]);delete i[n],delete o.cache[n],r.forEach(o=>{e(t.bundle.root,o)})}else o.parent&&e(o.parent,n)}}(t.bundle.root,n)}}g&&(0,eval)(i.output);let e=n.parcelHotUpdate[i.id];a[i.id]=[e,r]}else o.parent&&e(o.parent,i)}}}(t.bundle.root,e)})}finally{delete n.parcelHotUpdate,o&&o.forEach(e=>{if(e){var t;null===(t=document.head)||void 0===t||t.removeChild(e)}})}}function x(e,o,n){if(C(e,o,n))return!0;let i=w(t.bundle.root,o),a=!1;for(;i.length>0;){let e=i.shift();if(C(e[0],e[1],null))a=!0;else{let o=w(t.bundle.root,e[1]);if(0===o.length){a=!1;break}i.push(...o)}}return a}function C(e,t,o){if(e.modules){if(o&&!o[e.HMR_BUNDLE_ID])return!e.parent||x(e.parent,t,o);if(c[t])return!0;c[t]=!0;var n=e.cache[t];if(d.push([e,t]),!n||n.hot&&n.hot._acceptCallbacks.length)return u.push([e,t]),!0}}function j(e,t){var o=e.cache[t];e.hotData[t]={},o&&o.hot&&(o.hot.data=e.hotData[t]),o&&o.hot&&o.hot._disposeCallbacks.length&&o.hot._disposeCallbacks.forEach(function(o){o(e.hotData[t])}),delete e.cache[t]}},{}],"5lBMl":[function(e,t,o){let n;var i=e("@parcel/transformer-js/src/esmodule-helpers.js"),a=e("./script.js"),r=e("./js/chatbot.js"),s=e("./js/aos.js"),l=i.interopDefault(s);!async function(){let e=window.location.href;if(e.includes("main")){let e=new a.CityScape3DRendering;await e.render()}else e.includes("new")&&new r.Chatbot().init()}();let c=document.getElementById("wordContainer");document.getElementById("caret"),document.querySelector(".we_exist");let d=["Raise the potential of the human race","Inspire life without limits","Build the future","Disrespect the impossible"],u=["We exist to","We believe in"],f=0,p=0;async function m(e){let t=d[e],o=u[e<4?0:1],i=t.substring(0,f+1)+"<span>|</span>";c&&(c.innerHTML=`<div>${i}</div>`),o.substring(0,p+1),f=Math.min(f+1,t.length),p=Math.min(p+1,o.length),f==t.length&&p==o.length&&(clearInterval(n),f=0,p=0,await (console.log("Sleeping for 2000"),new Promise(e=>setTimeout(e,2e3))),n=setInterval(()=>{let t=e+1;t==d.length&&(t=0),m(t)},150))}n=setInterval(()=>{m(0)},150);let h=e=>document.getElementById(e);(0,l.default).init();let v=document.getElementById("hamburger-btn"),g=h("mobile-menu"),b=h("close-btn"),w=()=>{g.classList.add("translate-x-0"),g.classList.remove("translate-x-full")},y=()=>{g.classList.add("translate-x-full"),g.classList.remove("translate-x-0")},k=()=>g.classList.contains("translate-x-0");v&&(v.addEventListener("click",()=>{k()?y():w()}),b&&b.addEventListener("click",()=>{y()}))},{"./script.js":"9t07S","./js/chatbot.js":"gu1Gz","./js/aos.js":"VDpNd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],gu1Gz:[function(e,t,o){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(o),n.export(o,"Chatbot",()=>w);var i=e("./../pngs/cleo.png"),a=n.interopDefault(i),r=e("./../pngs/chat.png"),s=n.interopDefault(r),l=e("./../pngs/gamePad.png"),c=n.interopDefault(l),d=e("./../svgs/arrowHead.svg"),u=n.interopDefault(d),f=e("./../svgs/back.svg"),p=n.interopDefault(f),m=e("./../svgs/expand.svg"),h=n.interopDefault(m),v=e("./../svgs/ellipsis.svg"),g=n.interopDefault(v),b=e("./utils");class w{chatbotContainer=(0,b.$)("lsg-chatbot-cta-container");email="";chats=[{message:"Hello, I'm Cleo, your AI assistant. How can I help you today?",sender:"bot"},{message:"I'm looking for a job",sender:"user"},{message:"Great! What kind of job are you looking for?",sender:"bot"},{message:"I'm looking for a remote job",sender:"user"},{message:"I have a few recommendations for you. Would you like to see them?",sender:"bot"},{message:"Yes, please",sender:"user"},{message:"Here are a few recommendations for remote jobs",sender:"bot"}];widgetHead=`
    <div class="widget-head">
      <button class="back-btn">
        <img src=${p.default} />
      </button>
  
      <button class="expand-btn">
        <img src=${h.default} />
      </button>
    </div>
  `;activities=[{label:"Recommendations for healthy snacks ..."},{label:"When does the next LSG internship s.."}];chatbotCta=null;cleoBoxContainer=null;cleoImagePopup=null;getStartedBtn=null;backBtns=null;menuLeftChatWithCleo=null;renderActivity=e=>{let t=e?.label;return`
      <div class="activity">
        <div>
          <img src=${s.default} alt=${t} class="chat" />
          <p>${t??""}</p>
        </div>
  
        <img src=${g.default} class="ellipsis" />
      </div>
    `};renderActivities=(e=[])=>`
    <div class="activities">
      ${e.map(e=>this.renderActivity(e)).join("")}
    </div>
  `;renderChat=e=>`
      <div class="message ${e.sender}">
        <p>${e.message}</p>
      </div>
    `;renderChats=(e=[])=>(console.log({thecahts:e}),`
      <div class="chats">
        ${e.map(e=>this.renderChat(e)).join("")}
      </div>
    `);renderChatBox=()=>`
      ${this.widgetHead}
      <div class="chat-box">
        ${this.renderChats(this.chats)}
        <input id="chat-box-input" placeholder="Type a message to Cleo..." />
      </div>
    `;init(){this.chatbotContainer.innerHTML+=`
<button id="lsg-chatbot-cta"></button>
<img src=${a.default} alt="CLEO" class="cleo-image-popup can-show">
<div class="cleo">
  <div id="cleo-stage-0">
    <img src=${a.default} alt="CLEO" class="cleo-image">
    <h3>Meet Cleo! <br />Your AI Assistant</h3>

    <p>Ask me anything about LSG, this website or life and I\u{2019}ll do my best to show you a few new ideas.</p>

    <div class="flex w-full">
      <button type="button" id="get-started-btn">Get started
        <img src=${u.default} />
      </button>
    </div>
  </div>

  <div id="cleo-stage-1">
    ${this.widgetHead}

    <img src=${a.default} alt="CLEO" class="cleo-image">

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
          <img src=${u.default} />
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
        <img src=${s.default}></img>
        <p>Chat with Cleo</p>
      </div>

      <div class="menu-right">
        <div class="menu-right-up">
          <img src=${c.default}></img>
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
    `,this.chatbotCta=(0,b.$)("lsg-chatbot-cta"),this.cleoBoxContainer=(0,b._)(".cleo"),this.cleoImagePopup=(0,b._)(".cleo-image-popup"),this.getStartedBtn=(0,b.$)("get-started-btn"),this.backBtns=(0,b.__)(".back-btn"),this.menuLeftChatWithCleo=(0,b._)(".menu-left"),this.backBtns?.length&&this.backBtns.forEach(e=>{e.addEventListener("click",()=>{console.log("back btn clicked"),this.handleBackBtn()})}),this.menuLeftChatWithCleo.addEventListener("click",()=>{this.handleStageSwitch()}),this.chatbotCta.addEventListener("click",()=>{this.openChatDialog(),this.handleStageSwitch()}),this.getStartedBtn.addEventListener("click",()=>{this.openChatDialog(),this.handleStageSwitch()}),(0,b.$)("onboarding-form").addEventListener("submit",e=>{this.onboardUser(e)})}isStageShown=e=>(0,b.$)(`cleo-stage-${e}`)?(0,b.$)(`cleo-stage-${e}`).classList.contains("show"):null;getStageShown=()=>{for(let e=0;e<4;e++)if(this.isStageShown(e))return e;return -1};hideStage=e=>{let t=(0,b.$)(`cleo-stage-${e}`);this.isStageShown(e)&&t&&t.classList.remove("show")};showStage=e=>{let t=(0,b.$)(`cleo-stage-${e}`);!this.isStageShown(e)&&t&&t.classList.add("show")};hideInitialCTA=()=>{let e=(0,b.$)("lsg-chatbot-cta"),t=(0,b._)(".outer-circle"),o=(0,b.$)("bottom-shade");e.classList.add("hide"),t.classList.add("hide"),this.cleoImagePopup.classList.add("hide"),o.classList.add("show")};handleStageSwitch=()=>{console.log("whooo");let e=this.getStageShown();console.log({currentStage:e}),0===e&&this.hideInitialCTA(),this.hideStage(e),this.showStage(e+1)};handleBackBtn=()=>{let e=this.getStageShown();-1!==e&&(this.hideStage(e),this.showStage(e-1))};openChatDialog=()=>{this.cleoImagePopup.classList.remove("can-show"),this.cleoBoxContainer.classList.add("show")};onboardUser=e=>{console.log("adeeee"),e.preventDefault();let t=(0,b.$)("cleo-username-input").value,o=(0,b.$)("username");console.log({nameInputValue:t}),t&&(o.innerHTML=`, ${t}`),this.handleStageSwitch()}}},{"./../pngs/cleo.png":"iqfhs","./../pngs/chat.png":"5MZFy","./../pngs/gamePad.png":"hT4r4","./../svgs/arrowHead.svg":"7rTG5","./../svgs/back.svg":"6CYwJ","./../svgs/expand.svg":"doT8u","./../svgs/ellipsis.svg":"9D2CH","./utils":"02IhW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],iqfhs:[function(e,t,o){t.exports=e("31dcb287767ca04d").getBundleURL("ezcJq")+"cleo.a70d2aec.png?"+Date.now()},{"31dcb287767ca04d":"lgJ39"}],lgJ39:[function(e,t,o){var n={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}o.getBundleURL=function(e){var t=n[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),n[e]=t),t},o.getBaseURL=i,o.getOrigin=function(e){var t=(""+e).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);if(!t)throw Error("Origin not found");return t[0]}},{}],"5MZFy":[function(e,t,o){t.exports=e("7af10d1bb46ffc0e").getBundleURL("ezcJq")+"chat.66aa62cd.png?"+Date.now()},{"7af10d1bb46ffc0e":"lgJ39"}],hT4r4:[function(e,t,o){t.exports=e("1d183494749fe8ff").getBundleURL("ezcJq")+"gamePad.d14220bb.png?"+Date.now()},{"1d183494749fe8ff":"lgJ39"}],"7rTG5":[function(e,t,o){t.exports=e("d96645ecae89aa7e").getBundleURL("ezcJq")+"arrowHead.3344572e.svg?"+Date.now()},{d96645ecae89aa7e:"lgJ39"}],"6CYwJ":[function(e,t,o){t.exports=e("20bdd2afcd1ab707").getBundleURL("ezcJq")+"back.ac723f3c.svg?"+Date.now()},{"20bdd2afcd1ab707":"lgJ39"}],doT8u:[function(e,t,o){t.exports=e("b9fa45d18d9bcd9f").getBundleURL("ezcJq")+"expand.2c037b6a.svg?"+Date.now()},{b9fa45d18d9bcd9f:"lgJ39"}],"9D2CH":[function(e,t,o){t.exports=e("ef979da22e2c58e3").getBundleURL("ezcJq")+"ellipsis.ac1df473.svg?"+Date.now()},{ef979da22e2c58e3:"lgJ39"}],"02IhW":[function(e,t,o){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(o),n.export(o,"$",()=>i),n.export(o,"_",()=>a),n.export(o,"__",()=>r);let i=e=>document.getElementById(e),a=e=>document.querySelector(e),r=e=>document.querySelectorAll(e)},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],VDpNd:[function(e,t,o){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(o);var i=e("aos"),a=n.interopDefault(i);e("aos/dist/aos.css"),o.default={init:()=>{(0,a.default).init()}}},{aos:"eRzTM","aos/dist/aos.css":"iYkXi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],eRzTM:[function(e,t,o){var n,i=arguments[3];n=function(){var e="undefined"!=typeof window?window:void 0!==i?i:"undefined"!=typeof self?self:{},t="Expected a function",o=NaN,n=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,s=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,u=c||d||Function("return this")(),f=Object.prototype.toString,p=Math.max,m=Math.min,h=function(){return u.Date.now()};function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==f.call(t))return o;if(v(e)){var t,i="function"==typeof e.valueOf?e.valueOf():e;e=v(i)?i+"":i}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var c=r.test(e);return c||s.test(e)?l(e.slice(2),c?2:8):a.test(e)?o:+e}var b=function(e,o,n){var i=!0,a=!0;if("function"!=typeof e)throw TypeError(t);return v(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),function(e,o,n){var i,a,r,s,l,c,d=0,u=!1,f=!1,b=!0;if("function"!=typeof e)throw TypeError(t);function w(t){var o=i,n=a;return i=a=void 0,d=t,s=e.apply(n,o)}function y(e){var t=e-c;return void 0===c||t>=o||t<0||f&&e-d>=r}function k(){var e,t=h();if(y(t))return x(t);l=setTimeout(k,(e=o-(t-c),f?m(e,r-(t-d)):e))}function x(e){return l=void 0,b&&i?w(e):(i=a=void 0,s)}function C(){var e,t=h(),n=y(t);if(i=arguments,a=this,c=t,n){if(void 0===l)return d=e=c,l=setTimeout(k,o),u?w(e):s;if(f)return l=setTimeout(k,o),w(c)}return void 0===l&&(l=setTimeout(k,o)),s}return o=g(o)||0,v(n)&&(u=!!n.leading,r=(f="maxWait"in n)?p(g(n.maxWait)||0,o):r,b="trailing"in n?!!n.trailing:b),C.cancel=function(){void 0!==l&&clearTimeout(l),d=0,i=c=a=l=void 0},C.flush=function(){return void 0===l?s:x(h())},C}(e,o,{leading:i,maxWait:o,trailing:a})},w=NaN,y=/^\s+|\s+$/g,k=/^[-+]0x[0-9a-f]+$/i,x=/^0b[01]+$/i,C=/^0o[0-7]+$/i,j=parseInt,E="object"==typeof e&&e&&e.Object===Object&&e,S="object"==typeof self&&self&&self.Object===Object&&self,D=E||S||Function("return this")(),L=Object.prototype.toString,$=Math.max,_=Math.min,O=function(){return D.Date.now()};function B(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function A(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==L.call(t))return w;if(B(e)){var t,o="function"==typeof e.valueOf?e.valueOf():e;e=B(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(y,"");var n=x.test(e);return n||C.test(e)?j(e.slice(2),n?2:8):k.test(e)?w:+e}var M=function(e,t,o){var n,i,a,r,s,l,c=0,d=!1,u=!1,f=!0;if("function"!=typeof e)throw TypeError("Expected a function");function p(t){var o=n,a=i;return n=i=void 0,c=t,r=e.apply(a,o)}function m(e){var o=e-l;return void 0===l||o>=t||o<0||u&&e-c>=a}function h(){var e,o=O();if(m(o))return v(o);s=setTimeout(h,(e=t-(o-l),u?_(e,a-(o-c)):e))}function v(e){return s=void 0,f&&n?p(e):(n=i=void 0,r)}function g(){var e,o=O(),a=m(o);if(n=arguments,i=this,l=o,a){if(void 0===s)return c=e=l,s=setTimeout(h,t),d?p(e):r;if(u)return s=setTimeout(h,t),p(l)}return void 0===s&&(s=setTimeout(h,t)),r}return t=A(t)||0,B(o)&&(d=!!o.leading,a=(u="maxWait"in o)?$(A(o.maxWait)||0,t):a,f="trailing"in o?!!o.trailing:f),g.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=i=s=void 0},g.flush=function(){return void 0===s?r:v(O())},g},N=function(){};function z(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes);if(function e(t){var o=void 0,n=void 0;for(o=0;o<t.length;o+=1)if((n=t[o]).dataset&&n.dataset.aos||n.children&&e(n.children))return!0;return!1}(t.concat(o)))return N()})}function H(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}var q={isSupported:function(){return!!H()},ready:function(e,t){var o=window.document,n=new(H())(z);N=t,n.observe(o.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}},T=function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")},I=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},U=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,W=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,P=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,J=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function F(){return navigator.userAgent||navigator.vendor||window.opera||""}var G=new(function(){function e(){T(this,e)}return I(e,[{key:"phone",value:function(){var e=F();return!(!U.test(e)&&!W.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=F();return!(!P.test(e)&&!J.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),e}()),Y=function(e,t){var o=void 0;return G.ie11()?(o=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,{detail:t}):o=new CustomEvent(e,{detail:t}),document.dispatchEvent(o)},K=function(e){return e.forEach(function(e,t){var o,n,i,a,r,s;return o=window.pageYOffset,n=e.options,i=e.position,a=e.node,e.data,r=function(){var t;e.animated&&((t=n.animatedClassNames)&&t.forEach(function(e){return a.classList.remove(e)}),Y("aos:out",a),e.options.id&&Y("aos:in:"+e.options.id,a),e.animated=!1)},void(n.mirror&&o>=i.out&&!n.once?r():o>=i.in?e.animated||((s=n.animatedClassNames)&&s.forEach(function(e){return a.classList.add(e)}),Y("aos:in",a),e.options.id&&Y("aos:in:"+e.options.id,a),e.animated=!0):e.animated&&!n.once&&r())})},X=function(e){for(var t=0,o=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),o+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:o,left:t}},V=function(e,t,o){var n=e.getAttribute("data-aos-"+t);if(void 0!==n){if("true"===n)return!0;if("false"===n)return!1}return n||o},Z=function(){var e=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(e,function(e){return{node:e}})},Q=[],ee=!1,et={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},eo=function(){return document.all&&!window.atob},en=function(){var e,t;arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(ee=!0),ee&&(e=Q,t=et,e.forEach(function(e,o){var n,i,a,r,s,l=V(e.node,"mirror",t.mirror),c=V(e.node,"once",t.once),d=V(e.node,"id"),u=t.useClassNames&&e.node.getAttribute("data-aos"),f=[t.animatedClassName].concat(u?u.split(" "):[]).filter(function(e){return"string"==typeof e});t.initClassName&&e.node.classList.add(t.initClassName),e.position={in:function(e,t,o){var n=window.innerHeight,i=V(e,"anchor"),a=V(e,"anchor-placement"),r=Number(V(e,"offset",a?0:t)),s=e;i&&document.querySelectorAll(i)&&(s=document.querySelectorAll(i)[0]);var l=X(s).top-n;switch(a||o){case"top-bottom":break;case"center-bottom":l+=s.offsetHeight/2;break;case"bottom-bottom":l+=s.offsetHeight;break;case"top-center":l+=n/2;break;case"center-center":l+=n/2+s.offsetHeight/2;break;case"bottom-center":l+=n/2+s.offsetHeight;break;case"top-top":l+=n;break;case"bottom-top":l+=n+s.offsetHeight;break;case"center-top":l+=n+s.offsetHeight/2}return l+r}(e.node,t.offset,t.anchorPlacement),out:l&&(n=e.node,i=t.offset,window.innerHeight,a=V(n,"anchor"),r=V(n,"offset",i),s=n,a&&document.querySelectorAll(a)&&(s=document.querySelectorAll(a)[0]),X(s).top+s.offsetHeight-r)},e.options={once:c,mirror:l,animatedClassNames:f,id:d}}),K(Q=e),window.addEventListener("scroll",b(function(){K(Q,et.once)},et.throttleDelay)))},ei=function(){if(Q=Z(),er(et.disable)||eo())return ea();en()},ea=function(){Q.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),et.initClassName&&e.node.classList.remove(et.initClassName),et.animatedClassName&&e.node.classList.remove(et.animatedClassName)})},er=function(e){return!0===e||"mobile"===e&&G.mobile()||"phone"===e&&G.phone()||"tablet"===e&&G.tablet()||"function"==typeof e&&!0===e()};return{init:function(e){return et=R(et,e),Q=Z(),et.disableMutationObserver||q.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),et.disableMutationObserver=!0),et.disableMutationObserver||q.ready("[data-aos]",ei),er(et.disable)||eo()?ea():(document.querySelector("body").setAttribute("data-aos-easing",et.easing),document.querySelector("body").setAttribute("data-aos-duration",et.duration),document.querySelector("body").setAttribute("data-aos-delay",et.delay),-1===["DOMContentLoaded","load"].indexOf(et.startEvent)?document.addEventListener(et.startEvent,function(){en(!0)}):window.addEventListener("load",function(){en(!0)}),"DOMContentLoaded"===et.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&en(!0),window.addEventListener("resize",M(en,et.debounceDelay,!0)),window.addEventListener("orientationchange",M(en,et.debounceDelay,!0)),Q)},refresh:en,refreshHard:ei}},t.exports=n()},{}],iYkXi:[function(){},{}]},["iyXH2","5lBMl"],"5lBMl","parcelRequire0561");
//# sourceMappingURL=index.3df15d9d.js.map