import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

const data = require('../DATA.json'); 

// console.log('Hello Coders! :)');

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const restaurants = document.querySelector('.restaurants');

menuToggle.addEventListener('click', function(e) {
    nav.classList.toggle('mobile-nav');
    menuToggle.classList.toggle('is-active');
});

console.log(data);

restaurants.innerHTML = data.restaurants.map(data => {
    return `
    <div class="restaurant-container">
        <img src="${data.pictureId}" alt="${data.name}">
        <h2><a href="#">${data.name}</a></h2>
        <h3>${data.city}</h3>
        <span>&#11088; ${data.rating}</span>
        <p>${data.description}</p>
    </div>`;
}).join('\n');

