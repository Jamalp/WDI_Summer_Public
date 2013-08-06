//Global Variables

//Time that increments in the game
var timerId = 0,
    time = 0;

//arrays with letters in them.
var lettersSmall  = _.shuffle(['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E']),
    lettersMedium = _.shuffle(['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E',
                     'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J']),
    lettersLarge  = _.shuffle(['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E',
                     'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J',
                     'K', 'K', 'L', 'L', 'M', 'M', 'N', 'N', 'O', 'O',
                     'P', 'P', 'Q', 'Q', 'R', 'R', 'S', 'S', 'T', 'T']);

//array of letters. will change based on size of game.
var letters = lettersSmall;


//last card/letter you clicked on. comes from the letter divs.
var lastId = '',
    lastCard = '';

//Code In Here gets executed once code is ready. ie hovering, clicking events//
$(function() {
  $('#small').click(startGame);
  $('#medium').click(startGame);
  $('#large').click(startGame);

});

// Initializes the game and creates the board
function startGame() {
  for (var i = 0; i < lettersSmall.length; i++) {         // do
    // $('#game').append('<div id='+ i + '>')  ;
    // $('#game').append($('<div id='+ i + ' class="column"></div>'));

    $('#game').append('<div class="column" id =' + i + '></div>');
    // ' + lettersSmall[i] + '

    // function changeLetter() {
    //   for (var i = 0; i < lettersSmall.length; i++) {
    $('#' + i).click(cardClick);

    // }
      // end
  }
}

// JQUERY WAY
// $(lettersSmall).each(function(index, letter) {
//     $('#game').append('<div id='+ index + '>');
//     // try this http://api.jquery.com/attr/
//     // try $('<div>')
//     $('#game div').addClass('column');
//     console.log("print" + letter);
// });

// Flips a card and checks for a match
// this defines what card click will do
// capture the ID of the card
function cardClick() {
    // $(lettersSmall).text();
    // for (var i = 0; i < letters.length; i++) {
      // $(this).show(letters);
      var thing = $(this).attr("id");
      console.log(thing);
    // }
  };
  // }



//Add hoverclass to cards.
function hovering() {
  $('#game').hover()
}

//Start the timer
function startTime() {

}

//Increment the timer and display the new time
function updateTime() {

}