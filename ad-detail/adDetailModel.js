import { sparrest } from '../utils/sparrestApi.js';

const parseAd = (ad) => {
  return {
    seller: ad.user.fullName,
    userId: ad.user.id,
    name: ad.name,
    description: ad.description,
    price: ad.price,
    adType: ad.adType,
    imageUrl: ad.imageUrl,
    id: ad.id
  };
}

export const getAd = async (adId) => {
  const endpoint = `api/ads/${adId}?_expand=user`;  
  const ad = await sparrest().get(endpoint);

  return parseAd(ad);
}

export const deleteAd = async (adId) => {
  const endpoint = `api/ads/${adId}`;  
  await sparrest().removeAd(endpoint);
}