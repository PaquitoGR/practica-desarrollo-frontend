import { adDetailController } from './adDetailController.js';
import { loaderController } from '../loader/loaderController.js';
import { notificationsController } from '../notifications/notificationsController.js';

const loader = document.getElementById('loader');
const { show, hide } = loaderController(loader);

const notifications = document.getElementById('notifications');
const showNotification = notificationsController(notifications);

document.addEventListener('DOMContentLoaded', () => {
    
  // const session = document.getElementById('session');
  // sessionController(session);
  const adDetail = document.getElementById('ad-detail');

  adDetail.addEventListener('adLoaded', (event) => {
    showNotification(event.detail.type, event.detail.message);
  });
  adDetail.addEventListener('adDeleted', (event) => {
    showNotification(event.detail.type, event.detail.message);
  });

  adDetail.addEventListener('startLoadingAd', () => {
    show();
  });
  adDetail.addEventListener('finishLoadingAd', () => {
    hide();
  });

  const params = new URLSearchParams(window.location.search);
  const adId = params.get('id');

  adDetailController(adDetail, adId);
});

window.addEventListener('offline', () => {
  showNotification('error', 'Conection lost');
});