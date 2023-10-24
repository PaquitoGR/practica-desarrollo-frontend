import { renderNotification } from './notificationsView.js'

export const notificationsController = (notifications) => {

  const showNotification = (type, message) => {
    notifications.innerHTML = renderNotification(type, message);
    setTimeout(() => {
      notifications.innerHTML = '';
    }, 1500);
  }

  return showNotification;
}