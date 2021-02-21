//TODO: create var for api key and search
var authKey = "6398149920a7a183b9bab744a5b278b5";

var queryTerm = "";

// var queryURL = newURL;
var queryURL =
  "https://api.openweathermap.org/data/2.5/weather?appid=" +
  authKey +
  queryTerm +
  "&units=imperial";
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
    var citytag = data.name;
    $("#headw").append(citytag + " ");

    //get date
    var wrongtime = data.dt;
    var rightTime = new Date(wrongtime * 1000);
    dateString = rightTime.toString().split(" ").slice(0, 4).join(" ");
    console.log(dateString);
    $("#headw").append(dateString);
    var wtag = data.weather[0].icon;

    //icon
    var iconurl = "http://openweathermap.org/img/w/" + wtag + ".png";
    $("#wicon").attr("src", iconurl);

    //temp
    var temp = data.main.temp;
    $("#temp").append("Temperature: " + temp + String.fromCharCode(176) + "F");

    //humid
    var humid = data.main.temp;
    $("#humid").append("Humidity: " + humid + "%");

    //wind
    var wind = data.wind.speed;
    $("#wind").append("Wind: " + wind);

    //coord for 2nd call
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
      //TODO: get second sata information from one call api and use daily forecast and date for 5 day and uv index.

      console.log(finalData);

      //uv
      var uvIndex = finalData.current.uvi;
      $("#uv").append("UV index: " + uvIndex);

      // console.log(finalData.name);
      // console.log(finalData.weather[0].description);
    });
  }
}
//TODO:create click event for search

$("#searchBtn").on("click", function (event) {
  event.preventDefault();
  $("#headw").empty();
  $("#wicon").empty();

  queryTerm = $("#searchplz").val();

  console.log(queryTerm);

  var newURL = queryURL + "&q=" + queryTerm;

  console.log(newURL);

  runQuery(newURL);
});
