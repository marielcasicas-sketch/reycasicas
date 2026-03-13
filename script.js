document.addEventListener("DOMContentLoaded", function(){


const typingElement = document.getElementById("typing");
const text = [
    "Rey Gamariel I. Casicas"  
];

let i = 0;
let j = 0;
let currentText = "";

function typeEffect(){
    if(!typingElement) return;
    if(j < text[i].length){
        currentText += text[i][j];
        typingElement.textContent = currentText;
        j++;
        setTimeout(typeEffect,100);
    }
    else{
        setTimeout(()=>{
            currentText="";
            j=0;
            i=(i+1)%text.length;
            typeEffect();
        },1500);
    }
}
typeEffect();

document.addEventListener("click", function(e){
    const star = document.createElement("div");
    star.className = "spark";
    star.style.left = e.pageX + "px";
    star.style.top = e.pageY + "px";
    document.body.appendChild(star);
    setTimeout(()=>{
        star.remove();
    },600);
});

    const images = document.querySelectorAll(".project-card img");

    images.forEach(img => {
        img.addEventListener("click", () => {

            const overlay = document.createElement("div");
            overlay.classList.add("zoom-overlay");

            const zoomedImg = document.createElement("img");
            zoomedImg.src = img.src;

            overlay.appendChild(zoomedImg);
            document.body.appendChild(overlay);

            overlay.addEventListener("click", () => {
                document.body.removeChild(overlay);
            });
        });
    });

    const cursorGlow = document.createElement("div");
    cursorGlow.classList.add("cursor-glow");
    document.body.appendChild(cursorGlow);

    document.addEventListener("mousemove", (e) => {
        cursorGlow.style.left = e.clientX + "px";
        cursorGlow.style.top = e.clientY + "px";
    });


    const stickers = document.querySelectorAll(".sticker");

    stickers.forEach(sticker => {
        sticker.addEventListener("mouseover", () => {
            sticker.style.transform = "scale(1.2) rotate(-10deg)";
        });

        sticker.addEventListener("mouseout", () => {
            sticker.style.transform = "scale(1) rotate(0deg)";
        });
    });

    const nav = document.querySelector("nav");

    window.addEventListener("scroll", () => {
        if(window.scrollY > 50){
            nav.style.background = "rgba(255,255,255,0.85)";
            nav.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
        } else {
            nav.style.background = "rgba(255,255,255,0.6)";
            nav.style.boxShadow = "none";
        }
    });


    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.clientHeight;

            if(pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight){
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if(link.getAttribute("href") === "#" + current){
                link.classList.add("active");
            }
        });
    });

    const revealElements = document.querySelectorAll(".section");

    function revealOnScroll(){
        revealElements.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;

            if(elementTop < windowHeight - 100){
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    }

    revealElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = "all 0.8s ease";
    });

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

});