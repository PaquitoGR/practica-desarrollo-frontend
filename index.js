import { sessionController } from "./session/sessionController.js";
import { adsReelController } from "./ad-reel/adReelController.js";

document.addEventListener('DOMContentLoaded', () => {
  
  const session = document.getElementById('session');
  sessionController(session);

  const adsReel = document.getElementById('adsReel');
  adsReelController(adsReel);

});

window.addEventListener('offline', () => {
  // showNotification('Conection lost', 'error');
  alert('Oh no! Conection lost!')
});