import { adDetailController } from './adDetailController.js';
// import { sessionController } from '../session/sessionController.js'

document.addEventListener('DOMContentLoaded', () => {

  
  // const session = document.getElementById('session');
  // sessionController(session);
  
  const params = new URLSearchParams(window.location.search);
  const adId = params.get('id');

  const adDetail = document.getElementById('ad-detail');
  adDetailController(adDetail, adId);

});

window.addEventListener('offline', () => {
  // showNotification('Conection lost', 'error');
  alert('Oh no! Conection lost!')
});