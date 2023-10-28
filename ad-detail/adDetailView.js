  
export const showAd = (ad) => {
  return `
    <div class="ad-card">
      <div class="card-image">
        <img src="./images/no-image.jpg">
      </div>
      <div class="card-data">
        <p>Item: ${ad.name}</p>
        <p>Desc: ${ad.description}</p>
        <p>Price: ${ad.price}€</p>
        <p>${ad.adType}</p>
        <p>User: ${ad.seller}</p>
      </div>
    </div>
  `;
}


