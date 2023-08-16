const regEx = new RegExp("https://chat.google.com/");
if (regEx.test(document.location.href)) {
  window.addEventListener("keydown", handleKeydownEvent, true);
} else {
  window.removeEventListener("keydown", handleKeydownEvent);
}

function handleKeydownEvent(event) {
  if (event.key !== "Enter" || event.isModified) {
    return;
  }

  if (event.ctrlKey == true) {
    handlePostWithEnter(event);
  } else {
    handleSingleEnter(event);
  }

  preventDefaultBehavior(event);
}

function handlePostWithEnter(event) {
  const properties = [];
  for (const key in event) {
    properties[key] = event[key];
  }
  properties.shiftKey = false;
  const modifiedEvent = new KeyboardEvent("keydown", properties);
  modifiedEvent.isModified = true;
  event.target.dispatchEvent(modifiedEvent);
}

function handleSingleEnter(event) {
  const properties = [];
  for (const key in event) {
    properties[key] = event[key];
  }
  properties.shiftKey = true;
  const modifiedEvent = new KeyboardEvent("keydown", properties);
  modifiedEvent.isModified = true;
  event.target.dispatchEvent(modifiedEvent);
}

function preventDefaultBehavior(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}
