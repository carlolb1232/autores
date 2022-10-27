import axios from 'axios';

export const simpleGet = async (url) => {
  try {
    const response = await axios.get(url);
    console.log("DATA FROM SERVICE", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}