// Array for storing Book objects
const myLibrary = [];

// Book Constructor prototype
function Book(title, author, pages) {
	this.title = title;
	this.author = author;
	this.pages = pages;
}

// Function to delete book from both UI and myLibrary array
function deleteBook(index) {
	// Remove the book from the myLibrary array
	myLibrary.splice(index, 1);
	// Remove the book from the display
	displayBooks();
}

// Function to display books
function displayBooks() {
	// Clear existing content
	document.getElementById("display-book-data").innerHTML = "";

	// Loop through myLibrary array and display each book
	myLibrary.forEach((book, index) => {
		// Create div element for each book
		let bookDiv = document.createElement("div");

		// Populate div with book information
		bookDiv.textContent = `${book.title} by ${book.author}, ${book.pages} pages`;

		// Create delete button
		let deleteButton = document.createElement("button");
		deleteButton.textContent = "DELETE";

		// Add event listener to delete button
		deleteButton.addEventListener("click", () => {
			deleteBook(index);
		});

		// Append delete button to bookDiv
		bookDiv.appendChild(deleteButton);

		// Append bookDiv to display area
		document.getElementById("display-book-data").appendChild(bookDiv);
	});
}

// Handle form submission
function handleSubmit(e) {
	e.preventDefault(); // Prevent default form submission

	// Get form values
	const title = document.getElementById("title").value;
	const author = document.getElementById("author").value;
	const pages = document.getElementById("pages").value;

	// Create new book instance
	const book = new Book(title, author, pages);

	// Push data into array
	myLibrary.push(book);

	// Display updated books
	displayBooks();

	// Reset form fields
	document.getElementById("title").value = "";
	document.getElementById("author").value = "";
	document.getElementById("pages").value = "";
}

// Event listener for form submission
document.getElementById("book-form").addEventListener("submit", handleSubmit);

// Display initial books
displayBooks();

// display form button function
document.getElementById("new-book").addEventListener("click", function () {
	document.getElementById("book-form").style.display = "block";
});
