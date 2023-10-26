import { sparrest } from "../utils/sparrestApi.js";

export const loginUser = async (email, password) => {
  const endpoint = 'auth/login';
  
  const body = {
    username: email,
    password: password
  }  

  return sparrest().loginUser(endpoint, body);
}