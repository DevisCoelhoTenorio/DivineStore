import axios from 'axios';
import { formatterForListProducts, formatterProductShow } from '../Services/formatters';
// import { parseCookies } from 'nookies';

// const { 'divine.token': token } = parseCookies();

const BASE_URL = 'http://localhost:3001';

// export const api = axios.create({
//   baseURL: 'http://localhost:3001'
// })

// if(token) {
//   api.defaults.headers['Authorization'] = token;
// }

// products

const getAllProducts = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/product`);
    const formattedProducts = formatterForListProducts(data);
    return formattedProducts;
  } catch (error) {
    return null;
  }
};

const getProductById = async (id) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/product/${id}`);
    const formattedProduct = formatterProductShow(data);
    return formattedProduct;
  } catch (error) {
    return null;
  }
};

const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/product/${id}`);
    return response.data;
  } catch (error) {
    return null;
  }
};

const createNewProduct = async (newProduct) => {
  try {
    const response = await axios.post(`${BASE_URL}/product`, newProduct);
    return response.data;
  } catch (error) {
    return null;
  }
};

const updateProduct = async (id, product) => {
  try {
    const response = await axios.put(`${BASE_URL}/product/${id}`, product);
    return response.status;
  } catch (error) {
    return null;
  }
};
// clients

const getAllClients = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/client`);
    return response.data;
  } catch (error) {
    return null;
  }
};

// category

const getAllCategory = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/category`);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// login

const getToken = async ({ email, password }) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    return error;
  }
};

const valideteAcess = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/login`, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// Banner

const getAllBanners = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/banner`);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// Size

const getAllSizes = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/size`);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export {
  getAllProducts,
  getAllCategory,
  getProductById,
  getToken,
  valideteAcess,
  getAllBanners,
  createNewProduct,
  getAllSizes,
  deleteProduct,
  updateProduct,
  getAllClients,
};
