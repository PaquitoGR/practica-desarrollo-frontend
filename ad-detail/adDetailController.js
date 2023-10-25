import { getAd } from './adDetailModel.js';
import { showAd } from './adDetailView.js';
import { dispatchEvent, createCustomEvent } from '../utils/events.js';



export const adDetailController = async (adDetail, adId) => {

  dispatchEvent('startLoadingAd', null, adDetail);

  try {
    const ad = await getAd(adId);
    adDetail.innerHTML = showAd(ad);
    const event = createCustomEvent('adLoaded', 'success', 'Ad loaded successfully');
    adDetail.dispatchEvent(event);
    
  } catch (error) {
    const event = createCustomEvent('adLoaded', 'error', 'Error while loading ad');
    adDetail.dispatchEvent(event);
    throw error;
  
  } finally {
    dispatchEvent('finishLoadingAd', null, adDetail);

  }  
}