// Google api text search

var searchBox;


function initialize() {


  // SearchBox api to do text search
  searchBox = new google.maps.places.SearchBox(
      /** @type {HTMLInputElement} */(document.getElementById('searchBox')));

    // add event listener to display the addresses when place is selected
  google.maps.event.addListener(searchBox, 'places_changed', function() {
    displayAddress();
  });

   //   $("searchBox").click(function(){
     // $.ajax({url: "demo_test.txt", success: function(result){
       // $("#div1").html(result);
    //  }});
    //});
}


function displayAddress() {
  // Get the place details from the autocomplete object.
  var places = searchBox.getPlaces();

 // Loop through the places and display the results
  for (var i = 0; i < places.length; i++) {
    var name = places[i].name;
    var address = places[i].formatted_address;
    console.log(name+" "+address)
   
      
  }
}

// add the initialize to window load event
google.maps.event.addDomListener(window, 'load', initialize);
