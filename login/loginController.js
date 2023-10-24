import { loginUser } from "./loginModel.js";
import { dispatchEvent, createCustomEvent } from '../utils/events.js';



export const loginController = async (loginForm) => {

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    submitLogin(loginForm);
  });

}

const submitLogin = async (loginForm) => {

  dispatchEvent('startLoginUser', null, loginForm);
  const formData = new FormData(loginForm);
  
  try {
    const jwt = await loginUser(formData.get('email'), formData.get('password'));
    localStorage.setItem('token', jwt);
    alert("User login Successful");

    window.location = './index.html';
    
  } catch (error) {
    alert(error);
    
  } finally {
    dispatchEvent('finishLoginUser', null, loginForm);
  }
}