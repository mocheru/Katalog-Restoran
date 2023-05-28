import TheRestaurantDbSource from '../../data/restaurantdb-source';
import {
  createRestaurantItemTemplate,
  createSkeletonRestaurantTemplate
} from '../templates/template-creator';

const HomeRestaurant = {
  async render() {
    return `
    <div class="content">
      <h2 tabindex="0" class="content__heading">Explore Restaurant</h2>
      <div id="restaurants" class="restaurants">
        ${createSkeletonRestaurantTemplate(20)}
      </div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await TheRestaurantDbSource.homeRestaurantList();
    const restaurantContainer = document.querySelector('#restaurants');
    restaurantContainer.innerHTML = '';
    restaurants.forEach((resto) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(resto);
    });

    const Hero = document.querySelector('.hero');
    Hero.style.display = 'block';
  }
};

export default HomeRestaurant;
