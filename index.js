import { sessionController } from "./session/sessionController.js";

document.addEventListener('DOMContentLoaded', () => {
  
  const session = document.getElementById('session');
  sessionController(session);
});

window.addEventListener('offline', () => {
  // showNotification('Conection lost', 'error');
  alert('Oh no! Conection lost!')
})