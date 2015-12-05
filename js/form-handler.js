(function() {
  // enable adding a book to the list via input form 
  var form = document.getElementById('add-book');

  function addBook(e) {
    e.preventDefault();

    var titleInput = document.getElementById('book-title');
    var authorInput = document.getElementById('author-name');

    title = titleInput.value;
    author = authorInput.value;

    // Note: at this point the inputs should be sanitized before using them in
    // constructing new DOM elements. For the purposes of this test, we're setting
    // that aside.

    // reset the form 
    titleInput.value = '';
    authorInput.value = '';

    // check to see if the book is already in the system
    for (var i = 0; i < window.bookData.books.length; i++) {
      if (window.bookData.books[i].title === title && window.bookData.books[i].author === author) {
        alert('It appears you\'ve read this book before. No need to enter it again');
        return;
      }
    }

    // add new book to bookData 
    window.bookData.books.push({title: title, author: author});

    // generate a new card and add it to the page. Relies on generateBookCard from
    // main.js
    window.generateBookCard({author: author, title: title});

    // hide the form again 
    var formContainer = document.getElementsByClassName('input-container')[0];
    formContainer.classList.remove('form-revealed');

    // hide the overlay 
    var overlay = document.getElementsByClassName('overlay')[0];
    overlay.classList.remove('form-revealed');

    // make sure menu button is enabled
    var menuBtn = document.getElementsByClassName('menu-btn')[0];
    menuBtn.disabled = false;


  }
  
  form.addEventListener('submit', addBook);

  // hide form on cancel 
  function cancelAdd(e) {
    // hide the form
    var formContainer = document.getElementsByClassName('input-container')[0];
    formContainer.classList.remove('form-revealed');

    // hide the overlay 
    var overlay = document.getElementsByClassName('overlay')[0];
    overlay.classList.remove('form-revealed');

    // make sure menu button is enabled
    var menuBtn = document.getElementsByClassName('menu-btn')[0];
    menuBtn.disabled = false;
  }

  var cancelBtn = document.getElementsByClassName('cancel-btn')[0];
  cancelBtn.addEventListener('click', cancelAdd);

})();
