// Controller module to handle user input and update the model and view accordingly

import model from './model.js';
import view from './view.js';

const controller = {
    async search(query) {
        model.currentQuery = query;
        await model.fetchNews(query, 1);
        view.renderArticles(model.articles);
        view.updateResultCount(model.resultCount);
        view.togglePreviousButton(false); 
        view.toggleNextButton(model.currentPage < Math.ceil(model.resultCount / 20)); 
    },

    async previousPage() {
        if (model.currentPage > 1) {
            model.currentPage--;
            await model.fetchNews(model.currentQuery, model.currentPage);
            view.renderArticles(model.articles);
            view.toggleNextButton(true); 
        }
        view.togglePreviousButton(model.currentPage > 1); 
    },

    async nextPage() {
        const totalPages = Math.ceil(model.resultCount / 20);
        if (model.currentPage < totalPages) {
            model.currentPage++;
            await model.fetchNews(model.currentQuery, model.currentPage);
            view.renderArticles(model.articles);
            view.togglePreviousButton(true);
        }
        view.toggleNextButton(model.currentPage < totalPages); 
    }
};

export default controller;
