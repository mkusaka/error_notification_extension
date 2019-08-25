window.addEventListener("error", (evt) => {
  console.log("imhere");
  notifyMe(evt.message);
})

function notifyMe(message) {
  if (Notification.permission === "granted") {
    new Notification(message);
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      if (permission === "granted") {
        new Notification(message);
      } else {
        console.log(":cry:")
      }
    });
  }
}
