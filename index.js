import { sessionController } from "./session/sessionController.js";
import { adsReelController } from "./ad-reel/adReelController.js";
import { loaderController } from "./loader/loaderController.js";

const loader = document.getElementById('loader');
const { show, hide } = loaderController(loader);

document.addEventListener('DOMContentLoaded', () => {
  
  const session = document.getElementById('session');
  sessionController(session);

  const adsReel = document.getElementById('ads-reel');

  adsReel.addEventListener('startLoadingAds', () => {
    show();
  });
  adsReel.addEventListener('finishLoadingAds', () => {
    hide();
  });
  
  adsReelController(adsReel);

});

window.addEventListener('offline', () => {
  // showNotification('Conection lost', 'error');
  alert('Oh no! Conection lost!')
});