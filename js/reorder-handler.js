(function() {

  function orderByAuthor() {
    var container = document.getElementById('card-container');
    var bookCards = document.getElementsByClassName('book-card');

    var oldCards = [];
    
    while (bookCards.length) {
      var removed = container.removeChild(bookCards[0]);
      oldCards.push(removed);
    }

    // only sorts by last name;
    var sorted = oldCards.sort(function(a, b) {
      // take the last name if it's there, or the single name or one-named authors
      // (e.g. Madonna). 
      var aLastName = a.dataset.author.split(' ')[1] || a.dataset.author.split(' ')[0];
      var bLastName = b.dataset.author.split(' ')[1] || b.dataset.author.split(' ')[0];

      if (aLastName < bLastName) {
        return -1;
      } else if (aLastName > bLastName) {
        return 1;
      } else {
        return 0;
      }
    });

    for (var i = 0; i < sorted.length; i++) {
      container.appendChild(sorted[i]);
    }
  }

  // attach the handler 
  var authOrder = document.getElementsByClassName('auth-order')[0];
  authOrder.addEventListener('click', orderByAuthor);


  function orderByTitle() {
    var container = document.getElementById('card-container');
    var bookCards = document.getElementsByClassName('book-card');

    var oldCards = [];
    
    while (bookCards.length) {
      var removed = container.removeChild(bookCards[0]);
      oldCards.push(removed);
    }

    // note: doesn't ignore a leading 'The' in title
    var sorted = oldCards.sort(function(a, b) {

      if (a.dataset.title < b.dataset.title) {
        return -1;
      } else if (a.dataset.title > b.dataset.title) {
        return 1;
      } else {
        return 0;
      }
    });

    for (var i = 0; i < sorted.length; i++) {
      container.appendChild(sorted[i]);
    }
  }

  // attach the orderByTitle handler
  var titleOrder = document.getElementsByClassName('title-order')[0];
  titleOrder.addEventListener('click', orderByTitle);

})();
