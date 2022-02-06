// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level (4 on a scale of 0-18).
let map = L.map('mapid').setView([40.7, -94.5], 4); 

/* another way to set the map:
    let map = L.map("mapid", {
    center: [
        40.7, -94.5
    ],
    zoom: 4
    });
*/

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', { //We assign the tileLayer() method, as shown in the Quick Start Guide’s “Setting up the map” section to the variable streets. Leaflet doesn't provide a tile layer. Instead, it offers various tile layer APIs.
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	// id: 'mapbox.streets', //We add the id attribute and assign it mapbox.streets, which will show the streets on the map.
	accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map); //Finally, we call the addTo() function with our map object, map on our graymap object tile layer. The addTo() function will add the graymap object tile layer to our let map.


// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
	console.log(city)
	L.circleMarker(city.location, {
        radius: city.population/100000
    })
	.bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});




/* list of mapbox attributes:
    mapbox.streets
    mapbox.light
    mapbox.dark
    mapbox.satellite
    mapbox.streets-satellite
    mapbox.wheatpaste
    mapbox.streets-basic
    mapbox.comic
    mapbox.outdoors
    mapbox.run-bike-hike
    mapbox.pirates
    mapbox.emerald
    mapbox.high-contrast
*/