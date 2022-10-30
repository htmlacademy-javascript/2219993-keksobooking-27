const { get } = require("browser-sync");

const roomType = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkIn = ['12:00', '13:00', '14:00'];
const checkOut = ['12:00', '13:00', '14:00'];
const roomFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const roomPhotos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg']


function getRandomInt(max, min) {
  if(max < 0 || min < 0) {
    console.log('NaN');}
else{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

function getRandomFloat (min, max, precision){
  let x = (Math.random()*(max - min + 1) + min);
  if(x > max) {
  x = Math.floor(x);}
  return x.toFixed(precision);
}

// function getAuthor () {
//   let generatedNumbers = [];
//   for (i = 0; i <= 9; i++){
//   let a = getRandomInt(1, 10);
//   generatedNumbers.push(a);
//   }
//   let author = {
//     avatar: `img/avatars/user{$generatedNumbers[i]}.png`
//   }
//   return{ author
// }
function makeOffer () {
 function getLatitude () {
  let lat = getRandomFloat(35.65000, 35.70000, 5);
return lat;
 }

 function getLongitude () {
    let lng = getRandomFloat(139.7000, 139.80000, 5);
return lng;
 }
 function getAddress () {
let location = {
  lng: getLongitude(),
  lat: getLatitude()
}
  return { location }}
  return {
    title: 'Лучший букинг с Кексобукингом!',

    address: getAddress(),

    price: getRandomInt(0, 100),

    type: roomType[getRandomInt(0, roomType.length - 1)],

    rooms: getRandomInt(1, 100),

    guests: getRandomInt(1, 100),

    checkin: checkIn[getRandomInt(0, checkIn.length - 1)],

    checkout: checkOut[getRandomInt(0, checkOut.length - 1)],

    features: roomFeatures[getRandomInt(0, roomFeatures.length - 1)],

    description: 'Самый лучший номер!',

    photos: roomPhotos[getRandomInt(0, roomPhotos.length - 1)]}

    getAddress();

};

let offer = new makeOffer();
console.log(offer);
