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
