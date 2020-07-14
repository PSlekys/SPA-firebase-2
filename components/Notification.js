const Notification = (type, message) => {
  const notificationBlock = `
            <div class="${type}">
                ${message}
            </div>
        `;

  return notificationBlock;
};

export default Notification;
