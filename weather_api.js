$(document).ready(function(){

  var apiKey = 'fb46198f15dcd57c7964d1eb617735a8';
  var weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=' + apiKey + '&units=imperial&q=';

  $('#weather-button').on('click', function(){
    var inputValue = $('#city-input').val().toLowerCase().split(" ").join("+");
    weatherApiUrl += inputValue;
    $.ajax({
      type: 'GET',
      url: weatherApiUrl,
      success: function(response){
         console.log(response);
        var weather = $('<p>');
        weather.text(response.position);
      }
    });
  });

})