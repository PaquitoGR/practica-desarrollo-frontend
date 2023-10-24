export const renderNotification = (type, message) => {
  return `
    <div class="notification ${type}">
      <p>${message}</p>
    </div>
  `
}