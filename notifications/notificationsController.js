import { renderNotification } from './notificationsView.js'

export const notificationsController = (notifications) => {
  
  const showNotification = (type, message) => {
    notifications.innerHTML = renderNotification(type, message);
  }

  return showNotification;
}

