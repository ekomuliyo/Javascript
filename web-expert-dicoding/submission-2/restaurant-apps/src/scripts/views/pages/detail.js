import DicodingApi from '../../data/dicoding-api';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import DrawerDetail from '../../utils/drawer-detail';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `<div id="restaurant-detail" class="restaurant-detail"></div>
                <div id="likeButtonContainer"></div>`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await DicodingApi.getDetailRestaurant(url.id);
    const detailContainer = document.querySelector('#restaurant-detail');
    detailContainer.innerHTML = createRestaurantDetailTemplate(restaurant.restaurant);

    DrawerDetail.init();

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        pictureId: restaurant.restaurant.pictureId,
        city: restaurant.restaurant.city,
        address: restaurant.restaurant.address,
        description: restaurant.restaurant.description,
        categories: restaurant.restaurant.categories,
        menus: restaurant.restaurant.menus,
        customerReviews: restaurant.restaurant.customerReviews,
      },
    });
  },
};

export default Detail;
