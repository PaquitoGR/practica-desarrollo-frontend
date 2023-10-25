
export const dispatchEvent = (eventName, data, element) => {
  const event = new CustomEvent(eventName, {
    detail: data
  });

  element.dispatchEvent(event);
}

export const createCustomEvent = (eventName, type, message) => {
  const event = new CustomEvent(eventName, {
    detail: {
      type: type,
      message: message
    }
  });
  
  return event;
}
