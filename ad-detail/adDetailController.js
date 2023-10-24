import { getAd } from './adDetailModel.js';
import { showAd } from './adDetailView.js';
import { dispatchEvent } from '../utils/dispatchEvent.js'

export const adDetailController = async (adDetail, adId) => {

  dispatchEvent('startLoadingAd', null, adDetail);

  try {
    const ad = await getAd(adId);
    adDetail.innerHTML = showAd(ad);
    alert('Ad loaded successfully!');
    
  } catch (error) {
    alert(error);
    throw error;
  
  } finally {
    dispatchEvent('finishLoadingAd', null, adDetail);

  }  
}