let light;

let map;

function initMap() {

  let myLatLng = {lat: 51.9038695, lng: 4.4855031};

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: myLatLng,
    mapTypeId: 'terrain'
  });


  let marker = new google.maps.Marker({
    position: {lat: 51.9050127, lng: 4.4847497},
    map: map,
    title: 'Map marker',
    icon: './images/marker-02.png'
  });

  marker.addListener('click', function() {
    window.location = '/choices';
  });

  let marker2 = new google.maps.Marker({
    position: {lat: 51.9041871, lng: 4.4857913},
    map: map,
    title: 'Humphreys',
    icon: './images/marker-03.png'
  });

  marker2.addListener('click', function() {
    window.location = '/choices';
  });

  light.setMap(map);
}
