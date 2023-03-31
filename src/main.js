import './assets/css/tailwind.css';
import { MovieList } from './components/MovieList.js';
import { LoginForm } from './components/Login.js';
import { RegisterForm } from './components/Register.js';

const app = document.getElementById('app');

const onLoggedIn = () => {
  const movieListComponent = MovieList(app);
};

const onRegistered = () => {
  LoginForm(app, onLoggedIn);
};

const isLoggedIn = () => {
  return localStorage.getItem("loggedIn") === "true";
};

if (isLoggedIn()) {
  onLoggedIn();
} else {
  const loginBtn = document.createElement('button');
  loginBtn.innerText = 'Login';
  loginBtn.classList.add('bg-blue-500', 'hover:bg-blue-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded', 'focus:outline-none', 'focus:shadow-outline', 'mr-2');
  loginBtn.addEventListener('click', () => LoginForm(app, onLoggedIn));
  app.appendChild(loginBtn);

  const registerBtn = document.createElement('button');
  registerBtn.innerText = 'Register';
  registerBtn.classList.add('bg-blue-500', 'hover:bg-blue-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded', 'focus:outline-none', 'focus:shadow-outline');
  registerBtn.addEventListener('click', () => RegisterForm(app, onRegistered));
  app.appendChild(registerBtn);
}
