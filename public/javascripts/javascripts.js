$(document).ready(function() {
  $("#getQuote").on("click", function() {
    // get json from website
    $.getJSON("http://quotes.stormconsultancy.co.uk/quotes.json", function(json) {
      // create empty array of quotes
      var quotes = [];
      json.forEach(function(val) {
        quotes.push("<p>" + val.quote + " <br> - " + val.author + "</p>");
      });
      // create randomNumber to get quotes[i]
      var randomNumber = Math.floor(Math.random() * (quotes.length));
      $(".display").html(quotes[randomNumber]);
    });
  });
});
