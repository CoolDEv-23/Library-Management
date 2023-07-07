const bookList = document.getElementById('book-list');
const addBookForm = document.getElementById('add-book-form');

function addBook(e) {
    e.preventDefault();
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');

    const title = titleInput.value;
    const author = authorInput.value;

    const li = document.createElement('li');
    li.innerHTML = `<strong>${title}</strong> by ${author} <button class="delete-button">Delete</button>`;
    bookList.appendChild(li);

    titleInput.value = '';
    authorInput.value = '';

    const deleteButton = li.querySelector('.delete-button');
    deleteButton.addEventListener('click', removeBook);
}

function removeBook(e) {
    const bookItem = e.target.parentElement;
    bookList.removeChild(bookItem);
}

addBookForm.addEventListener('submit', addBook);