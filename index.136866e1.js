function e(e,t,i,n){Object.defineProperty(e,t,{get:i,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var i=globalThis,n={},o={},a=i.parcelRequire0561;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},i.parcelRequire0561=a);var r=a.register;r("27Lyk",function(t,i){e(t.exports,"register",()=>n,e=>n=e);var n,o=new Map;n=function(e,t){for(var i=0;i<t.length-1;i+=2)o.set(t[i],{baseUrl:e,path:t[i+1]})}}),r("n9UMu",function(e,t){let i;var n=a("9E8r7"),o=a("abnf3"),r=a("foJoU");!async function(){let e=window.location.href;if(e.includes("main")){let e=new n.CityScape3DRendering;await e.render()}else e.includes("new")&&new o.Chatbot().init()}();let s=document.getElementById("wordContainer");document.getElementById("caret"),document.querySelector(".we_exist");let c=["Raise the potential of the human race","Inspire life without limits","Build the future","Disrespect the impossible"],l=["We exist to","We believe in"],d=0,u=0;async function m(e){let t=c[e],n=l[e<4?0:1],o=t.substring(0,d+1)+"<span>|</span>";s&&(s.innerHTML=`<div>${o}</div>`),n.substring(0,u+1),d=Math.min(d+1,t.length),u=Math.min(u+1,n.length),d==t.length&&u==n.length&&(clearInterval(i),d=0,u=0,await (console.log("Sleeping for 2000"),new Promise(e=>setTimeout(e,2e3))),i=setInterval(()=>{let t=e+1;t==c.length&&(t=0),m(t)},150))}i=setInterval(()=>{m(0)},150);let f=e=>document.getElementById(e);(0,r.default).init();let p=document.getElementById("hamburger-btn"),b=f("mobile-menu"),h=f("close-btn"),v=()=>{b.classList.add("translate-x-0"),b.classList.remove("translate-x-full")},g=()=>{b.classList.add("translate-x-full"),b.classList.remove("translate-x-0")},w=()=>b.classList.contains("translate-x-0");p&&(p.addEventListener("click",()=>{w()?g():v()}),h&&h.addEventListener("click",()=>{g()}))}),r("abnf3",function(i,n){e(i.exports,"Chatbot",()=>f);var o=a("bzToD"),r=a("1ezLh"),s=a("7vpZd"),c=a("lUtxv"),l=a("2MGD4"),d=a("gsD94"),u=a("1GnCN"),m=a("89oV3");class f{chatbotContainer=(0,m.$)("lsg-chatbot-cta-container");email="";chats=[{message:"Hello, I'm Cleo, your AI assistant. How can I help you today?",sender:"bot"},{message:"I'm looking for a job",sender:"user"},{message:"Great! What kind of job are you looking for?",sender:"bot"},{message:"I'm looking for a remote job",sender:"user"},{message:"I have a few recommendations for you. Would you like to see them?",sender:"bot"},{message:"Yes, please",sender:"user"},{message:"Here are a few recommendations for remote jobs",sender:"bot"}];widgetHead=`
    <div class="widget-head">
      <button class="back-btn">
        <img src=${t(l)} />
      </button>
  
      <button class="expand-btn">
        <img src=${t(d)} />
      </button>
    </div>
  `;activities=[{label:"Recommendations for healthy snacks ..."},{label:"When does the next LSG internship s.."}];chatbotCta=null;cleoBoxContainer=null;cleoImagePopup=null;getStartedBtn=null;backBtns=null;menuLeftChatWithCleo=null;renderActivity=e=>{let i=e?.label;return`
      <div class="activity">
        <div>
          <img src=${t(r)} alt=${i} class="chat" />
          <p>${i??""}</p>
        </div>
  
        <img src=${t(u)} class="ellipsis" />
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
<img src=${t(o)} alt="CLEO" class="cleo-image-popup can-show">
<div class="cleo">
  <div id="cleo-stage-0">
    <img src=${t(o)} alt="CLEO" class="cleo-image">
    <h3>Meet Cleo! <br />Your AI Assistant</h3>

    <p>Ask me anything about LSG, this website or life and I\u{2019}ll do my best to show you a few new ideas.</p>

    <div class="flex w-full">
      <button type="button" id="get-started-btn">Get started
        <img src=${t(c)} />
      </button>
    </div>
  </div>

  <div id="cleo-stage-1">
    ${this.widgetHead}

    <img src=${t(o)} alt="CLEO" class="cleo-image">

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
          <img src=${t(c)} />
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
        <img src=${t(r)}></img>
        <p>Chat with Cleo</p>
      </div>

      <div class="menu-right">
        <div class="menu-right-up">
          <img src=${t(s)}></img>
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
    `,this.chatbotCta=(0,m.$)("lsg-chatbot-cta"),this.cleoBoxContainer=(0,m._)(".cleo"),this.cleoImagePopup=(0,m._)(".cleo-image-popup"),this.getStartedBtn=(0,m.$)("get-started-btn"),this.backBtns=(0,m.__)(".back-btn"),this.menuLeftChatWithCleo=(0,m._)(".menu-left"),this.backBtns?.length&&this.backBtns.forEach(e=>{e.addEventListener("click",()=>{console.log("back btn clicked"),this.handleBackBtn()})}),this.menuLeftChatWithCleo.addEventListener("click",()=>{this.handleStageSwitch()}),this.chatbotCta.addEventListener("click",()=>{this.openChatDialog(),this.handleStageSwitch()}),this.getStartedBtn.addEventListener("click",()=>{this.openChatDialog(),this.handleStageSwitch()}),(0,m.$)("onboarding-form").addEventListener("submit",e=>{this.onboardUser(e)})}isStageShown=e=>(0,m.$)(`cleo-stage-${e}`)?(0,m.$)(`cleo-stage-${e}`).classList.contains("show"):null;getStageShown=()=>{for(let e=0;e<4;e++)if(this.isStageShown(e))return e;return -1};hideStage=e=>{let t=(0,m.$)(`cleo-stage-${e}`);this.isStageShown(e)&&t&&t.classList.remove("show")};showStage=e=>{let t=(0,m.$)(`cleo-stage-${e}`);!this.isStageShown(e)&&t&&t.classList.add("show")};hideInitialCTA=()=>{let e=(0,m.$)("lsg-chatbot-cta"),t=(0,m._)(".outer-circle"),i=(0,m.$)("bottom-shade");e.classList.add("hide"),t.classList.add("hide"),this.cleoImagePopup.classList.add("hide"),i.classList.add("show")};handleStageSwitch=()=>{console.log("whooo");let e=this.getStageShown();console.log({currentStage:e}),0===e&&this.hideInitialCTA(),this.hideStage(e),this.showStage(e+1)};handleBackBtn=()=>{let e=this.getStageShown();-1!==e&&(this.hideStage(e),this.showStage(e-1))};openChatDialog=()=>{this.cleoImagePopup.classList.remove("can-show"),this.cleoBoxContainer.classList.add("show")};onboardUser=e=>{console.log("adeeee"),e.preventDefault();let t=(0,m.$)("cleo-username-input").value,i=(0,m.$)("username");console.log({nameInputValue:t}),t&&(i.innerHTML=`, ${t}`),this.handleStageSwitch()}}}),r("bzToD",function(e,t){e.exports=new URL("cleo.f0332fc2.png",import.meta.url).toString()}),r("1ezLh",function(e,t){e.exports=new URL("chat.ab907f59.png",import.meta.url).toString()}),r("7vpZd",function(e,t){e.exports=new URL("gamePad.4d1d1b81.png",import.meta.url).toString()}),r("lUtxv",function(e,t){e.exports=new URL("arrowHead.4d605e48.svg",import.meta.url).toString()}),r("2MGD4",function(e,t){e.exports=new URL("back.a59411ca.svg",import.meta.url).toString()}),r("gsD94",function(e,t){e.exports=new URL("expand.6f6c0bbf.svg",import.meta.url).toString()}),r("1GnCN",function(e,t){e.exports=new URL("ellipsis.8d43cc59.svg",import.meta.url).toString()}),r("89oV3",function(t,i){e(t.exports,"$",()=>n),e(t.exports,"_",()=>o),e(t.exports,"__",()=>a);let n=e=>document.getElementById(e),o=e=>document.querySelector(e),a=e=>document.querySelectorAll(e)}),r("foJoU",function(i,n){e(i.exports,"default",()=>r);var o=a("7WnuI"),r={init:()=>{t(o).init()}}}),r("7WnuI",function(e,t){var n;e.exports,n=function(){var e="undefined"!=typeof window?window:void 0!==i?i:"undefined"!=typeof self?self:{},t="Expected a function",n=NaN,o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,u=l||d||Function("return this")(),m=Object.prototype.toString,f=Math.max,p=Math.min,b=function(){return u.Date.now()};function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==m.call(t))return n;if(h(e)){var t,i="function"==typeof e.valueOf?e.valueOf():e;e=h(i)?i+"":i}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var l=r.test(e);return l||s.test(e)?c(e.slice(2),l?2:8):a.test(e)?n:+e}var g=function(e,i,n){var o=!0,a=!0;if("function"!=typeof e)throw TypeError(t);return h(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),function(e,i,n){var o,a,r,s,c,l,d=0,u=!1,m=!1,g=!0;if("function"!=typeof e)throw TypeError(t);function w(t){var i=o,n=a;return o=a=void 0,d=t,s=e.apply(n,i)}function y(e){var t=e-l;return void 0===l||t>=i||t<0||m&&e-d>=r}function k(){var e,t=b();if(y(t))return x(t);c=setTimeout(k,(e=i-(t-l),m?p(e,r-(t-d)):e))}function x(e){return c=void 0,g&&o?w(e):(o=a=void 0,s)}function S(){var e,t=b(),n=y(t);if(o=arguments,a=this,l=t,n){if(void 0===c)return d=e=l,c=setTimeout(k,i),u?w(e):s;if(m)return c=setTimeout(k,i),w(l)}return void 0===c&&(c=setTimeout(k,i)),s}return i=v(i)||0,h(n)&&(u=!!n.leading,r=(m="maxWait"in n)?f(v(n.maxWait)||0,i):r,g="trailing"in n?!!n.trailing:g),S.cancel=function(){void 0!==c&&clearTimeout(c),d=0,o=l=a=c=void 0},S.flush=function(){return void 0===c?s:x(b())},S}(e,i,{leading:o,maxWait:i,trailing:a})},w=NaN,y=/^\s+|\s+$/g,k=/^[-+]0x[0-9a-f]+$/i,x=/^0b[01]+$/i,S=/^0o[0-7]+$/i,E=parseInt,L="object"==typeof e&&e&&e.Object===Object&&e,C="object"==typeof self&&self&&self.Object===Object&&self,H=L||C||Function("return this")(),_=Object.prototype.toString,$=Math.max,A=Math.min,j=function(){return H.Date.now()};function O(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function N(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==_.call(t))return w;if(O(e)){var t,i="function"==typeof e.valueOf?e.valueOf():e;e=O(i)?i+"":i}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(y,"");var n=x.test(e);return n||S.test(e)?E(e.slice(2),n?2:8):k.test(e)?w:+e}var R=function(e,t,i){var n,o,a,r,s,c,l=0,d=!1,u=!1,m=!0;if("function"!=typeof e)throw TypeError("Expected a function");function f(t){var i=n,a=o;return n=o=void 0,l=t,r=e.apply(a,i)}function p(e){var i=e-c;return void 0===c||i>=t||i<0||u&&e-l>=a}function b(){var e,i=j();if(p(i))return h(i);s=setTimeout(b,(e=t-(i-c),u?A(e,a-(i-l)):e))}function h(e){return s=void 0,m&&n?f(e):(n=o=void 0,r)}function v(){var e,i=j(),a=p(i);if(n=arguments,o=this,c=i,a){if(void 0===s)return l=e=c,s=setTimeout(b,t),d?f(e):r;if(u)return s=setTimeout(b,t),f(c)}return void 0===s&&(s=setTimeout(b,t)),r}return t=N(t)||0,O(i)&&(d=!!i.leading,a=(u="maxWait"in i)?$(N(i.maxWait)||0,t):a,m="trailing"in i?!!i.trailing:m),v.cancel=function(){void 0!==s&&clearTimeout(s),l=0,n=c=o=s=void 0},v.flush=function(){return void 0===s?r:h(j())},v},I=function(){};function M(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),i=Array.prototype.slice.call(e.removedNodes);if(function e(t){var i=void 0,n=void 0;for(i=0;i<t.length;i+=1)if((n=t[i]).dataset&&n.dataset.aos||n.children&&e(n.children))return!0;return!1}(t.concat(i)))return I()})}function z(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}var T={isSupported:function(){return!!z()},ready:function(e,t){var i=window.document,n=new(z())(M);I=t,n.observe(i.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}},D=function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")},q=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},F=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,U=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,W=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,P=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function G(){return navigator.userAgent||navigator.vendor||window.opera||""}var Y=new(function(){function e(){D(this,e)}return q(e,[{key:"phone",value:function(){var e=G();return!(!F.test(e)&&!U.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=G();return!(!W.test(e)&&!P.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),e}()),J=function(e,t){var i=void 0;return Y.ie11()?(i=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,{detail:t}):i=new CustomEvent(e,{detail:t}),document.dispatchEvent(i)},V=function(e){return e.forEach(function(e,t){var i,n,o,a,r,s;return i=window.pageYOffset,n=e.options,o=e.position,a=e.node,e.data,r=function(){var t;e.animated&&((t=n.animatedClassNames)&&t.forEach(function(e){return a.classList.remove(e)}),J("aos:out",a),e.options.id&&J("aos:in:"+e.options.id,a),e.animated=!1)},void(n.mirror&&i>=o.out&&!n.once?r():i>=o.in?e.animated||((s=n.animatedClassNames)&&s.forEach(function(e){return a.classList.add(e)}),J("aos:in",a),e.options.id&&J("aos:in:"+e.options.id,a),e.animated=!0):e.animated&&!n.once&&r())})},Z=function(e){for(var t=0,i=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),i+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:i,left:t}},Q=function(e,t,i){var n=e.getAttribute("data-aos-"+t);if(void 0!==n){if("true"===n)return!0;if("false"===n)return!1}return n||i},K=function(){var e=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(e,function(e){return{node:e}})},X=[],ee=!1,et={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},ei=function(){return document.all&&!window.atob},en=function(){var e,t;arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(ee=!0),ee&&(e=X,t=et,e.forEach(function(e,i){var n,o,a,r,s,c=Q(e.node,"mirror",t.mirror),l=Q(e.node,"once",t.once),d=Q(e.node,"id"),u=t.useClassNames&&e.node.getAttribute("data-aos"),m=[t.animatedClassName].concat(u?u.split(" "):[]).filter(function(e){return"string"==typeof e});t.initClassName&&e.node.classList.add(t.initClassName),e.position={in:function(e,t,i){var n=window.innerHeight,o=Q(e,"anchor"),a=Q(e,"anchor-placement"),r=Number(Q(e,"offset",a?0:t)),s=e;o&&document.querySelectorAll(o)&&(s=document.querySelectorAll(o)[0]);var c=Z(s).top-n;switch(a||i){case"top-bottom":break;case"center-bottom":c+=s.offsetHeight/2;break;case"bottom-bottom":c+=s.offsetHeight;break;case"top-center":c+=n/2;break;case"center-center":c+=n/2+s.offsetHeight/2;break;case"bottom-center":c+=n/2+s.offsetHeight;break;case"top-top":c+=n;break;case"bottom-top":c+=n+s.offsetHeight;break;case"center-top":c+=n+s.offsetHeight/2}return c+r}(e.node,t.offset,t.anchorPlacement),out:c&&(n=e.node,o=t.offset,window.innerHeight,a=Q(n,"anchor"),r=Q(n,"offset",o),s=n,a&&document.querySelectorAll(a)&&(s=document.querySelectorAll(a)[0]),Z(s).top+s.offsetHeight-r)},e.options={once:l,mirror:c,animatedClassNames:m,id:d}}),V(X=e),window.addEventListener("scroll",g(function(){V(X,et.once)},et.throttleDelay)))},eo=function(){if(X=K(),er(et.disable)||ei())return ea();en()},ea=function(){X.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),et.initClassName&&e.node.classList.remove(et.initClassName),et.animatedClassName&&e.node.classList.remove(et.animatedClassName)})},er=function(e){return!0===e||"mobile"===e&&Y.mobile()||"phone"===e&&Y.phone()||"tablet"===e&&Y.tablet()||"function"==typeof e&&!0===e()};return{init:function(e){return et=B(et,e),X=K(),et.disableMutationObserver||T.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),et.disableMutationObserver=!0),et.disableMutationObserver||T.ready("[data-aos]",eo),er(et.disable)||ei()?ea():(document.querySelector("body").setAttribute("data-aos-easing",et.easing),document.querySelector("body").setAttribute("data-aos-duration",et.duration),document.querySelector("body").setAttribute("data-aos-delay",et.delay),-1===["DOMContentLoaded","load"].indexOf(et.startEvent)?document.addEventListener(et.startEvent,function(){en(!0)}):window.addEventListener("load",function(){en(!0)}),"DOMContentLoaded"===et.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&en(!0),window.addEventListener("resize",R(en,et.debounceDelay,!0)),window.addEventListener("orientationchange",R(en,et.debounceDelay,!0)),X)},refresh:en,refreshHard:eo}},e.exports=n()}),a("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["28p1h","index.136866e1.js","gpJGQ","cleo.f0332fc2.png","4L4zo","chat.ab907f59.png","fs0kq","gamePad.4d1d1b81.png","3b5Qv","arrowHead.4d605e48.svg","foz2q","back.a59411ca.svg","bG3G5","expand.6f6c0bbf.svg","6EIG4","ellipsis.8d43cc59.svg","iUCZu","main.bbb680ac.js","curgY","index.74d6b53b.css"]')),a("n9UMu");
//# sourceMappingURL=index.136866e1.js.map
