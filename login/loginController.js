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

    const event = createCustomEvent('userLogin', 'success', 'You are now logged in.')
    loginForm.dispatchEvent(event);

    setTimeout(() => {
      window.location = './index.html';
    }, 3000);
    
  } catch (error) {
    const event = createCustomEvent('userLogin', 'error', error);
    loginForm.dispatchEvent(event); 
    
  } finally {
    dispatchEvent('finishLoginUser', null, loginForm);
  }
}