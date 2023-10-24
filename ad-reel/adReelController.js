import { getAds } from './adReelModel.js';
import { showAd, noAds } from './adReelView.js';
import { dispatchEvent } from '../utils/dispatchEvent.js';

export const adsReelController = async (adsReel) => {
  adsReel.innerHTML = '';
  let ads = [];

  dispatchEvent('startLoadingAds', null, adsReel);
  try {
    ads = await getAds();
  
    if (ads.length === 0) {
      adsReel.innerHTML = noAds();
    } else {
      alert("Ads loaded successfully");
      renderAds(ads, adsReel);
    }  
  } catch (error) {
    alert(error);

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

