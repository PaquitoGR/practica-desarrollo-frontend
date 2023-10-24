import { loginController } from "./loginController.js";
import { loaderController } from "../loader/loaderController.js";

const loader = document.getElementById('loader');
const { show, hide } = loaderController(loader);

document.addEventListener('DOMContentLoaded', () => {

  const loginForm = document.querySelector('#login-form');

  loginForm.addEventListener('startLoginUser', () => {
    show();
  });
  loginForm.addEventListener('finishLoginUser', () => {
    hide();
  });

  loginController(loginForm);
});