document.addEventListener("DOMContentLoaded", function () {
    const leftBtn = document.getElementById("leftBtn");
    const rightBtn = document.getElementById("rightBtn");
    const info = document.getElementById("info");

    leftBtn.addEventListener("click", function () {
        info.textContent = "Links ist die Seite, auf der dein Herz liegt. Wenn du beide H�nde vor dich h�ltst, zeigt der Daumen deiner linken Hand nach rechts.";
        leftBtn.style.background = "#1976d2";
        rightBtn.style.background = "#ffb74d";
    });

    rightBtn.addEventListener("click", function () {
        info.textContent = "Rechts ist die Seite, auf der du meist schreibst (bei Rechtsh�ndern). Der Daumen deiner rechten Hand zeigt nach links, wenn du die Handfl�che anschaust.";
        rightBtn.style.background = "#1976d2";
        leftBtn.style.background = "#4fc3f7";
    });
});