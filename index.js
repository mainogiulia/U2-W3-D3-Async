const booksUrl = "https://striveschool-api.herokuapp.com/books";

const getBooks = function () {
  fetch(booksUrl)
    .then((response) => {
      console.log("RESPONSE", response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error in server response");
      }
    })
    .then((booksArray) => {
      console.log(booksArray);
      booksArray.forEach((book) => {
        const bookSection = document.createElement("div");
        bookSection.classList.add("col", "col-12", "col-sm-6", "col-md-4", "col-lg-3", "col-xl-2");
        bookSection.innerHTML = `<div class="card">
            <img src="${book.img}" class="card-img-top"" id="book-picture" alt="book picture" />
            <div class="card-body">
              <h5 id="book-title">${book.title}</h5>
              <p id="book-category">${book.category}</p>
              <p id="book-price">${book.price}€</p>
              <button href="#" class="btn btn-primary discard-button">Discard</button>
            </div>
          </div>`;
        const row = document.getElementById("booksRow");
        row.appendChild(bookSection);
      });

      //   const discardButton = document.getElementsByClassName("discard-button");
      //   discardButton.forEach((button) => {
      //     button.addEventListener("click", () => {
      //       const bookCard = button.closest(".card");
      //       bookCard.classList.add("d-none");
      // });
      //   });
    })
    .catch((err) => {
      console.log(err);
    });
};

getBooks();

//   const discard = function () {
//     bookSection.classList.add("d-none");
//     discardButton.addEventListener("click", discard);
//   };

//   discardButton.addEventListener("click", () => {
//     bookSection.classList.add("d-none");
//   });

//   const bookCard = document.getElementsByClassName("card");

//   discardButton.forEach((button) => {
//     button.addEventListener("click", () => {
//       bookCard.classList.add("d-none");
//     });
//   });
// })
