import { signupController } from './signupController.js';
import { loaderController } from '../loader/loaderController.js';

const loader = document.getElementById('loader');
const { show, hide } = loaderController(loader);

const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('startSignupUser', () => {
  show();
});
signupForm.addEventListener('finishSignupUser', () => {
  hide();
});

signupController(signupForm);