projectCards = document.querySelectorAll("div.project.card");
projectCards.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle("selected");
    });
});