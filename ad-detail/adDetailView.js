  
export const showAd = (ad) => {
  const image = ad.imageUrl || '/images/no-image.jpg';

  return `
    <div class="ad-card">
      <div class="card-image">
        <img src="${image}" onerror="this.src='/images/no-image.jpg';">
      </div>
      <div class="card-data">
        <p>${ad.name}</p>
        <p>${ad.description}</p>
        <p>Price: ${ad.price}€</p>
        <p>${ad.adType}</p>
        <p>User: ${ad.seller}</p>
      </div>
      <div class="card-buttons" id="card-buttons">
      </div>
    </div>
  `;
}


