import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import DetailFavorite from '../views/pages/detail-favorite';

const routes = {
  '/': Home,
  '/detail/:id': Detail,
  '/favorite': Favorite,
  '/detail-favorite/:id': DetailFavorite,
};

export default routes;
