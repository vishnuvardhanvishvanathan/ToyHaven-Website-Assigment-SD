const announcements = 
[
  "🤩Welcome to our site!👋 Check out our new products.🔥🔥🔥",
  "🤩Free shipping on all orders over $50!💀💀🤩",
  "😲Use code SAVE20 for 20% off your first purchase.🔥",
  "😊Join our live webinar this Thursday at 2 PM🔥.😁👋"
];

window.addEventListener("DOMContentLoaded", () => {
  const randomIndex = Math.floor(Math.random() * announcements.length);
  const textElement = document.getElementById("announcement-text");
  textElement.textContent = announcements[randomIndex];
});