import UrlParser from '../../routes/url-parser';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import DrawerDetail from '../../utils/drawer-detail';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const DetailFavorite = {
  async render() {
    return `<div id="restaurant-detail" class="restaurant-detail"></div>
                <div id="likeButtonContainer"></div>`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantIdb = await FavoriteRestaurantIdb.getRestaurant(url.id);
    const detailContainer = document.querySelector('#restaurant-detail');
    detailContainer.innerHTML = createRestaurantDetailTemplate(restaurantIdb);

    DrawerDetail.init();

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurantIdb.id,
        name: restaurantIdb.name,
        pictureId: restaurantIdb.pictureId,
        city: restaurantIdb.city,
        address: restaurantIdb.address,
        description: restaurantIdb.description,
        categories: restaurantIdb.categories,
        menus: restaurantIdb.menus,
        customerReviews: restaurantIdb.customerReviews,
      },
    });
  },
};

export default DetailFavorite;
