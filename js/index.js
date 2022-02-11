const btn = document.querySelector('.btn');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const tbody = document.querySelector('tbody');
const closeAlert = document.querySelector('.fa-times');
const cover = document.querySelector('.cover');
let temp = 0;
let books = [];


btn.addEventListener('click', (e) => {
    if (title.value === '' || author.value === '' || year.value === '') {
        cover.style.display = 'flex';
    } else {
        const titleCol = title.value;
        const authorCol = author.value;
        const yearCol = year.value;

        let newBookObject = {
            id: books.length + 1,
            title: titleCol,
            author: authorCol,
            year: yearCol
        }
        console.log(newBookObject)
        console.log(books)
        books.push(newBookObject);
        setIntoLocalStorage(books);
    }
});

closeAlert.addEventListener('click', () => {
    cover.style.display = 'none';
});

window.addEventListener('load', () => {
    let localStorageBooks = localStorage.getItem('books')
    console.log(localStorageBooks);
    if (localStorageBooks) {
        books = JSON.parse(localStorageBooks)
        console.log(books);
        bookGenerator(books);
    }
});

function setIntoLocalStorage(allBooksArray) {
    localStorage.setItem('books', JSON.stringify(allBooksArray));
    bookGenerator(allBooksArray);
    console.log(allBooksArray)
}

function bookGenerator(allBooksArray) {
    tbody.innerHTML = '';
    allBooksArray.forEach((book) => {
        const newTr = document.createElement('tr');
        const rowContent =
            `<th>${book.id}</th>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.year}</td>`;
        newTr.innerHTML = rowContent;
        tbody.appendChild(newTr);

        title.value = '';
        author.value = '';
        year.value = '';
    });
}