
//TODO: create var for api key and search
var authKey = "6398149920a7a183b9bab744a5b278b5";

var queryTerm = ""



//TODO: create functions

function runQuery(numResults, queryURL){
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?appid=" + authKey + "&q=Seattle";

  $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(cityData){
      //TODO: get first search data from api 
      console.log(cityData);
      
      
     
    
    })
  }
//TODO:create click event for search

$("#searchBtn").on("click", function(){



  //  userSearch = $("#search").val().trim();
   // console.log(userSearch)

    runQuery(1, "https://api.openweathermap.org/data/2.5/weather?appid=" + authKey + "&q=Seattle");


    return false;

})