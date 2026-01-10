// Dark Light Mode
const toggle = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        toggle.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        toggle.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});

// Typing Effect
const text = " Bachelor Student of Computer Science | Web Developer";
let i = 0;
const typing = document.getElementById("typing");

function typeEffect() {
    if (i < text.length) {
        typing.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 80);
    }
}
typeEffect();

// Scroll Animation
window.addEventListener("scroll", () => {
    document.querySelectorAll(".project-card").forEach(card => {
        const pos = card.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});
