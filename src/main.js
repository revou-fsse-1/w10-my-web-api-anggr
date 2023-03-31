import './assets/css/tailwind.css';
import { MovieList } from './components/MovieList.js';


const app = document.getElementById('app');

(async () => {
  const movieListComponent = await MovieList(app);
})();
