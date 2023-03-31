import { createMovie } from "../utils/api.js";

export const CreateMovieForm = (element, updateMovieList) => {
  element.innerHTML = `
    <div class="container mx-auto py-4">
      <h1 class="text-2xl font-bold mb-4">Create Movie</h1>
      <form id="create-movie-form" class="w-full max-w-lg">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
            Title
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Movie title">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="description">
            Description
          </label>
          <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" placeholder="Movie description"></textarea>
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Create Movie
          </button>
        </div>
      </form>
    </div>
  `;

  const form = element.querySelector("#create-movie-form");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const titleInput = element.querySelector("#title");
    const descriptionInput = element.querySelector("#description");

    const newMovie = {
      title: titleInput.value,
      description: descriptionInput.value,
    };

    await createMovie(newMovie);

    titleInput.value = "";
    descriptionInput.value = "";

    alert("Movie created successfully!");

    await updateMovieList();
  });
};
