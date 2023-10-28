import { sparrest } from '../utils/sparrestApi.js';


export const updateAd = async (adId, name, description, price, adType) => {

  const endpoint = `api/ads/${adId}`;
  const ad = {
    name: name,
    description: description,
    price: price,
    adType: adType
  }  
  
  await sparrest().updateAd(endpoint, ad);
}