// Controller module to handle user input and update the model and view accordingly

import model from './model.js';
import view from './view.js';

const controller = {
    async search(query) {
        model.currentQuery = query;
        await model.fetchNews(query, 1);
        view.renderArticles(model.articles);
        view.updateResultCount(model.resultCount);
        view.togglePreviousButton(false); // Disable previous button on first page
        view.toggleNextButton(model.currentPage < Math.ceil(model.resultCount / 20)); // Enable next button if there are more pages
    },

    async previousPage() {
        if (model.currentPage > 1) {
            model.currentPage--;
            await model.fetchNews(model.currentQuery, model.currentPage);
            view.renderArticles(model.articles);
            view.toggleNextButton(true); // Enable next button when navigating back
        }
        view.togglePreviousButton(model.currentPage > 1); // Disable previous button on first page
    },

    async nextPage() {
        const totalPages = Math.ceil(model.resultCount / 20);
        if (model.currentPage < totalPages) {
            model.currentPage++;
            await model.fetchNews(model.currentQuery, model.currentPage);
            view.renderArticles(model.articles);
            view.togglePreviousButton(true); // Enable previous button when navigating forward
        }
        view.toggleNextButton(model.currentPage < totalPages); // Disable next button on last page
    }
};

export default controller;
