const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const skillsInput = document.getElementById("skills");
const educationInput = document.getElementById("education");
const experienceInput = document.getElementById("experience");

nameInput.addEventListener("input", () => {
    document.getElementById("previewName").innerText = nameInput.value;
});

emailInput.addEventListener("input", () => {
    document.getElementById("previewEmail").innerText = emailInput.value;
});

skillsInput.addEventListener("input", () => {
    document.getElementById("previewSkills").innerText = skillsInput.value;
});

educationInput.addEventListener("input", () => {
    document.getElementById("previewEducation").innerText = educationInput.value;
});

experienceInput.addEventListener("input", () => {
    document.getElementById("previewExperience").innerText = experienceInput.value;
});
const improveBtn = document.getElementById("improveBtn");

improveBtn.addEventListener("click", () => {
    const experienceText = experienceInput.value;

    if (!experienceText) {
        alert("Please enter experience first");
        return;
    }

    improveBtn.innerText = "Improving...";

    // Fake AI improvement
    const sentences = experienceText.split(".").filter(s => s.trim() !== "");
    const aiText = sentences.map(s => `• ${s.trim()}`).join("\n");

    experienceInput.value = aiText;
    document.getElementById("previewExperience").innerText = aiText;

    improveBtn.innerText = "Improve with AI";
});
