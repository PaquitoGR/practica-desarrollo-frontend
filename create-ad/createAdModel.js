
export const createAd = async (user, name, description, price, adType) => {
  const url = 'http://localhost:8000/api/ads';
  const token = localStorage.getItem('token');

  const ad = {
    username: user,
    name: name,
    description: description,
    price: price,
    adType: adType
  }
  
  let response;

  try {
    response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(ad),
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message);
    }

  } catch (error) {
    if (error.message) {
      throw error.message;
    } else {
      throw error;
    }
  }
}