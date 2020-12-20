







//function searchCity(){
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=6398149920a7a183b9bab744a5b278b5";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      
      console.log(response)
      
      // Create and save references to 3 td elements containing the Title, Year, and Actors from the AJAX response object
      // var tdtitle = $("").text(response.Title)
      // var tdyear = $("").text(response.Year)
      // var tdactors = $("").text(response.Actors)
      // Append the td elements to the new table row
      // tr.append(tdtitle, tdyear, tdactors)
      // Append the table row to the tbody element
      // $("").append()
      
    });
//  }

//  searchCity("Titanic")
//  searchCity("Jaws")