const newBookBtn = document.querySelector("#new-book-btn");
const dialog = document.querySelector("#dialog");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");
const closeBtn = document.querySelector("#close");
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
};

Book.prototype.toggleRead = function() {
  if(this.read === "Yes") {
    return this.read = "No";  
  } else {
    return this.read = "Yes";
  }
};

function toggleRead(index) {
  myLibrary[index].toggleRead();
  render();
}
{}
function render() {
    let libraryEl = document.querySelector("#library");
    libraryEl.innerHTML = "";
    for(let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.setAttribute("class", "book-card");
        bookEl.innerHTML = `
        <p>Title: <span class="card-title">${book.title}</span></p>
        <p>Author(s): <span class="card-author">${book.author}</span></p>
        <p>Pages: <span class="card-pages">${book.pages}</span></p>
        <p>Read: <span class="card-read">${book.read}</span></p>
        <div class="card-btn-container">
          <button class="toggle-read-btn" onclick="toggleRead(${i})">Toggle Read</button>
          <button class="remove-btn" onclick="removeBook(${i})">Remove Book</button>
        </div>
        `;
        libraryEl.appendChild(bookEl);
    };
};

function removeBook(index) {
  myLibrary.splice(index, 1);
  console.log(index);
  console.log(myLibrary)
  render();
};

function addBookToLibrary() {
  let newBook = new Book(title.value, author.value, pages.value, read.value);
  myLibrary.push(newBook);
  console.log(myLibrary);
  render(); 
};

newBookBtn.addEventListener("click", () => {
    dialog.showModal();
});

document.querySelector("#new-book-form").addEventListener("submit", (event) => {
    event.preventDefault();
    addBookToLibrary();
    dialog.close();
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});


