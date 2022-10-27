import axios from 'axios';

export const simplePost = async(url, object) => {
  try {
    const response = await axios.post(url, object);
    console.log("POST DESE EL SERVICE: ", response)
    return {
      response: response,
      errors:""
    }
  } catch (error) {
    return {
      response: {},
      errors: error
    }
  }
}