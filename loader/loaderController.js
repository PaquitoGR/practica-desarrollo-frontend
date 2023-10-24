import { renderLoader } from './loaderView.js';

export const loaderController = (loader) => {

  const showLoader = () => {
    loader.classList.add('active');
    loader.innerHTML = renderLoader();
  };

  const hideLoader = () => {
    loader.classList.remove('active');
    loader.innerHTML = '';
  };

  return {
    show: showLoader,
    hide: hideLoader
  }
}