// BUSINESS LOGIC 

// UI LOGIC 

$(document).ready(function() {
  const height = parseInt(prompt("How tall are you in inches?"));

  if (height <= 60) {
    $("#kids").css("background-color", "lightblue");
  } else if (height <= 71) {
    $("#both").css("background-color", "lightcoral")
  } else if (height <= 80) {
    $("#adult").css("background-color", "lightsteelblue");
  } else {
    $('#supertall').show();
  }
});


// if (lindsey === "available to drive") {          // if Lindsey can drive...
//   driveToBeach();                                // call the function to drive to the beach.
// } else if (busesAreRunning === true) {             // if Lindsey can't drive and the buses are running...
//   busToBeach();                                  // take the bus to the beach.
// } else {                                           // if all the other options fail...
//   watchMovies();                                 // watch movies instead.
// }