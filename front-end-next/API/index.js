import axios from 'axios';
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
  const response = await axios.get(`${BASE_URL}/product`);

  return response.data;
};

const getProductById = async (id) => {
  const response = await axios.get(`${BASE_URL}/product/${id}`);
  return response.data;
};

const createNewProduct = async (newProduct) => {
  try {
    const response = await axios.post(`${BASE_URL}/product`, newProduct);
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
};
