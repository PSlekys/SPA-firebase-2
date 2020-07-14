const Table = (app) => {
  const tableBlock = `
        <main>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
          </main>
      `;

  app.innerHTML += tableBlock;

  const table = document.querySelector("tbody");

  firebase
    .firestore()
    .collection("books")
    .get()
    .then((snapshot) =>
      snapshot.docs.forEach((book) => {
        const tr = table.insertRow();
        const td1 = tr.insertCell();
        td1.textContent = book.data().author;

        const td2 = tr.insertCell();
        td2.textContent = book.data().title;
      })
    );
};

export default Table;
