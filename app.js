import { Header, Login, Table } from "./components/index.js";

const app = document.getElementById("app");

Route();
addEventListener("hashchange", Route);

function Route() {
  const currentRoute = document.location.hash.slice(1);

  switch (currentRoute) {
    case "table":
      app.innerHTML = "";
      Header(app);
      Table(app);
      break;
    case "petrasmylilietuva":
      app.innerHTML = "ne ne, rimtai, myliu";
      break;
    default:
      app.innerHTML = "";
      Header(app);
      Login(app);
  }
}
