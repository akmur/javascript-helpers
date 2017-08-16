
/* global document google */

/**
  * This file contains code for the maps found in the website.
  * It takes care of converting an address to a location by using google's geocode code.
  *
  * @summary Map Loader
*/

const mapLoader = (function(){
    const mapsOnPage = document.querySelectorAll('.js-map');
  
    function geocodeAddress(geocoder, resultsMap, address){
      const defaultPosition = {lat: 45.4654, lng: 9.1859};
      geocoder.geocode({address}, (results, status) => {
        if (status === 'OK'){
          resultsMap.setCenter(results[0].geometry.location);
          const marker = new google.maps.Marker({
            map: resultsMap,
            position: results[0].geometry.location,
            animation: google.maps.Animation.DROP
          });
        } else {
          resultsMap.setCenter(milanoPosition);
          const marker = new google.maps.Marker({
            map: resultsMap,
            position: defaultPosition,
            animation: google.maps.Animation.DROP
          });
        }
      });
    }
  
    function generateMap(mapContainer){
      const address = mapContainer.dataset.address;
      const googleMap = new google.maps.Map(mapContainer, {
        zoom: 15,
        center: {lat: -34.397, lng: 150.644}
      });
      const geocoder = new google.maps.Geocoder();
      geocodeAddress(geocoder, googleMap, address);
    }
  
    function init(){
      for (const mapContainer of mapsOnPage){
        generateMap(mapContainer);
      }
    }
  
    return {
      init
    };
  })();
  
  module.exports = mapLoader;