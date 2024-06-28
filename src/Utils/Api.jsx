import axios from "axios";

// ایجاد توابع برای ارتباط با API
const apiBaseUrl = 'http://localhost:8000/api/v1';

const getToken = () => {
  // دریافت توکن از localStorage یا سرویس مشخص دیگر
  return localStorage.getItem('token');
};

const handleResponse = async (response) => {
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage || 'خطایی در ارتباط با سرور رخ داد.');
  }
  return response.json();
};

const getHeaders = () => {
  const token = getToken();
  return {
    'Content-Type': 'application/json',
    'Authorization': token ? `Bearer ${token}` : '',
  };
};

export const apiGet = async (url) => {
  const response = await fetch(`${apiBaseUrl}/${url}`, {
    method: 'GET',
    headers: getHeaders(),
  });
  return handleResponse(response);
};




// توابع مربوط به بخش کاربران
export const createUser = async (url, data) => {
  return axios.post(`${apiBaseUrl}/${url}`, data).then((response)=>{
    return response.data
  });
};

export const login = async (url, token) => {
  try {
    const response = await axios.get(`${apiBaseUrl}/${url}`, {
      headers: {
        Authorization: token
      }
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 429) {
      throw new Error('Too many requests. Please try again later.');
    } else {
      throw new Error('An error occurred while fetching user data.');
    }
  }
};

export const getUser = async (url, token) => {
  try {
    const response = await axios.get(`${apiBaseUrl}/${url}`, {
      headers: {
        Authorization: token
      }
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 429) {
      throw new Error('Too many requests. Please try again later.');
    } else {
      throw new Error('An error occurred while fetching user data.');
    }
  }
};

export const sendeVerifyEmail = async (url, token) => {
  try {
    const response = await axios.get(`${apiBaseUrl}/${url}`, {
      headers: {
        Authorization: token
      }
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 429) {
      throw new Error('Too many requests. Please try again later.');
    } else {
      throw new Error(error);
    }
  }
};

  
