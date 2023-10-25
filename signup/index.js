import { signupController } from './signupController.js';
import { loaderController } from '../loader/loaderController.js';
import { notificationsController } from '../notifications/notificationsController.js'

const loader = document.getElementById('loader');
const { show, hide } = loaderController(loader);

const notifications = document.getElementById('notifications');
const showNotification = notificationsController(notifications);

const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('userSignup', (event) => {
  showNotification(event.detail.type, event.detail.message);
});

signupForm.addEventListener('startSignupUser', () => {
  show();
});
signupForm.addEventListener('finishSignupUser', () => {
  hide();
});

signupController(signupForm);