// Model module to handle data-related tasks

const model = {
    currentQuery: "",
    currentPage: 1,
    resultCount: 0,
    articles: [],

    async fetchNews(query, page) {
        try {
            const url = `https://newsapi.org/v2/top-headlines?country=us&q=${query}&from=2024-04-24&pageSize=20&page=${page}&sortBy=popularity&apiKey= 507bf870e8cf4463aa1628e7926758d1`;
            // 83ed4c33713144889c2d63f4ee417f59
            // 507bf870e8cf4463aa1628e7926758d1
            const response = await fetch(url);
            const data = await response.json();
            this.resultCount = data.totalResults;
            this.articles = data.articles;
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    }
};

export default model;
