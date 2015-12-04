(function() {

  // generate buttons. Argument should look like this: 
  // [{text: 'clickme', classes: ['firstclass', secondclass']}]
  function generateCardButtons(buttonTextAndClasses) {
    
    var cardButtons = document.createElement('div');
    cardButtons.classList.add('card-buttons');

    for (var i = 0; i < buttonTextAndClasses.length; i++) {
      var button = document.createElement('button');
      var classes = buttonTextAndClasses[i].classes;
      for (var j = 0; j < classes.length; j++) {
        button.classList.add(classes[j]);
      }
      button.textContent = buttonTextAndClasses.text;

      cardButtons.appendChild(button);
    }

    return cardButtons;
  }

  function generateBookCard(book) {
    // this function successively creates all of the components of a card, appends
    // each to its appropriate parent, and finally appends the completed card to
    // the DOM 

    var card = document.createElement('section');
    card.classList.add('card');
    card.classList.add('book-card');

    var cardContent = document.createElement('section');
    cardContent.classList.add('card-content');

    var title = document.createElement('header');
    title.classList.add('card-header');
    title.classList.add('book-title');
    title.textContent = book.title;

    cardContent.appendChild(title);

    var author = document.createElement('span');
    author.classList.add('author');
    author.textContent = book.author;

    cardContent.appendChild(author);
    
    var buttonSpecs = [
      {
        text: 'Free Sample',
        classes: ['card-btn', 'sample-btn']
      },
      {
        text: 'Review',
        classes: ['card-btn', 'review-btn']
      }
    ];

    var cardButtons = generateCardButtons(buttonSpecs);

    cardContent.appendChild(cardButtons);

    card.appendChild(cardContent);

    var container = document.getElementById('card-container');
    container.appendChild(card);

  }

  generateBookCard({author: 'Dickens', title: 'what'});

  for (var i = 0; i < window.bookData.books.length; i++) {
    generateBookCard(window.bookData.books[i]);
  }

  // add click handler to menu button when shown
  var menuBtn = document.getElementsByClassName('menu-btn')[0];

  // break callback out 
  menuBtn.addEventListener('click', function(e) {
    // swap icon image
    e.target.parentNode.classList.toggle('menu-revealed');

    // add and remove 'menu-revealed' class to other elements
    var menuList = document.getElementsByClassName('menu-list')[0];
    menuList.classList.toggle('menu-revealed');

    // toggle overlay
    var overlay = document.getElementsByClassName('overlay')[0];
    overlay.classList.toggle('menu-revealed');
  });

  // enable adding a book to the list via input form 
  function addBook(e) {
    e.preventDefault();

    var titleInput = document.getElementById('book-title');
    var authorInput = document.getElementById('author-name');

    title = titleInput.value;
    author = authorInput.value;

    // reset the form 
    titleInput.value = '';
    authorInput.value = '';

    // check to see if the book is already in the system
    for (var i = 0; i < window.bookData.books.length; i++) {
      if (window.bookData.books[i].title === title || window.bookData.books[i].author === author) {
        alert('It appears you\'ve read this book before. No need to enter it again');
        return;
      }
    }

    // add new book to bookData 
    window.bookData.books.push({title: title, author: author});

    // generate a new card and add it to the page
    generateBookCard({author: author, title: title});

  }
  
  var form = document.getElementById('add-book');

  form.addEventListener('submit', addBook);

  
})();



// add click handler to overlay so that the menu hides on clickaway 
