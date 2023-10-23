
export const createAd = async (name, description, price, adType) => {
  const url = 'http://localhost:8000/api/ads';
  const token = localStorage.getItem('token');

  const ad = {
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
    } else {
      alert('Ad created succesfully!')
    }

  } catch (error) {
    if (error.message) {
      alert(error.message);
      throw error.message;
    } else {
      alert(error);
      throw error;
    }
  }
}