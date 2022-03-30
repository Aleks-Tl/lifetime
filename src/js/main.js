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


