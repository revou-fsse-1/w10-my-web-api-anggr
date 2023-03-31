import axios from "axios";

const API_URL = "http://localhost:5000";

// get all movies

export const getMovies = async () => {
  try {
    const response = await axios.get(`${API_URL}/movies`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

// create movie

export const createMovie = async (movie) => {
  try {
    const response = await axios.post(`${API_URL}/movies`, movie);
    return response.data;
  } catch (error) {
    console.error("Error creating movie:", error);
    throw error;
  }
};

// get movie details

export const getMovieById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/movies/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching movie with id ${id}:`, error);
    throw error;
  }
};

// deleteMovie

export const deleteMovie = async (movieId) => {
  const response = await axios.delete(`${API_URL}/movies/${movieId}`);
  return response.data;
};

// updateMovie

export const updateMovie = async (movieId, data) => {
  try {
    const response = await axios.put(`${API_URL}/movies/${movieId}`, data);
    return response.data;
  } catch (error) {
    console.error(`Error updating movie with id ${movieId}:`, error);
    throw error;
  }
};
