const ctaButton = document.querySelector('.cta');
ctaButton.addEventListener('click', () => {
  ctaButton.style.backgroundColor = '#000';
  ctaButton.style.color = '#fff';
});

const buyButtons = document.querySelectorAll('.buy-button');
buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Sản phẩm đã được thêm vào giỏ hàng!');
  });
});