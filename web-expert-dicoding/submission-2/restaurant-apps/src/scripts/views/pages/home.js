import DicodingApi from '../../data/dicoding-api';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `<section class="hero">
                    <h1>Restaurant App</h1>
                    <p>Good food</p>
                </section>
                <div id="content" class="restaurants"></div>`;
  },

  async afterRender() {
    const restaurants = await DicodingApi.getListRestaurants();
    const restaurantContainer = document.querySelector('#content');
    restaurantContainer.innerHTML = restaurants.map((restaurant) => createRestaurantItemTemplate(restaurant)).join('\n');
  },
};

export default Home;
