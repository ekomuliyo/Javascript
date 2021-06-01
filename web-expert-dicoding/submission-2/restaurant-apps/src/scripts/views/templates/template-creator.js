import CONFIG from '../../globals/config-api';

const createRestaurantItemTemplate = (restaurant) => `
    <div class="restaurant-container">
      <img src="${CONFIG.BASE_URL_IMAGE + restaurant.pictureId}" alt="${restaurant.name}">
      <h1>${restaurant.name}</h1>
      <h3>${restaurant.city}</h3>
      <span>&#11088; ${restaurant.rating}</span>
      <p>${restaurant.description}</p>
      <a href="#/detail/${restaurant.id}" class="btn-secondary">Detail</a>
    </div>
  `;

const createRestaurantItemFavoriteTemplate = (restaurant) => `
    <div class="restaurant-container">
      <img src="${CONFIG.BASE_URL_IMAGE + restaurant.pictureId}" alt="${restaurant.name}">
      <h1>${restaurant.name}</h1>
      <h3>${restaurant.city}</h3>
      <span>&#11088; ${restaurant.rating}</span>
      <p>${restaurant.description}</p>
      <a href="#/detail-favorite/${restaurant.id}" class="btn-secondary">Detail</a>
    </div>
  `;
  
const createRestaurantDetailTemplate = (restaurant) => `
    <div class="detail">
      <div class="detail_poster">
        <img src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}" alt="contoh">
      </div>
      <div class="detail_title">
        <h1>${restaurant.name}</h1>
      </div>
      <div class="detail_city">
        <p>${restaurant.city} <span class="stars" style="--rating: ${restaurant.rating};"></span></p>
      </div>
      <div class="detail_address">
        <p>${restaurant.address}</p>
      </div>
      <div class="detail_description">
        <p>${restaurant.description}</p>
      </div>
      <div class="detail_categories">
        <p>${restaurant.categories.map((value) => `#${value.name}`).join(' ')}</p>
      </div>
      <div class="detail_tab_menu">
        <ul class="tabs">
          <li class="active">
            <a href="">Foods Menu</a>
          </li>
          <li>
            <a href="">Drinks Menu</a>
          </li>
          <li>
            <a href="">Reviews</a>
          </li>
        </ul>
        <div class="tabs_content">
          <div class="tabs_panel active" data-index="0">
            <div class="tabs_content_container">
              ${restaurant.menus.foods.map((value) => `<span>-${value.name}</span>`).join('\n')}
            </div>
          </div>
          <div class="tabs_panel" data-index="1">
            <div class="tabs_content_container">
              ${restaurant.menus.drinks.map((value) => `<span>-${value.name}</span>`).join('\n')}
            </div>
          </div>
          <div class="tabs_panel" data-index="2">
            ${restaurant.customerReviews.map((value) => `<div class="tabs_content_container_reviews">
                        <img src="./images/user.png" style="width:90px">
                        <p><span>${value.name}</span></p>
                        <p class="date">${value.date}</p>
                        <p>${value.review}</p>
                      </div>`).join('\n')}
          </div>
        </div>
      </div>
    </div>
    `;
    
const createLikeButtonTemplate = () => `
    <button type="button" aria-label="like this restaurant" id="likeButton" class="like">
      <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
    `;
  
const createLikedButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
      <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
    `;
    
export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createRestaurantItemFavoriteTemplate,
};
