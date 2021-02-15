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

function runQuery(newURL) {
  $.ajax({
    url: newURL,
    method: "GET",
  }).then(function (data) {
    //TODO: get first search data from api

    console.log(data);

    console.log(data.name);
    console.log(data.coord);
    coord = data.coord;
  });
  // $.ajax({
  //   url: newURL,
  //   method: "GET",
  // }).then(function (data) {
  //   //TODO: get first search data from api

  //   console.log(data);

  //   console.log(data.name);
  //   city = data.console.log(data.weather[0].description);
  // });
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
