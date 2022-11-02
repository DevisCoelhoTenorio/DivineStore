import axios from 'axios';

// products

const getAllProducts = async () => {
  const response = await axios.get('http://localhost:3001/product');

  return response.data;
};

const getProductById = async (id) => {
  const response = await axios.get(`http://localhost:3001/product/${id}`);
  return response.data;
};

// category

const getAllCategory = async () => {
  const response = await axios.get('http://localhost:3001/category');
  return response.data;
};

export { getAllProducts, getAllCategory, getProductById };
