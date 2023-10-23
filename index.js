import { sessionController } from "./session/sessionController.js";

document.addEventListener('DOMContentLoaded', () => {
  
  const session = document.getElementById('session');
  sessionController(session);
});