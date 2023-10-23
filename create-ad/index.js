import { createAdController } from "./createAdController.js";

const token = localStorage.getItem('token');
if (!token) {
  window.location = '/';
}

document.addEventListener('DOMContentLoaded', () => {

  const createAd = document.querySelector('#create-ad-form');

  createAdController(createAd);
});