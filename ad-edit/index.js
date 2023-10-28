import { adEditController } from './adEditController.js';
import { loaderController } from '../loader/loaderController.js';
import { notificationsController } from '../notifications/notificationsController.js';
import { sessionController } from '../session/sessionController.js'


const loader = document.getElementById('loader');
const { show, hide } = loaderController(loader);

const notifications = document.getElementById('notifications');
const showNotification = notificationsController(notifications);

document.addEventListener('DOMContentLoaded', () => {
    
  const session = document.getElementById('session');
  sessionController(session);
  
  const adEditForm = document.getElementById('ad-edit-form');

  const params = new URLSearchParams(window.location.search);
  const adId = params.get('id');

  adEditController(adEditForm, adId);

  adEditForm.addEventListener('adEdited', (event) => {
    showNotification(event.detail.type, event.detail.message);
  });

  adEditForm.addEventListener('startSavingAd', () => {
    show();
  });
  adEditForm.addEventListener('finishSavingAd', () => {
    hide();
  });


});

window.addEventListener('offline', () => {
  showNotification('error', 'Conection lost');
});