import { getAd, deleteAd } from './adDetailModel.js';
import { showAd } from './adDetailView.js';
import { dispatchEvent, createCustomEvent } from '../utils/events.js';



export const adDetailController = async (adDetail, adId) => {

  dispatchEvent('startLoadingAd', null, adDetail);

  try {
    const ad = await getAd(adId);
    adDetail.innerHTML = showAd(ad);
    deleteButton(ad, adDetail);
    
  } catch (error) {
    const event = createCustomEvent('adLoaded', 'error', 'Error while loading ad');
    adDetail.dispatchEvent(event);
    throw error;
  
  } finally {
    dispatchEvent('finishLoadingAd', null, adDetail);

  }  
}

const deleteButton = (ad, adDetail) => {
  const token = localStorage.getItem('token');
  if (token) {
    const stringifiedToken = atob(token.split(".")[1]);
    const user = JSON.parse(stringifiedToken);
    
    if (user.userId === ad.userId) {
      showDeleteButton(ad, adDetail);
    }
  }
}

const showDeleteButton = (ad, adDetail) => {
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete ad';
  deleteButton.addEventListener('click', async() => {

    dispatchEvent('startLoadingAd', null, adDetail);
    
    if (confirm('Are you sure you want to delete this ad?')) {      
      await deleteAd(ad.id);      
      const event = createCustomEvent('adDeleted', 'success', 'Ad successfully deleted.');
      adDetail.dispatchEvent(event);  
      window.location = '/';   
    }
    dispatchEvent('finishLoadingAd', null, adDetail);
  })

  adDetail.appendChild(deleteButton);
}
