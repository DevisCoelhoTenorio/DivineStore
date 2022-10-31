import axios from 'axios';
import { IFullProduct, ICategory } from '../interfaces';

// products

const getAllProducts = async (): Promise<IFullProduct[]> => {
  const response = await axios.get('http://localhost:3001/product');

  return response.data as IFullProduct[];
};

const getProductById = async (id: number): Promise<IFullProduct> => {
  const response = await axios.get(`http://localhost:3001/product/${id}`);
  return response.data as IFullProduct;
};

// category

const getAllCategory = async (): Promise<ICategory[]> => {
  const response = await axios.get('http://localhost:3001/category');

  return response.data as ICategory[];
};

export { getAllProducts, getAllCategory, getProductById };
