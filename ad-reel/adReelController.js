import { getAds } from './adReelModel.js';
import { showAd, noAds } from './adReelView.js';

export const adsReelController = async (adsReel) => {
  adsReel.innerHTML = '';
  let ads = [];

  ads = await getAds();

  if (ads.length === 0) {
    adsReel.innerHTML = noAds();
  } else {
    alert("Ads loaded successfully");
    renderAds(ads, adsReel);
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

