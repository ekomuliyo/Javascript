import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';

import App from './views/app';
import swRegister from './utils/sw-register';

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const content = document.querySelector('#main');

const app = new App({
  menuToggle,
  nav,
  content,
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
