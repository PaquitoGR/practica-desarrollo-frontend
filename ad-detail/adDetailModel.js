
const parseAd = (ad) => {
  return {
    seller: ad.user.fullName,
    name: ad.name,
    description: ad.description,
    price: ad.price,
    adType: ad.adType,
    id: ad.id
  };
}

export const getAd = async (adId) => {
  const url = `http://localhost:8000/api/ads/${adId}?_expand=user`;

  const response = await fetch(url);
  const ad = await response.json();
  
  return parseAd(ad);
}
