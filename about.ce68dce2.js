document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("london-map"),t=document.getElementById("lagos-map"),a=document.getElementById("london-tab"),s=document.getElementById("lagos-tab");e.classList.add("active"),t.classList.remove("active"),a.classList.add("active"),s.classList.remove("active"),a.addEventListener("click",()=>{e.classList.add("active"),t.classList.remove("active"),a.classList.add("active"),s.classList.remove("active")}),s.addEventListener("click",()=>{e.classList.remove("active"),t.classList.add("active"),s.classList.add("active"),a.classList.remove("active")})}),window.addEventListener("scroll",()=>{let e=document.querySelectorAll(".card"),t=window.scrollY;e.forEach((e,a)=>{if(t>(a+1)*100)switch(a){case 0:e.style.transform="rotate(-12deg) translateX(-40vw)";break;case 1:e.style.transform="rotate(-9deg) translateX(-20vw)";break;case 2:e.style.transform="rotate(0deg) translateX(0) translateY(0)";break;case 3:e.style.transform="rotate(9deg) translateX(20vw)";break;case 4:e.style.transform="rotate(12deg) translateX(40vw)"}else e.style.transform="none"})});
//# sourceMappingURL=about.ce68dce2.js.map
