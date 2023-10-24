
export const showAd = (ad) => {
  return `
    <a href="./tweetDetail.html?id=${ad.id}">
      <img src="./images/no-image.jpg">
      <p>Seller: ${ad.seller}</p>
      <p>Item: ${ad.name}</p>
      <p>Desc: ${ad.description}</p>
      <p>Price: ${ad.price}</p>
      <p>Ad type: ${ad.adType}</p>
    </a>
  `;
}

export const noAds = () => {
  return '<h2>Sorry, there are no ads to show.</h2>';
}