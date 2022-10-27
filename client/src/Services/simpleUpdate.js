import axios from "axios"

export const simpleUpdate = async (url, object) => {
  try {
    const response = await axios.put(url, object);
    console.log("updated user data", response.data);
    return {
      response: response.data,
      errors:""
    }
  } catch (error) {
    return {
      response: {},
      errors: error
    }
  }
}