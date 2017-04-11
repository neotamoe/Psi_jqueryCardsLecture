var cards = [ '1 hearts', '2 hearts', '3 hearts', '4 hearts', '5 hearts' ];

$( document ).ready( function(){
  // function that runs when the document is ready
  $( '#buttonHere' ).on( 'click', function(){
    // this runs on a click of the element with id buttonHere
    console.log( 'on click for buttonHere' );
    // get text from element with id of textIn
    var outputText = 'you typed: ' + $( '#textIn' ).val();
    console.log( outputText );
    // put it on the DOM
    $( '#outputList' ).append( '<li>' + $( '#textIn' ).val() + '</li>' );
    // clear out input
    $( '#textIn' ).val( '' );
  }); // end buttonHere on click

  var displayCards = function(){
    console.log( 'in displayCards' );
    // loop through cards array
    for (var i = 0; i < cards.length; i++) {
      // for each card
      // display as list item in ul with id of cardsList (append)
      $( '#cardsList' ). append( '<li>' + cards[i] + '</li>' );
    } // end for
  }; // end displayCards

  // run on document ready
  displayCards();
}); // end doc ready
