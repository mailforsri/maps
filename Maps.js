// This example displays an address form, using the autocomplete feature
// of the Google Places API to help users fill in the information.

var placeSearch, searchBox;


function initialize() {

  searchBox = new google.maps.places.SearchBox(
      /** @type {HTMLInputElement} */(document.getElementById('searchBox')));//,
   
  google.maps.event.addListener(searchBox, 'places_changed', function() {
    displayAddress();
  });
}


function displayAddress() {
  // Get the place details from the autocomplete object.
  var places = searchBox.getPlaces();

  // Get each component of the address from the place details
  // and fill the corresponding field on the form.
  for (var i = 0; i < places.length; i++) {
    var name = places[i].name;
    var address = places[i].formatted_address;
    console.log(name+" "+address)
   
      
  }
}


google.maps.event.addDomListener(window, 'load', initialize);
