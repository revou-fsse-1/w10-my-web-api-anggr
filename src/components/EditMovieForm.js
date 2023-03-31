import { getMovieById, updateMovie } from "../utils/api.js";

export async function EditMovieForm(app, movieId, updateMovieList) {
  const movie = await getMovieById(movieId);

  app.innerHTML = `
    <div class="container mx-auto py-4">
      <h1 class="text-2xl font-bold mb-4">Edit Movie</h1>
      <form id="edit-movie-form">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
            Title
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" value="${movie.title}">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="description">
            Description
          </label>
          <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" rows="5">${movie.description}</textarea>
        </div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Update Movie
        </button>
      </form>
    </div>
  `;

  const form = app.querySelector("#edit-movie-form");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const title = form.querySelector("#title").value;
    const description = form.querySelector("#description").value;

    await updateMovie(movieId, { title, description });

    updateMovieList();
  });
}
