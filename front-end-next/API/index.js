import axios from 'axios';

const URL = 'http://localhost:3001'

// products

const getAllProducts = async () => {
  const response = await axios.get(`${URL}/product`);

  return response.data;
};

const getProductById = async (id) => {
  const response = await axios.get(`${URL}/product/${id}`);
  return response.data;
};

// category

const getAllCategory = async () => {
  try {
    const response = await axios.get(`${URL}/category`);
    return response.data;
  } catch (error) {
    return error.message
  }
};

// login

const getToken = async ({email, password}) => {
  try {
    const response = await axios.post(`${URL}/login`, {email, password })
    return response.data;
  } catch (error) {
    return error;
  }
}

const valideteAcess = async (token) => {
  try {
    const response = await axios.get(`${URL}/login`, {
      headers: {
        'Authorization': token
      }
    })
    return response.data;
  } catch (error) {
    return error.message;
  }
}

export { getAllProducts, getAllCategory, getProductById, getToken, valideteAcess };
