(function() {

  function yesHandler(e) {
    // show the form
    var formContainer = document.getElementsByClassName('input-container')[0];
    formContainer.classList.add('form-revealed');

    // show the overlay 
    var overlay = document.getElementsByClassName('overlay')[0];
    overlay.classList.add('form-revealed');
  }

  var yesBtn = document.getElementsByClassName('yes-btn')[0];
  yesBtn.addEventListener('click', yesHandler);

  function noHandler(e) {
    var welcomeCard = document.getElementsByClassName('welcome-card')[0];
    welcomeCard.style.display = 'none';
  }

  var noBtn = document.getElementsByClassName('no-btn')[0];
  noBtn.addEventListener('click', noHandler);

})();
