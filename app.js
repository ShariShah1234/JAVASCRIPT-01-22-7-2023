const books = {
    book1: {
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      year: 2008,
    },
    book2: {
      title: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      year: 2011,
    },
    book3: {
      title: "You Don't Know JS",
      author: "Kyle Simpson",
      year: 2014,
    },
    // Add more books as needed
  };
  const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

for (const bookKey in books) {
  const option = document.createElement("option");
  option.value = bookKey;
  option.textContent = books[bookKey].title;
  searchInput.appendChild(option);
}

function search() {
  const selectedBookKey = searchInput.value;
  if (selectedBookKey) {
    const selectedBook = books[selectedBookKey];
    renderSearchResults(selectedBook);
  } else {
    searchResults.textContent = "Please select a book to search.";
  }
}

function renderSearchResults(book) {
  searchResults.innerHTML = `
    <h2>Search Results</h2>
    <p><strong>Title:</strong> ${book.title}</p>
    <p><strong>Author:</strong> ${book.author}</p>
    <p><strong>Year:</strong> ${book.year}</p>
  `;
}