// Array for storing Book objects
const myLibrary = [];

function Book(title, author, numPages, hasRead) {
	this.title = title;
	this.author = author;
	this.numPages = numPages;
	this.hasRead = hasRead;
	this.info = function () {
		return `${title} by ${author}, ${numPages} pages, ${hasRead}`;
	};
}

function addBookToLibrary() {
	// Do stuff here...
	// push book instance to myLibrary
}

// const harryPotter = new Book(
// 	"Harry Potter",
// 	"J.K. Rowling",
// 	365,
// 	"not read yet"
// );
// const hitchHikersGuide = new Book(
// 	"The Hitch Hikers Guide to The Galaxy",
// 	"Douglas Adams",
// 	275,
// 	"Read"
// );

// Book.prototype.sayHello = function () {
// 	console.log("Hello");
// };

// harryPotter.sayHello();

// harryPotter.info();
// console.log(harryPotter);
// console.log(harryPotter.info());

// console.log(hitchHikersGuide.info());

// console.log(Object.getPrototypeOf(harryPotter) === Book.prototype);
// console.log(Object.getPrototypeOf(Book));
