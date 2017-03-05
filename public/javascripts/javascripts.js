$(document).ready(function() {
  $("#getMessage").on("click", function() {
    // create empty array of quotes
    var quotes = [];
    // get json from website
    $.getJSON("http://quotes.stormconsultancy.co.uk/quotes.json", function(json) {
      json.forEach(function(val) {
        quotes.push("<p>" + val.quote + " <br> - " + val.author + "</p>");
      });
      console.log(quotes[0]);
      $(".message").html(quotes[0]);
    });
  });
});
