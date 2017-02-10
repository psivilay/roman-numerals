//business back end logic, evaluates and manages data.
//May be called by front end.
//Usually completed first before user interface logic is written
var romanNumeral = function(userNumber) {
  
};


//user interface front end logic,
//handles event listening, user input, DOM manipulation
$(document).ready(function() {
  $("form#roman-numeral").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("input#user-input").val());
    var result = romanNumeral(userNumber);
    $(".user-input").text(userNumber);
    $("#result").show();
  });
});
