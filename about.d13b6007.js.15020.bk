document.addEventListener("DOMContentLoaded", ()=>{
    const londonMap = document.getElementById("london-map");
    const lagosMap = document.getElementById("lagos-map");
    const londonTab = document.getElementById("london-tab");
    const lagosTab = document.getElementById("lagos-tab");
    // Initial state
    londonMap.classList.add("active");
    lagosMap.classList.remove("active");
    londonTab.classList.add("active");
    lagosTab.classList.remove("active");
    // Tab switching
    londonTab.addEventListener("click", ()=>{
        londonMap.classList.add("active");
        lagosMap.classList.remove("active");
        londonTab.classList.add("active");
        lagosTab.classList.remove("active");
    });
    lagosTab.addEventListener("click", ()=>{
        londonMap.classList.remove("active");
        lagosMap.classList.add("active");
        lagosTab.classList.add("active");
        londonTab.classList.remove("active");
    });
});
window.addEventListener('scroll', ()=>{
    const cards = document.querySelectorAll('.card');
    const scrollPosition = window.scrollY; // Scroll position
    cards.forEach((card, index)=>{
        const cardPosition = (index + 1) * 100; // Adjust based on the card index
        // Adjust animation based on scroll position
        if (scrollPosition > cardPosition) switch(index){
            case 0:
                card.style.transform = 'rotate(-12deg) translateX(-40vw)';
                break;
            case 1:
                card.style.transform = 'rotate(-9deg) translateX(-20vw)';
                break;
            case 2:
                card.style.transform = 'rotate(0deg) translateX(0) translateY(0)';
                break;
            case 3:
                card.style.transform = 'rotate(9deg) translateX(20vw)';
                break;
            case 4:
                card.style.transform = 'rotate(12deg) translateX(40vw)';
                break;
            default:
                break;
        }
        else card.style.transform = 'none';
    });
});

//# sourceMappingURL=about.d13b6007.js.map
