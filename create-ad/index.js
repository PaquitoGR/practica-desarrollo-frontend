import { createAdController } from "./createAdController.js";
import { loaderController } from "../loader/loaderController.js";
import { notificationsController } from "../notifications/notificationsController.js"

const token = localStorage.getItem('token');
if (!token) {
  window.location = '/';
}

const loader = document.getElementById('loader');
const { show, hide } = loaderController(loader);

const notifications = document.getElementById('notifications');
const showNotification = notificationsController(notifications);

document.addEventListener('DOMContentLoaded', () => {

  const createAd = document.querySelector('#create-ad-form');

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