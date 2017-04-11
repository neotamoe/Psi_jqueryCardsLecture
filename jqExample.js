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
}); // end doc ready
