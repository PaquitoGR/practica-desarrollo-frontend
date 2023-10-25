import { sessionController } from "./session/sessionController.js";
import { adsReelController } from "./ad-reel/adReelController.js";
import { loaderController } from "./loader/loaderController.js";
import { notificationsController } from "./notifications/notificationsController.js";

const loader = document.getElementById('loader');
const { show, hide } = loaderController(loader);

const notifications = document.getElementById('notifications');
const showNotification = notificationsController(notifications);

document.addEventListener('DOMContentLoaded', () => {
  
  const session = document.getElementById('session');
  sessionController(session);

  const adsReel = document.getElementById('ads-reel');

  adsReel.addEventListener('adsLoaded', (event) => {
    showNotification(event.detail.type, event.detail.message);
  });

  adsReel.addEventListener('startLoadingAds', () => {
    show();
  });
  adsReel.addEventListener('finishLoadingAds', () => {
    hide();
  });
  
  adsReelController(adsReel);
});

window.addEventListener('offline', () => {
  showNotification('error', 'Conection lost');
});