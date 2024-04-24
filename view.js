// View module to handle UI-related tasks

// const view = {
//     renderArticles(articles) {
//         const contentDiv = document.querySelector(".content");
//         let html = "";
//         articles.forEach(article => {
//             html += `<div class="card my-4 mx-2" style="width: 18rem;">
//                 <img src="${article.urlToImage}" class="card-img-top" alt="...">
//                 <div class="card-body">
//                     <h5 class="card-title">${article.title}</h5>
//                     <p class="card-text">${article.description}</p>
//                     <a href="${article.url}" target="_blank" class="btn btn-primary">Read Article</a>
//                 </div>
//             </div>`;
//         });
//         contentDiv.innerHTML = html;
//     },

const view = {
    renderArticles(articles) {
        const contentDiv = document.querySelector(".content");
        let html = "";
        articles.forEach(article => {
            html += `
                <div class="card my-4 mx-2" style="width: 18rem;">
                    ${article.urlToImage ? `<img src="${article.urlToImage}" class="card-img-top" alt="...">` : ''}
                    <div class="card-body">
                        ${article.title ? `<h5 class="card-title">${article.title}</h5>` : ''}
                        ${article.description ? `<p class="card-text">${article.description}</p>` : ''}
                        ${article.url ? `<a href="${article.url}" target="_blank" class="btn btn-primary">Read Article</a>` : ''}
                    </div>
                </div>
            `;
        });
        contentDiv.innerHTML = html;
    },

updateResultCount(count) {
    document.getElementById("resultCount").textContent = count;
},

togglePreviousButton(enabled) {
    document.getElementById("previous").disabled = !enabled;
},

toggleNextButton(enabled) {
    document.getElementById("next").disabled = !enabled;
}
};

export default view;
