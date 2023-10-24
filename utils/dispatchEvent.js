
export const dispatchEvent = (eventName, data, element) => {
  const event = new CustomEvent(eventName, {
    detail: DataTransfer
  });

  element.dispatchEvent(event);
}