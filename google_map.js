let geocoder;
let map;

function init() {
  geocoder = new google.maps.Geocoder();
  getCurrentLocation();
}

function getCurrentLocation() {

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(createMapFromNavigator);
  } else {
    createMap(-34.397, 150.644);
  }
}

function createMapFromNavigator(position) {
  console.log(position);
  createMap(position.coords.latitude, position.coords.longitude);
}

function createMap(latitude, longitude) {
  map = new google.maps.Map(document.getElementById('map'),
    {
      center: {lat: latitude, lng: longitude},
      zoom: 12,
    });
}

$('#weather-button').click(function() {

  const userInput = $('#city-input').val();

  geocoder.geocode({
    address: userInput
  }, function(results, status) {

    if (results && status === "OK") {
      console.log(results[0].geometry.location.lat() + ',' + results[0].geometry.location.lng());
      createMap(results[0].geometry.location.lat(), results[0].geometry.location.lng());
    } else {
      alert('Please enter a valid location.');
    }
  });
});