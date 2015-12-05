// disable menu button when form is open
(function() {
  // functions to generate book-cards, handle the menu button, and add cards to the
  // dom from preexisting data

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
      button.textContent = buttonTextAndClasses[i].text;

      cardButtons.appendChild(button);
    }

    return cardButtons;
  }

  // function to create a new book card and append it to the dom. We're attaching
  // it to the window because the form handler needs access to it
  window.generateBookCard = function generateBookCard(book) {
    // this function successively creates all of the components of a card, appends
    // each to its appropriate parent, and finally appends the completed card to
    // the DOM 

    var card = document.createElement('section');
    card.classList.add('card');
    card.classList.add('book-card');

    // add an image. Default image is the dog
    var img = document.createElement('img');
    var imagePath = book.imagePath ? book.imagePath : 'assets/pooch.png';
    img.setAttribute('src', imagePath);

    // attach image to card
    card.appendChild(img);

    var cardContent = document.createElement('section');
    cardContent.classList.add('card-content');

    var title = document.createElement('header');
    title.classList.add('card-header');
    title.classList.add('book-title');
    title.innerHTML = '<h3>' + book.title + '</h3>';

    cardContent.appendChild(title);

    var author = document.createElement('span');
    author.classList.add('author');
    author.textContent = 'By ' + book.author;

    cardContent.appendChild(author);
    
    var buttonSpecs = [
      {
        text: 'Free Sample',
        classes: ['card-btn', 'sample-btn']
      },
      {
        text: 'Review',
        classes: ['card-btn', 'review-btn', 'btn-default']
      }
    ];

    var cardButtons = generateCardButtons(buttonSpecs);

    //cardContent.appendChild(cardButtons);

    card.appendChild(cardContent);
    card.appendChild(cardButtons);

    var container = document.getElementById('card-container');
    container.appendChild(card);

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

  

  // add all of the books in the database to DOM
  for (var i = 0; i < window.bookData.books.length; i++) {
    generateBookCard(window.bookData.books[i]);
  }
  
})();



// add click handler to overlay so that the menu hides on clickaway 
