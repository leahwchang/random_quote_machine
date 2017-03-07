function getColor() {
  var lightColors = ["#d0d2fb", "#e6d0fb", "#fbd0d0", "#fbe6d0", "	#d0fbd0", "#d0f0fb"];
  var darkColors = ["#434cef", "#7612d3", "#d74242", "#d37612", "#0ea40e", "#1091bc"];
  // create randomColor to get colors[i]
  var background = Math.floor(Math.random() * lightColors.length);
  var font = Math.floor(Math.random() * darkColors.length);
  // body animate: background-color and color
  $("body").animate({
    "background-color": lightColors[background],
    "color": darkColors[font]}, 500);
}

function getQuote() {
  // create empty array of quotes
  var quotes = [];
  // get json from external website
  $.getJSON("http://quotes.stormconsultancy.co.uk/quotes.json")
  // getJSON success
  .done(function(json) {
    json.forEach(function(val) {
      quotes.push("<p class=\"quote\">" + val.quote + " </p> <br> <p class=\"author\"> - " + val.author + "</p>");
    });
    // create randomNumber to get quotes[i]
    var random = Math.floor(Math.random() * (quotes.length));
    // display animate with opacity
    $(".display").animate({
      opacity: 0
    }, 300, function() {
      $(this).animate({
        opacity: 1
      }, 300);
      // display quotes[randomNumber]
      $(".display").html(quotes[random]);
    });
  })
  // getJSON failure
  .fail(function(jqxhr, textStatus, error ) {
    var err = textStatus + " " + error;
    console.log( "Request Failed: " + err );
    $(".display").html("Error. Please try again later.");
  });
}

$(document).ready(function() {
  getQuote();
  getColor();
  $("#getQuote").on("click", getQuote);
  $("#getQuote").on("click", getColor);
});
