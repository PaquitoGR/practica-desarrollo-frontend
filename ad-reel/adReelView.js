
export const showAd = (ad) => {
  const image = ad.imageUrl || '/images/no-image.jpg';
  
  return `
    <a href="./ad-detail.html?id=${ad.id}">
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
    </a>
  `;
}



export const noAds = () => {
  return '<h2>Sorry, there are no ads to show.</h2>';
}
