document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu__btn')
  const menuMobile = document.querySelector('.header__menu-list')

  menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('menu--open')
  })

  const swiperOne = new Swiper('.feedback__slider', {
    loop: true,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
    },
  })

  const swiperTwo = new Swiper('.certificates__slider', {
    spaceBetween: 10,

    pagination: {
      el: '.swiper-pagination',
    },

    breakpoints: {
      1000: {
        spaceBetween: 20,
        slidesPerView: 'auto',
      },
      640: {
        slidesPerView: 'auto',
      },
      430: {
        slidesPerView: 2,
      },
      360: {
        slidesPerView: 1,
      },
    },
  })

  const accordion = document.querySelector('.accordion')
  const accordionTitles = accordion.querySelectorAll('.accordion__title')

  accordionTitles.forEach(title =>
    title.addEventListener('click', () => {
      const currentText = title.parentElement.querySelector('.accordion__text')

      title.classList.toggle('accordion__title--active')
      currentText.classList.toggle('accordion__text--visible')

      if (currentText.classList.contains('accordion__text--visible')) {
        currentText.style.maxHeight = currentText.scrollHeight + 'px'
      } else {
        currentText.style.maxHeight = null
      }
    })
  )
})
