export const LoginForm = (app, onLoggedIn) => {
   app.innerHTML = `
     <div class="container mx-auto py-4">
       <h1 class="text-2xl font-bold mb-4">Login</h1>
       <form id="login-form">
         <div class="mb-4">
           <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
             Username
           </label>
           <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text">
         </div>
         <div class="mb-4">
           <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
             Password
           </label>
           <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password">
         </div>
         <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
           Login
         </button>
       </form>
     </div>
   `;
 
   const form = app.querySelector("#login-form");
   form.addEventListener("submit", (event) => {
     event.preventDefault();
 
     const username = form.querySelector("#username").value;
     const password = form.querySelector("#password").value;
 
     // Validate credentials
     const storedPassword = localStorage.getItem(`user_${username}`);
     if (storedPassword && storedPassword === password) {
       localStorage.setItem("loggedIn", "true");
       onLoggedIn();
     } else {
       alert("Invalid username or password!");
     }
   });
 };
 