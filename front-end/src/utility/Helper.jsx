import axios from 'axios';

export const APIData = async (endPoint) => {
  try {
    const response = await axios.get(`http://localhost:5050/api/v1/${endPoint}`);
    return response.data.response;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('token'); 
};


export const token = localStorage.getItem('token');
