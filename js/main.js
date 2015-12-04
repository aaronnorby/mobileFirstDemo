// break these inner things out for reuse

(function() {

  function generateCard(book) {
    var card = document.createElement('section');
    card.classList.add('card');
    card.classList.add('book-card');

    var cardContent = document.createElement('section');
    cardContent.classList.add('card-content');

    //var img = document.createElement('img');

    var title = document.createElement('header');
    title.classList.add('card-header');
    title.classList.add('book-title');
    title.textContent = book.title;

    cardContent.appendChild(title);

    var author = document.createElement('span');
    author.classList.add('author');
    author.textContent = book.author;

    cardContent.appendChild(author);

    var cardButtons = document.createElement('div');
    cardButtons.classList.add('card-buttons');

    var sampleButton = document.createElement('button');
    sampleButton.classList.add('card-btn', 'sample-btn');
    sampleButton.textContent = 'Free Sample';
    cardButtons.appendChild(sampleButton);

    var reviewButton = document.createElement('button');
    reviewButton.classList.add('card-btn', 'review-btn');
    reviewButton.textContent = 'Review';
    cardButtons.appendChild(reviewButton);

    cardContent.appendChild(cardButtons);

    card.appendChild(cardContent);

    var container = document.getElementById('container');
    container.appendChild(card);

  }

  generateCard({author: 'Dickens', title: 'what'});

  for (var i = 0; i < window.bookData.books.length; i++) {
    generateCard(window.bookData.books[i]);
  }

  // add click handler to menu button when shown
  var menuBtn = document.getElementsByClassName('menu-btn')[0];
  menuBtn.addEventListener('click', function(e) {
    // add and remove 'menu-revealed' class to other elements
    var menuList = document.getElementsByClassName('menu-list')[0];
    menuList.classList.toggle('menu-revealed');
  });
  

})();
