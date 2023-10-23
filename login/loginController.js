
export const loginController = async (loginForm) => {

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    submitLogin(loginForm);
  });

}