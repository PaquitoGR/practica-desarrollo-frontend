import { getAd } from './adDetailModel.js';
import { showAd } from './adDetailView.js';


export const adDetailController = async (adDetail, adId) => {

  try {
    const ad = await getAd(adId);
    adDetail.innerHTML = showAd(ad);
    alert('Ad loaded successfully!');
    
  } catch (error) {
    alert(error);
    throw error;
  }
  
}