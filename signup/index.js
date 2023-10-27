import { signupController } from './signupController.js';
import { loaderController } from '../loader/loaderController.js';
import { notificationsController } from '../notifications/notificationsController.js'
import { sessionController } from "../session/sessionController.js";

const loader = document.getElementById('loader');
const { show, hide } = loaderController(loader);

const notifications = document.getElementById('notifications');
const showNotification = notificationsController(notifications);

document.addEventListener('DOMContentLoaded', () => {
  
  const session = document.getElementById('session');
  sessionController(session);
  
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
});

window.addEventListener('offline', () => {
  showNotification('error', 'Conection lost');
});

