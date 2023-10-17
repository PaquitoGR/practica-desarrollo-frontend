import { createUser } from "./signupModel.js";

export const signupController = (signupForm) => {
  signupForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const fullName = signupForm.querySelector('#full-name');
    const email = signupForm.querySelector('#email');
    const password = signupForm.querySelector('#password');
    const passwordConfirmation = signupForm.querySelector('#password-confirmation');
    
  });
}

const isValidFullName = (fullName) => {
  let result = true;
  const fullNameRegExp = new RegExp(/^(?:\w+ ){1,2}\w+$/);

  if (!fullNameRegExp.test(fullName.value)) {
    alert('Wrong full name');
    result = false;
  }

  return result;
}

const isValidEmail = (email) => {
  let result = true;
  const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

  if (!emailRegExp.test(email.value)) {
    alert('Wrong email');
    result = false;
  }

  return result;
}

const isValidPassword = (password, passwordConfirmation) => {
  let result = true;

  if (password.value !== passwordConfirmation.value) {
    alert('Passwords are different');
    result = false;
  }

  return result;
}