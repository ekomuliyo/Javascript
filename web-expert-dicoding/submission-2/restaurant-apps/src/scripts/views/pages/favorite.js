import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemFavoriteTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `<div id="restaurant-favorite" class="restaurants">
            </div>`;
  },

  async afterRender() {
    const restaurantsFavorite = await FavoriteRestaurantIdb.getListRestaurant();
    const restaurantContainer = document.querySelector('#restaurant-favorite');
    console.log(restaurantsFavorite);
    restaurantContainer.innerHTML = restaurantsFavorite.map((restaurant) => createRestaurantItemFavoriteTemplate(restaurant)).join('\n');
  },
};

export default Favorite;
