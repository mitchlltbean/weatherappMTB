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
var pastSearches = [];
function saveSearch() {
  window.localStorage["searchplz"] = document.getElementById("searchplz").value;
}
//TODO:create click event for search
$("#searchBtn").on("click", function (event) {
  event.preventDefault();
  $("#headw").empty();
  $("#temp").empty();
  $(".car").empty();
  $("#humid").empty();
  $("#wind").empty();
  $("#uvIndex").empty();

  queryTerm = $("#searchplz").val();

  console.log(queryTerm);

  var newURL = queryURL + "&q=" + queryTerm;

  console.log(newURL);

  runQuery(newURL);
});

function runQuery(newURL) {
  $.ajax({
    url: newURL,
    method: "GET",
  }).then(function (data) {
    console.log(data, "!!!!!!!!!!!");
    //TODO: take first api call get and destruct object for appending most data

    var citytag = data.name;
    $("#headw").append(citytag + " ");

    //get date
    var newDate = $("<span>");
    var wrongtime = data.dt;
    var rightTime = new Date(wrongtime * 1000);
    dateString = rightTime.toString().split(" ").slice(0, 4).join(" ");

    newDate.text(dateString);
    $("#headw").append(newDate);

    //icon
    var newIcon = $("<img>");
    var wtag = data.weather[0].icon;
    var iconurl = "http://openweathermap.org/img/w/" + wtag + ".png";
    newIcon.attr("src", iconurl);
    $("#wicon").attr("src", iconurl);

    //temp
    var newTemp = $("<span>");
    var temp = JSON.stringify(data.main.temp);

    newTemp.text(temp);
    $("#temp").append(
      "Temperature: " +
        data.main.temp.toString() +
        String.fromCharCode(176) +
        "F"
    );

    //humid
    var newHumid = $("<span>");
    var humid = data.main.humidity;
    newHumid.text(humid);
    $("#humid").append("Humidity: " + data.main.humidity.toString() + "%");

    //wind
    var newWind = $("<span>");
    var wind = data.wind.speed;
    newWind.text(wind);
    $("#wind").append("Wind: " + data.wind.speed.toString() + " MPH");

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
        "&exclude=minutely,hourly&appid=6398149920a7a183b9bab744a5b278b5&units=imperial",
      method: "GET",
    }).then(function (finalData) {
      //TODO: get second sata information from one call api and use daily forecast and date for 5 day and uv index.

      console.log(finalData);

      //uv

      var uvIndex = finalData.current.uvi;
      $("#uvIndex").append("UV index: " + uvIndex);

      var daily = finalData.daily;
      console.log(daily);

      //date
      var wrongtime = daily[1].dt;
      var rightTime = new Date(wrongtime * 1000);

      $("#dateone").append(
        rightTime.toString().split(" ").slice(0, 4).join(" ")
      );

      //temp
      $("#tempone").append(
        "Temperature: " +
          daily[1].temp.day.toString() +
          String.fromCharCode(176) +
          "F"
      );
      //icon
      var newIcon = $("<img>");
      var wtag = daily[1].weather[0].icon;
      var iconurl = "http://openweathermap.org/img/w/" + wtag + ".png";
      newIcon.attr("src", iconurl);
      $("#iconone").attr("src", iconurl).width("50px");

      $("#humidone").append("Humidity: " + daily[1].humidity.toString() + "%");
      //////////////////////
      //date
      var wrongtime = daily[2].dt;
      var rightTime = new Date(wrongtime * 1000);

      $("#datetwo").append(
        rightTime.toString().split(" ").slice(0, 4).join(" ")
      );

      //temp
      $("#temptwo").append(
        "Temperature: " +
          daily[2].temp.day.toString() +
          String.fromCharCode(176) +
          "F"
      );
      //icon

      var wtag = daily[2].weather[0].icon;
      var iconurl = "http://openweathermap.org/img/w/" + wtag + ".png";

      $("#icontwo").attr("src", iconurl).width("50px");

      //humidity
      var humid = daily[2].humidity;

      $("#humidtwo").append("Humidity: " + humid.toString() + "%");
      ////////////////////////////////
      //date
      var wrongtime = daily[3].dt;
      var rightTime = new Date(wrongtime * 1000);

      $("#datethree").append(
        rightTime.toString().split(" ").slice(0, 4).join(" ")
      );

      //temp
      $("#tempthree").append(
        "Temperature: " +
          daily[3].temp.day.toString() +
          String.fromCharCode(176) +
          "F"
      );
      //icon

      var wtag = daily[3].weather[0].icon;
      var iconurl = "http://openweathermap.org/img/w/" + wtag + ".png";

      $("#iconthree").attr("src", iconurl).width("50px");

      //humidity
      var humid = daily[3].humidity;

      $("#humidthree").append("Humidity: " + humid.toString() + "%");
      ////////////////////////////////
      //date
      var wrongtime = daily[4].dt;
      var rightTime = new Date(wrongtime * 1000);

      $("#datefour").append(
        rightTime.toString().split(" ").slice(0, 4).join(" ")
      );

      //temp
      $("#tempfour").append(
        "Temperature: " +
          daily[4].temp.day.toString() +
          String.fromCharCode(176) +
          "F"
      );
      //icon

      var wtag = daily[4].weather[0].icon;
      var iconurl = "http://openweathermap.org/img/w/" + wtag + ".png";

      $("#iconfour").attr("src", iconurl).width("50px");

      //humidity
      var humid = daily[4].humidity;

      $("#humidfour").append("Humidity: " + humid.toString() + "%");
      ////////////////////////////////
      //date
      var wrongtime = daily[5].dt;
      var rightTime = new Date(wrongtime * 1000);

      $("#datefive").append(
        rightTime.toString().split(" ").slice(0, 4).join(" ")
      );

      //temp
      $("#tempfive").append(
        "Temperature: " +
          daily[5].temp.day.toString() +
          String.fromCharCode(176) +
          "F"
      );
      //icon

      var wtag = daily[5].weather[0].icon;
      var iconurl = "http://openweathermap.org/img/w/" + wtag + ".png";

      $("#iconfive").attr("src", iconurl).width("50px");

      //humidity
      var humid = daily[5].humidity;

      $("#humidfive").append("Humidity: " + humid.toString() + "%");
    });
  }
}
