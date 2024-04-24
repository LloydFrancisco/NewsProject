import controller from './controller.js';

document.getElementById("search").addEventListener("click", async (e) => {
    e.preventDefault();
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

// Initial fetch on page load
controller.search('');
