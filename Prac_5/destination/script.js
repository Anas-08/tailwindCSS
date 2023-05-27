
let listButton = document.querySelector("#list");
let listItem = document.querySelector("#menubar");



listButton.addEventListener('click', () => {
    listItem.classList.toggle('hidden');
    listItem.classList.toggle('flex');
});