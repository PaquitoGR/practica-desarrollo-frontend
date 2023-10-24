import { getAds } from './adReelModel.js';
import { showAd, noAds } from './adReelView.js';
import { dispatchEvent, createCustomEvent } from '../utils/events.js';

export const adsReelController = async (adsReel) => {
  adsReel.innerHTML = '';
  let ads = [];

  dispatchEvent('startLoadingAds', null, adsReel);
  
  try {
    ads = await getAds();
  
    if (ads.length === 0) {
      adsReel.innerHTML = noAds();
    } else {
      renderAds(ads, adsReel);
      
      const event = createCustomEvent('adsLoaded', 'success', 'Ads loaded successfully');
      adsReel.dispatchEvent(event);
    }  
  } catch (error) {
    const event = createCustomEvent('adsLoaded', 'error', error);
    adsReel.dispatchEvent(event);

  } finally {
    dispatchEvent('finishLoadingAds', null, adsReel);
  }
}

const renderAds = (ads, adsReel) => {
  ads.forEach(ad => {
    const adDiv = document.createElement('div');
    adDiv.classList.add('ad');
    adDiv.innerHTML = showAd(ad);
    adsReel.appendChild(adDiv);
  });
}

