import CONFIG_API from '../globals/config-api';

class DicodingApi {
  static async getListRestaurants() {
    const response = await fetch(`${CONFIG_API.BASE_URL}list`);
    if (response.status === 200) {
      const responseJSON = await response.json();
      return responseJSON.restaurants;
    }
    throw new Error(response);
  }

  static async getDetailRestaurant(id) {
    const response = await fetch(`${CONFIG_API.BASE_URL}detail/${id}`);
    return response.json();
  }
}

export default DicodingApi;
