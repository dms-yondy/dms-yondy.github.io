const notificationNumber = document.querySelector(".notifications-number");
const unreadNotifications = document.querySelectorAll(".notification-unread");
const readAllButton = document.querySelector(".read-all-button");

readAllButton.addEventListener("click", (e) => {
  unreadNotifications.forEach((notification) => {
    notification.classList.remove("notification-unread");
    notification.querySelector(".read").classList.remove("read");
  });
  notificationNumber.classList.add("display-none");
});
