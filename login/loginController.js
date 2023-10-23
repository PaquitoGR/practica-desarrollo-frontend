import { loginUser } from "./loginModel.js";

export const loginController = async (loginForm) => {

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    submitLogin(loginForm);
  });

}

const submitLogin = async (loginForm) => {

  const formData = new FormData(loginForm);
  
  try {
    const jwt = await loginUser(formData.get('email'), formData.get('password'));
    localStorage.setItem('token', jwt);
    alert("User login Successful");

    setTimeout(() => {
      window.location = './index.html';
    }, 2000);

  } catch (error) {
    alert(error);
  }
}