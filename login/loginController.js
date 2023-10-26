import { loginUser } from "./loginModel.js";
import { dispatchEvent, createCustomEvent } from '../utils/events.js';

export const loginController = async (loginForm) => {

  if (loadUserData().userName) {
    document.getElementById('email').value = loadUserData().userName;
    document.getElementById('password').value = atob(loadUserData().password);
    localStorage.removeItem('savedUserName');
    localStorage.removeItem('savedPassword');
  }

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();    

    submitLogin(loginForm);
  });

}

const submitLogin = async (loginForm) => {

  dispatchEvent('startLoginUser', null, loginForm);

  const formData = new FormData(loginForm);
  const userName = formData.get('email');
  const password = formData.get('password');
  
  try {
    const jwt = await loginUser(userName, password);
    localStorage.setItem('token', jwt);

    const event = createCustomEvent('userLogin', 'success', 'You are now logged in.')
    loginForm.dispatchEvent(event);

    setTimeout(() => {
      window.location = './index.html';
    }, 3000);
    
  } catch (error) {
    const event = createCustomEvent('userLogin', 'error', 'Sorry, login error.');
    loginForm.dispatchEvent(event);
    throw error;
    
  } finally {
    dispatchEvent('finishLoginUser', null, loginForm);
  }
}

const loadUserData = () => {
  const userName = localStorage.getItem('savedUserName');
  const password = localStorage.getItem('savedPassword');

  return { userName, password };
}