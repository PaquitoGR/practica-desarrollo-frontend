import { createAd } from './createAdModel.js';
import { dispatchEvent, createCustomEvent } from '../utils/events.js';

export const createAdController = (createAdForm) => {

  const token = localStorage.getItem('token');
  if (!token) {
    dispatchEvent('startCreatingAd', null, createAdForm);
    const event = createCustomEvent('adCreated', 'error', 'Sorry, you need to be logged to be here');
    createAdForm.dispatchEvent(event);      
    setTimeout(() => {
      dispatchEvent('finishCreatingAd', null, createAdForm);
      window.location = '/';
    }, 3000);
  }  
  
  createAdForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData(createAdForm);
      const name = formData.get('name');
      const description = formData.get('description');
      const price = formData.get('price');
      const adType = formData.get('ad-type');

      await createAd(name, description, price, adType);
      const event = createCustomEvent('adCreated', 'success', 'Ad created successfully');
      createAdForm.dispatchEvent(event);
      
      setTimeout(() => {
        window.location = '/';        
      }, 3000);
      
    } catch (error) {
      const event = createCustomEvent('adCreated', 'error', "Sorry, ad could't be created.");
      createAdForm.dispatchEvent(event);
      throw error;
    } finally {
      dispatchEvent('finishCreatingAd', null, createAdForm);
    }
  });
}
