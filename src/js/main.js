import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';

const burger = document.querySelector('.burger'),
  pageBody = document.querySelector('.page__body'),
  menuLink = document.querySelectorAll('.nav-header a');

menuLink.forEach(function (el) {
  if (window.location.pathname.indexOf(el.getAttribute('href')) > -1) {
    el.classList.add('active');
  }
});

burger.addEventListener('click', () => {
  pageBody.classList.toggle('lock');
});


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.querySelector('header').classList.add('backgroundWhite');
  } else {
    document.querySelector('header').classList.remove('backgroundWhite');
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
  scrollFunction();
});

// Swiper

const swiper = new Swiper('.slider-testimonials', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,

  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 576px
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 768px
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  }
});


// Counter UP
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const c = +counter.innerText;

    const increment = target / 500;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 10);
    }
  };
  updateCounter();
});

// Accordion

const acc_btns = document.querySelectorAll('.accordion__header');
const acc_contents = document.querySelectorAll('.accordion__body');

acc_btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {

    acc_contents.forEach((acc) => {
      if (e.target.nextElementSibling !== acc && acc.classList.contains('active')) {
        acc.classList.remove('active');
        acc_btns.forEach((btn) => btn.classList.remove('active'));
      }
    })
    const panel = btn.nextElementSibling;
    panel.classList.toggle('active');
    btn.classList.toggle('active');

    /* if (panel.classList.contains('active')) {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    } else {
      panel.style.maxHeight = null;
    } */


  })
})

window.onclick = (e) => {
  if (!e.target.matches('.accordion__header')) {
    acc_btns.forEach((btn) => btn.classList.remove('active'));
    acc_contents.forEach((acc) => acc.classList.remove('active'));
  }
}
