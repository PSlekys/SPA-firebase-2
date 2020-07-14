const Header = (app) => {
  const headerBlock = `
          <header>
              <h1>Logo</h1>
  
              ${
                document.location.hash.slice(1) !== "table"
                  ? "lol"
                  : '<nav><button onclick="firebase.auth().signOut(); document.location.hash = null">Sign Out</button></nav>'
              }
          </header>
      `;

  app.innerHTML += headerBlock;
};

export default Header;
