import { sparrest } from "../utils/sparrestApi.js";

export const createAd = async (name, description, price, adType) => {
  
  const endpoint = 'api/ads';

  const ad = {
    name: name,
    description: description,
    price: price,
    adType: adType
  }

  await sparrest().postAd(endpoint, ad);
}