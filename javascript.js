//TODO: create var for api key and search
var authKey = "6398149920a7a183b9bab744a5b278b5";

var queryTerm = "";

// var queryURL = newURL;
var queryURL =
  "https://api.openweathermap.org/data/2.5/weather?appid=" +
  authKey +
  queryTerm;
//TODO: create functions
var data = "";
//TODO: get first search data from api rolling 2 call to one api

function runQuery(newURL) {
  $.ajax({
    url: newURL,
    method: "GET",
  }).then(function (data) {
    console.log(data);
    //TODO: take first api call get and destruct object for appending most data
    console.log(data.name);
    console.log(data.coord);
    coord = data.coord;
    sunAjaxtwo(coord);
  });
  function sunAjaxtwo(coord) {
    console.log(coord);
    $.ajax({
      url:
        "https://api.openweathermap.org/data/2.5/onecall?lat=" +
        coord.lat +
        "&lon=" +
        coord.lon +
        "&exclude=minutely,hourly&appid=6398149920a7a183b9bab744a5b278b5",
      method: "GET",
    }).then(function (finalData) {
      //TODO: get second sata information from one call api and use daily forecast and date for 5 day

      console.log(finalData);

      // console.log(finalData.name);
      // console.log(finalData.weather[0].description);
    });
  }
}
//TODO:create click event for search

$("#searchBtn").on("click", function (event) {
  event.preventDefault();

  queryTerm = $("#searchplz").val();

  console.log(queryTerm);

  var newURL = queryURL + "&q=" + queryTerm;

  console.log(newURL);

  runQuery(newURL);
});
