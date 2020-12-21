
//TODO: create var for api key and search
var authKey = "6398149920a7a183b9bab744a5b278b5";

var queryTerm = ""

var queryURL = "https://api.openweathermap.org/data/2.5/weather?appid=" + authKey //+ "&q=Portland";

//TODO: create functions

function runQuery(numResults, queryURL){
  

  $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(cityData){
      //TODO: get first search data from api 
     
      console.log(cityData);
      
      
     
    
    })
}
  




//TODO:create click event for search

$("#searchBtn").on("click", function(event) {
  event.preventDefault()


    queryTerm = $("#searchplz").val();
    
    console.log(queryTerm);

    var newURL = queryURL + "&q=" + queryTerm;

    console.log(newURL)
  //  runQuery(1, "https://api.openweathermap.org/data/2.5/weather?appid=" + authKey + "&q=Seattle";


  //  return false;

})