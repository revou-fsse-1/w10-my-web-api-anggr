import axios from "axios";

const API_URL = "http://localhost:5000";
// const API_URL = "http://json-server-blue-nine.vercel.app";

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

// Register new user
export const registerUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/users`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

// Login user
export const loginUser = async (username, password) => {
  try {
    const response = await axios.get(
      `${API_URL}/users?username=${username}&password=${password}`
    );
    return response.data.length > 0 ? response.data[0] : null;
  } catch (error) {
    console.error("Error logging in user:", error);
    throw error;
  }
};
