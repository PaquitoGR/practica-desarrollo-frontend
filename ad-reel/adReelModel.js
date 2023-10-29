
const parseAds = (ads) => {
  const parsedAds = ads.map(ad => ({
    seller: ad.user.fullName,
    name: ad.name,
    description: ad.description,
    price: ad.price,
    adType: ad.adType,
    imageUrl: ad.imageUrl,
    id: ad.id
  }));

  return parsedAds;
}

export const getAds = async () => {
  const url = "http://localhost:8000/api/ads?_expand=user";
  let parsedAds = [];

  const response = await fetch(url);
  const ads = await response.json();
  parsedAds = parseAds(ads);

  return parsedAds;

}
