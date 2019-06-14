let light, police, userOne, userTwo, marker;

// let lightButton = document.querySelector('.button__light');
// let policeButton = document.querySelector('.button__police');
// let userButton = document.querySelector('.button__user');
// let lightBox = document.querySelector('.button__yellow');
// let policeBox = document.querySelector('.button__blue');
// let userBox = document.querySelector('.button__green');
// lightBox.classList.toggle('button__yellow--clicked')
//
// lightButton.addEventListener('click', () => {
//   lightBox.classList.toggle('button__yellow--clicked')
//   light.setMap(light.getMap() ? null : map);
// });
//
// policeButton.addEventListener('click', () => {
//   policeBox.classList.toggle('button__blue--clicked')
//   police.setMap(police.getMap() ? null : map);
// });
//
// userButton.addEventListener('click', () => {
//   userBox.classList.toggle('button__green--clicked')
//   userOne.setMap(userOne.getMap() ? null : map);
//   userTwo.setMap(userTwo.getMap() ? null : map);
// });

let map;

function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: {lat: 51.9170588, lng: 4.484828},
    mapTypeId: 'terrain'
  });

  light.setMap(map);

}
