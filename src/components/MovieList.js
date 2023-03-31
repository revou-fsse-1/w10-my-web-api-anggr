import { getMovies, deleteMovie } from "../utils/api.js";
import { MovieDetails } from "./MovieDetails.js";
import { CreateMovieForm } from "./CreateMovieForm.js";
import { EditMovieForm } from "./EditMovieForm.js";

export const MovieList = async (app) => {
  const updateMovieList = async () => {
    try {
      const movies = await getMovies();
      app.innerHTML = `
        <div id="create-movie-container" class="container mx-auto py-4"></div>
        <div class="container mx-auto py-4">
          <h1 class="text-2xl font-bold mb-4">Movies</h1>
          <div id="movie-list" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          </div>
        </div>
      `;

      const createMovieContainer = app.querySelector("#create-movie-container");
      CreateMovieForm(createMovieContainer, updateMovieList);

      const movieList = app.querySelector("#movie-list");
      movieList.innerHTML = movies
        .map(
          (movie) => `
            <div class="bg-white shadow rounded p-4">
              <h2 class="text-xl font-semibold">${movie.title}</h2>
              <p>${movie.description}</p>
              <button class="show-details bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" data-movie-id="${movie.id}">
                Show Details
              </button>
              <button class="edit-movie bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4" data-movie-id="${movie.id}">
                Edit Movie
              </button>
              <button class="delete-movie bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4" data-movie-id="${movie.id}">
                Delete Movie
              </button>
            </div>
          `
        )
        .join("");

      const detailButtons = app.querySelectorAll(".show-details");
      detailButtons.forEach((button) =>
        button.addEventListener("click", async () => {
          createMovieContainer.innerHTML = "";
          const movieId = button.getAttribute("data-movie-id");
          await MovieDetails(app, movieId, updateMovieList);
        })
      );

      const editButtons = app.querySelectorAll(".edit-movie");
      editButtons.forEach((button) =>
        button.addEventListener("click", async () => {
          createMovieContainer.innerHTML = "";
          const movieId = button.getAttribute("data-movie-id");
          EditMovieForm(createMovieContainer, movieId, updateMovieList);
        })
      );

      const deleteButtons = app.querySelectorAll(".delete-movie");
      deleteButtons.forEach((button) =>
        button.addEventListener("click", async () => {
          const movieId = button.getAttribute("data-movie-id");
          await deleteMovie(movieId);
          await updateMovieList();
        })
      );
    } catch (error) {
      console.error("Error rendering movies:", error);
    }
  };

  await updateMovieList();
};
