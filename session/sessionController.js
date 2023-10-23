import { loggedSession, defaultSession } from './sessionView.js';

export const sessionController = (nav) => {

  if (isLogged()) {
    nav.innerHTML = loggedSession();
    const logout = nav.querySelector('#close-session');
    logout.addEventListener("click", () => {
      localStorage.removeItem('token');
      sessionController(nav);
    })
  } else {
    nav.innerHTML = defaultSession();
  }
}

const isLogged = () => {
  return localStorage.getItem('token');
}