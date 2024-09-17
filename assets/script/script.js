// const ctaButton = document.querySelector('.cta');
// ctaButton.addEventListener('click', () => {
//   ctaButton.style.backgroundColor = '#000';
//   ctaButton.style.color = '#fff';
// });

// const buyButtons = document.querySelectorAll('.buy-button');
// buyButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     alert('Sản phẩm đã được thêm vào giỏ hàng!');
//   });
// });



// intersection observer API cho class "intersection"

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const animationDirection = entry.target.getAttribute('data-animation')
      entry.target.classList.add(`${animationDirection}-visible`)
      observer.unobserve(entry.target);
    }
  })
})

const elements = document.querySelectorAll('[data-animation]');
elements.forEach(element => {
  observer.observe(element);
})





// const cards = document.querySelectorAll('.card');
//     cards.forEach(card => {
//       card.addEventListener('click', () => {
//         alert(`You clicked on the ${card.querySelector('.card-name').textContent} card.`);
//       });
//     });


var swiper = new Swiper('.swiper', {
  slidesPerView: 6,
  direction: getDirection(),
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

  return direction;
}

