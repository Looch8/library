// display form button function
// function displayForm() {
// 	document.getElementById("book-form").style.display = "flex";
// }

document.getElementById("new-book").addEventListener("click", displayForm);
function displayForm() {
	document.getElementById("book-form").style.display = "flex";
}

// Array for storing Book objects
const myLibrary = [];

// Book Constructor prototype
function Book(title, author, numPages, hasRead) {
	this.title = title;
	this.author = author;
	this.numPages = numPages;
	this.hasRead = hasRead;
	this.info = function () {
		return `${title} by ${author}, ${numPages} pages, ${hasRead}`;
	};
}

// Book instances
const book1 = new Book("test1", "info", 257, "Read");
const book2 = new Book("test2", "info", 345, "Not Read");

function addBookToLibrary(book) {
	// Get user input

	// push book instance to myLibrary
	myLibrary.push(book);
}
addBookToLibrary(book1);
addBookToLibrary(book2);
console.log(myLibrary);

// Function to loop through array and display to screen
function displayBook() {
	for (let book of myLibrary) {
		// Create book container
		let bookContainer = document.getElementById("display-book-data");

		// Create paragraph element
		let card = document.createElement("div");

		// create content using data from object
		let text = document.createTextNode(
			`${book.title} by ${book.author}, ${book.numPages} pages, ${book.hasRead}`
		);

		// append text node to paragraph element
		card.appendChild(text);

		// append paragraph element to the output container
		bookContainer.appendChild(card);
	}
}
displayBook();
