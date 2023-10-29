import { dispatchEvent, createCustomEvent } from '../utils/events.js';
import { sparrest } from '../utils/sparrestApi.js';
import { getAd } from '../ad-detail/adDetailModel.js';
import { showAdForm } from './adEditView.js';
import { updateAd } from './adEditModel.js';

export const adEditController = async (adEditForm, adId) => {

  if (!isCurrentUserOwner(adId)) {
    dispatchEvent('startSavingAd', null, adEditForm);
    const event = createCustomEvent('adEdited', 'error', 'You cannot edit what is not yours.');
    adEditForm.dispatchEvent(event);
    setTimeout(() => {
      dispatchEvent('finishSavingAd', null, adEditForm);
      window.location = '/';
    }, 3000);
  }
  
  const ad = await getAd(adId);
  adEditForm.innerHTML = showAdForm(ad);

  adEditForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    dispatchEvent('startSavingAd', null, adEditForm);

    try {
      const formData = new FormData(adEditForm);
      const name = formData.get('name');
      const description = formData.get('description');
      const price = formData.get('price');
      const adType = formData.get('ad-type');
      const imageUrl = formData.get('imageUrl')

      await updateAd(adId, name, description, price, adType, imageUrl);
      const event = createCustomEvent('adEdited', 'success', 'Ad modified successfully');
      adEditForm.dispatchEvent(event);
      
    } catch (error) {
      const event = createCustomEvent('adEdited', 'error', "Sorry, ad could't be saved.");
      adEditForm.dispatchEvent(event);
      throw error;
    } finally {
      dispatchEvent('finishSavingAd', null, adEditForm);
      setTimeout(() => {
        window.location = `/ad-detail.html?id=${adId}`
      }, 2500);
    }
  });
}

const isCurrentUserOwner = async (adId) => {
  let result = false;
  const token = localStorage.getItem('token');
  if (token) {
    const stringifiedToken = atob(token.split(".")[1]);
    const user = JSON.parse(stringifiedToken);
    const ad = await sparrest().get(`api/ads/${adId}?_expand=user`);
    
    if (user.userId === ad.userId) {     
      result = true;
    }
  }
  return result;
}