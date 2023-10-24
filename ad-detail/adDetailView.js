  
export const showAd = (ad) => {
  return `
      <img src="./images/no-image.jpg">
      <p>Item: ${ad.name}</p>
      <p>Desc: ${ad.description}</p>
      <p>Price: ${ad.price}</p>
      <p>Ad type: ${ad.adType}</p>
      <p>User: ${ad.seller}</p>
    </a>
  `;
}
