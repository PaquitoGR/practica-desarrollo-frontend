
export const renderNotification = (type, message) => {
  return `
    <div id="notification" class="notification ${type}">
      <p>${message}</p>
    </div>
  `
}