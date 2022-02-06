// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);
// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};
// Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport).addTo(map);

// Create a polyline using the line coordinates and make the line black.
L.polyline(line, {
    color: "yellow"
 }).addTo(map);

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