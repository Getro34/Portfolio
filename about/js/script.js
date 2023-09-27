document.addEventListener("DOMContentLoaded", function() {
    var skillItems = document.querySelectorAll(".skill_item");

    skillItems.forEach(function(skill) {
        var percentage = parseInt(skill.querySelector(".counter").innerText, 10);
        var progressBar = skill.querySelector(".progress1-bar");
        progressBar.style.width = percentage + "%";
    });
});
