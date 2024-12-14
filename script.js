// Basic interactivity for Buy Now buttons
document.addEventListener('DOMContentLoaded', () => {
  const buyButtons = document.querySelectorAll('.buy-button');
  buyButtons.forEach((button) => {
    button.addEventListener('click', () => {
      alert('Thank you for your interest! Contact us at ktrash511@gmail.com to proceed.');
    });
  });
});