import { createAd } from './createAdModel.js';
import { dispatchEvent, createCustomEvent } from '../utils/events.js';



export const createAdController = (createAdForm) => {
  
  createAdForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    dispatchEvent('startCreatingAd', null, createAdForm);
    
    try {
      const formData = new FormData(createAdForm);
      const name = formData.get('name');
      const description = formData.get('description');
      const price = formData.get('price');
      const adType = formData.get('ad-type');

      await createAd(name, description, price, adType)
      alert('ad created successfully!');
      window.location = '/';
      
    } catch (error) {
      alert(error);
      throw error;
    }  finally {
      dispatchEvent('finishCreatingAd', null, createAdForm);
    }
  });
}