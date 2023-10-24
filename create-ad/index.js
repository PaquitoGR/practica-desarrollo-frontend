import { createAdController } from "./createAdController.js";
import { loaderController } from "../loader/loaderController.js";

const token = localStorage.getItem('token');
if (!token) {
  window.location = '/';
}

const loader = document.getElementById('loader');
const { show, hide } = loaderController(loader);

document.addEventListener('DOMContentLoaded', () => {

  const createAd = document.querySelector('#create-ad-form');

  createAd.addEventListener('startCreatingAd', () => {
    show();
  });
  createAd.addEventListener('finishCreatingAd', () => {
    hide();
  });

  createAdController(createAd);
});