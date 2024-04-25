import controller from './controller.js';

document.getElementById("search").addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const query = document.getElementById("searchInput").value;
    await controller.search(query);
});



document.getElementById("previous").addEventListener("click", async (e) => {
    e.preventDefault();
    await controller.previousPage();
});

document.getElementById("next").addEventListener("click", async (e) => {
    e.preventDefault();
    await controller.nextPage();
});

controller.search('');
