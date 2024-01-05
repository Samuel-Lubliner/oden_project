let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBooks();
}

function displayBooks() {
    const booksContainer = document.getElementById('books');
    booksContainer.innerHTML = '';
    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <p>${book.pages} pages</p>
            <p>${book.read ? 'Read' : 'Not Read'}</p>
            <button onclick="removeBook(${index})">Remove</button>
            <button onclick="toggleRead(${index})">Toggle Read</button>
        `;
        booksContainer.appendChild(bookCard);
    });
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

function toggleRead(index) {
    myLibrary[index].read = !myLibrary[index].read;
    displayBooks();
}

document.getElementById('new-book').addEventListener('click', () => {
    document.getElementById('book-form').showModal();
});

document.getElementById('book-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
    addBookToLibrary(title, author, pages, read);
    document.getElementById('book-form').close();
});

// Sample books on computer science and programming
const sampleBooks = [
    { title: 'The Pragmatic Programmer', author: 'Andy Hunt and Dave Thomas', pages: 320, read: true },
    { title: 'Clean Code: A Handbook of Agile Software Craftsmanship', author: 'Robert C. Martin', pages: 464, read: false },
    { title: 'Introduction to Algorithms', author: 'Thomas H. Cormen', pages: 1312, read: true },
    { title: 'Structure and Interpretation of Computer Programs', author: 'Harold Abelson', pages: 657, read: false },
    { title: 'Design Patterns: Elements of Reusable Object-Oriented Software', author: 'Erich Gamma', pages: 416, read: true },
    { title: 'Code Complete', author: 'Steve McConnell', pages: 960, read: true },
    { title: 'The Art of Computer Programming', author: 'Donald E. Knuth', pages: 3168, read: false },
    { title: 'Algorithms', author: 'Robert Sedgewick and Kevin Wayne', pages: 992, read: false },
    { title: 'Computer Systems: A Programmer’s Perspective', author: 'Randal E. Bryant and David R. O’Hallaron', pages: 1080, read: true },
    { title: 'Artificial Intelligence: A Modern Approach', author: 'Stuart Russell and Peter Norvig', pages: 1132, read: false },
    { title: 'Operating System Concepts', author: 'Abraham Silberschatz, Peter B. Galvin, Greg Gagne', pages: 944, read: true },
    { title: 'Database System Concepts', author: 'Abraham Silberschatz, Henry F. Korth, S. Sudarshan', pages: 1376, read: false },
    { title: 'Computer Networking: A Top-Down Approach', author: 'James Kurose and Keith Ross', pages: 856, read: true },
    { title: 'C Programming Language', author: 'Brian W. Kernighan and Dennis M. Ritchie', pages: 288, read: false },
    { title: 'Python Crash Course', author: 'Eric Matthes', pages: 544, read: true },
    { title: 'Cracking the Coding Interview', author: 'Gayle Laakmann McDowell', pages: 687, read: false },
    { title: 'Effective Java', author: 'Joshua Bloch', pages: 416, read: true },
    { title: 'Head First Design Patterns', author: 'Eric Freeman, Bert Bates, Kathy Sierra, Elisabeth Robson', pages: 694, read: false },
];

// Add the sample books to the library
sampleBooks.forEach(book => {
    addBookToLibrary(book.title, book.author, book.pages, book.read);
});
