import { createAd } from './createAdModel.js';

export const createAdController = (createAdForm) => {
  
  createAdForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData(createAdForm);
      const name = formData.get('name');
      const description = formData.get('description');
      const price = formData.get('price');
      const adType = formData.get('ad-type');

      await createAd(name, description, price, adType)
      alert('ad created successfully!');
      
    } catch (error) {
      alert(error);
      throw error;
    }
  
  });
}