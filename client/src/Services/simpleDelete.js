import axios from "axios"


export const simpleDelete = async (url) => {
  try {
    const response = await axios.delete(url);
    console.log("delete from service" + response.data)
    return{
      response:response.data,
      errors:""
    }
  } catch (error) {
    console.log(error);
    return{
      response:{},
      errors: error
    }
  }
}