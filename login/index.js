import { loginController } from "./loginController.js";
import { loaderController } from "../loader/loaderController.js";
import { notificationsController } from "../notifications/notificationsController.js";
import { sessionController } from "../session/sessionController.js";

const loader = document.getElementById('loader');
const { show, hide } = loaderController(loader);

const notifications = document.getElementById('notifications');
const showNotification = notificationsController(notifications);

document.addEventListener('DOMContentLoaded', () => {

  const session = document.getElementById('session');
  sessionController(session);

  const loginForm = document.querySelector('#login-form');

  loginForm.addEventListener('userLogin', (event) => {
    showNotification(event.detail.type, event.detail.message);
  });

  loginForm.addEventListener('startLoginUser', () => {
    show();
  });
  loginForm.addEventListener('finishLoginUser', () => {
    hide();
  });

  loginController(loginForm);
});

window.addEventListener('offline', () => {
  showNotification('error', 'Conection lost');
});