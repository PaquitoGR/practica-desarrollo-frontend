  
export const showAd = (ad) => {
  const image = ad.imageUrl || '/images/no-image.jpg';

  return `
    <div class="ad-card">
      <div class="card-image">
        <img src="${image}">
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


