import { sparrest } from "../utils/sparrestApi.js";

export const createUser = async (fullName, email, password) => {
  const endpoint = 'auth/register';

  const body = {
    fullName,
    username: email,
    password
  };

  sparrest().signupUser(endpoint, body);
}