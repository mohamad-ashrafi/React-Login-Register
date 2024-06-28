// productService.js

import { apiGet, apiPost } from './api';

export const getProducts = async () => {
  return apiGet('products');
};

export const createProduct = async (productData) => {
  return apiPost('products', productData);
};

export const getProductById = async (productId) => {
  return apiGet(`products/${productId}`);
};
