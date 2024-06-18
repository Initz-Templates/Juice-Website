import axios from 'axios';

const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';

export const fetchJuices = async (query = '') => {
  try {
    const response = await axios.get(`${API_URL}search.php?s=${query}`);
    return response.data.drinks;
  } catch (error) {
    console.error('Error fetching juices:', error);
    return [];
  }
};

export const fetchJuiceById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}lookup.php?i=${id}`);
    return response.data.drinks[0]; // Assuming API returns an array of drinks, take the first item
  } catch (error) {
    console.error('Error fetching juice by ID:', error);
    throw error; // Propagate the error to handle it in the component
  }
};
