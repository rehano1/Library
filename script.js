const myLibrary = [

];


// constructor function
class Book {
    constructor (title, author, pages, read) {

        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    
    readTheBook() {
        this.read = !this.read;
}
    }
    
// to Delete an array item
function removeItem(index) {
    myLibrary.splice(index, 1); // remove the book at specified index
    displayLibary(); // refressh the library display
}

// to store into myLibrary
function addToLibrary (title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push (newBook);


}

// to Display
function displayLibary () {
    const libraryContainer = document.querySelector('#library-container');
    libraryContainer.innerHTML = ''; //clear previous content

    myLibrary.forEach((book, index) => {
        // Create a card for each book
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        // Book Details 
        bookCard.innerHTML = `
        <h3><strong>Title:</strong> ${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Pages:</strong> ${book.pages}</p>
        <p><strong>Read:</strong> ${book.read ? 'Yes' : 'No'}</p>
        <button class="button" onclick="toggleReadStatus(${index})">Toggle Read</button>
        <button class="button" onclick="removeItem(${index})">Delete</button>
        `
        libraryContainer.appendChild(bookCard);
    });
}
// function to toggle the read status of the book
function toggleReadStatus(index) {
    myLibrary[index].readTheBook();
    displayLibary();
}



// to show the form 
function showForm () {
    const formContainer = document.querySelector('#form-container');
    formContainer.classList.add('active'); //  Show the Form
} 

// Function to add books from the form
function addBookFromForm() {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = parseInt(document.querySelector('#pages').value, 10);
    const read = document.querySelector('#read').checked;
    const formContainer = document.querySelector('#form-container');

    if (title && author && pages) { 
        addToLibrary(title, author, pages, read);
        displayLibary();

        // Clear Form Fields
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#pages').value = '';
        document.querySelector('#read').checked = false;

        // Hide the Form 
        formContainer.classList.remove('active');
    } else {
        alert("Please fill in all fields")
    }

}
