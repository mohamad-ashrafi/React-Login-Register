import { apiGet, apiPost } from './api';

export const getArticles = async () => {
  return apiGet('articles');
};

export const createArticle = async (articleData) => {
  return apiPost('articles', articleData);
};

export const getArticleById = async (articleId) => {
  return apiGet(`articles/${articleId}`);
};
