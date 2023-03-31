import { getMovieById } from "../utils/api.js";
import { MovieList } from "./MovieList.js";

export const MovieDetails = async (app, movieId, updateMovieList) => {
  const movie = await getMovieById(movieId);

  app.innerHTML = `
    <div class="container mx-auto py-4">
      <h1 class="text-2xl font-bold mb-4">${movie.title}</h1>
      <p>${movie.description}</p>
      <button id="close-details" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">
        Close Details
      </button>
    </div>
  `;

  const closeButton = app.querySelector("#close-details");
  closeButton.addEventListener("click", async () => {
    await MovieList(app);
  });
};
