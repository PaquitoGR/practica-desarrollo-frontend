import { createUser } from "./signupModel.js";
import { dispatchEvent, createCustomEvent } from '../utils/events.js';


export const signupController = (signupForm) => {
  signupForm.addEventListener('submit', (event) => validateForm(event, signupForm));
}

const validateForm = async (event, signupForm) => {
  event.preventDefault();

  const fullName = signupForm.querySelector('#full-name');
  const email = signupForm.querySelector('#email');
  const password = signupForm.querySelector('#password');
  const passwordConfirmation = signupForm.querySelector('#password-confirmation');

  dispatchEvent('startSignupUser', null, signupForm);
  try {
    if (isValidForm(fullName, email, password, passwordConfirmation)) {
      await createUser(fullName.value, email.value, password.value);
      const event = createCustomEvent('userSignup', 'success', 'User created successfully');
      signupForm.dispatchEvent(event);
  
      setTimeout(() => {
        window.location = "./login.html";
      }, 3000);
    }

  } catch (error) {
    dispatchEvent('userSignup', {type: 'error', message: error}, signupForm);

    } finally {
      dispatchEvent('finishSignupUser', null, signupForm);
    }
};

const isValidForm = (fullName, email, password, passwordConfirmation) => {

  const fullNameValidation = isValidFullName(fullName);
  const emailValidation = isValidEmail(email);
  const passwordValidation = isValidPassword(password, passwordConfirmation);

  return fullNameValidation && emailValidation && passwordValidation;
}

const isValidFullName = (fullName) => {
  let result = true;
  const fullNameRegExp = new RegExp(/^(?:\w+ ){1,2}\w+$/);

  if (!fullNameRegExp.test(fullName.value)) {
    result = false;
    throw 'Incorrect full name.'
  }

  return result;
}

const isValidEmail = (email) => {
  let result = true;
  const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

  if (!emailRegExp.test(email.value)) {
    result = false;
    throw 'Invalid e-mail.'
  }

  return result;
}

const isValidPassword = (password, passwordConfirmation) => {
  let result = true;

  if (password.value !== passwordConfirmation.value) {    
    result = false;
    throw 'Passwords do not match.'
  }

  return result;
}