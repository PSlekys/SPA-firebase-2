import Notification from "./Notification.js";

const Login = (app) => {
  const loginBlock = `
          <main>
            <form name="login">
              <input type="email" name="email" placeholder="Email" />
              <input type="password" name="password" placeholder="Password" />
              <button type="submit">Login</button>
            </form>
          </main>
        `;

  app.innerHTML += loginBlock;

  document.forms.login.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    document.querySelector("button").classList.add("loading");

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(
        () => {
          document.location.hash = "table";
        },
        (error) => {
          app.innerHTML += Notification("error", error.message);
          document.querySelector("button").classList.remove("loading");
        }
      );
  });
};

export default Login;
