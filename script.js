document.addEventListener("DOMContentLoaded", function () {
    const leftBtn = document.getElementById("leftBtn");
    const rightBtn = document.getElementById("rightBtn");
    const info = document.getElementById("info");

    leftBtn.addEventListener("click", function () {
        info.textContent = "<-- Links ist dort";
        leftBtn.style.background = "#1976d2";
        rightBtn.style.background = "#ffb74d";
    });

    rightBtn.addEventListener("click", function () {
        info.textContent = "Rechts ist dort -->";
        rightBtn.style.background = "#1976d2";
        leftBtn.style.background = "#4fc3f7";
    });
});