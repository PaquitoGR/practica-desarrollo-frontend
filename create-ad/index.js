import { createAdController } from "./createAdController.js";
import { loaderController } from "../loader/loaderController.js";
import { notificationsController } from "../notifications/notificationsController.js";
import { sessionController } from "../session/sessionController.js"

const notifications = document.getElementById('notifications');
const showNotification = notificationsController(notifications);

const loader = document.getElementById('loader');
const { show, hide } = loaderController(loader);

document.addEventListener('DOMContentLoaded', () => {

  const createAd = document.querySelector('#create-ad-form');

  const session = document.getElementById('session');
  sessionController(session);
  
  createAd.addEventListener('adCreated', (event) => {
    showNotification(event.detail.type, event.detail.message);
  });

  createAd.addEventListener('startCreatingAd', () => {
    show();
  });
  createAd.addEventListener('finishCreatingAd', () => {
    hide();
  });

  createAdController(createAd);
});

window.addEventListener('offline', () => {
  showNotification('error', 'Conection lost');
});