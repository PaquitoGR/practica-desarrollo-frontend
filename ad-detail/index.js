import { adDetailController } from './adDetailController.js';
import { loaderController } from '../loader/loaderController.js';
// import { sessionController } from '../session/sessionController.js'

document.addEventListener('DOMContentLoaded', () => {
    
  // const session = document.getElementById('session');
  // sessionController(session);
  const adDetail = document.getElementById('ad-detail');

  const loader = document.getElementById('loader');
  const { show, hide } = loaderController(loader);

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
  // showNotification('Conection lost', 'error');
  alert('Oh no! Conection lost!')
});