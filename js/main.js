const roomType = ["palace", "flat", "house", "bungalow", "hotel"];
const checkIn = ["12:00", "13:00", "14:00"];
const checkOut = ["12:00", "13:00", "14:00"];
const roomFeatures = [
  "wifi",
  "dishwasher",
  "parking",
  "washer",
  "elevator",
  "conditioner",
];
const roomPhotos = [
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg",
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg",
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg",
];

function getRandomInt(max, min) {
  if (max < 0 || min < 0) {
    console.log("NaN");
  } else {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

function getRandomFloat(min, max, precision) {
  let x = Math.random() * (max - min + 1) + min;
  if (x > max) {
    x = Math.floor(x);
  }
  return x.toFixed(precision);
}

function getAuthor() {
  var arr, max_number, i, unic;
  arr = [];
  max_number = 10;
  while (arr.length < 10) {
    do {
      unic = true;
      a = Math.floor(Math.random() * 10) + 1;
      for (i = 0; i < arr.length; i++) {
        if (a == arr[i]) {
          unic = false;
          break;
        }
      }
    } while (!unic);
    if (a < 10) {
      a = "0" + a.toString();
    }
    arr.push(a);
  }
  let author = {
    avatar: `img/avatars/user${arr[i]}.png`,
  };
  return author;
}
function makeOffer() {
  function getLatitude() {
    let lat = getRandomFloat(35.65, 35.7, 5);
    return lat;
  }

  function getLongitude() {
    let lng = getRandomFloat(139.7, 139.8, 5);
    return lng;
  }

  function getLocation() {
    let location = {
      lng: getLongitude(),
      lat: getLatitude(),
    };
    return location;
  }
  let newAd = {
    author: getAuthor(),

    title: "Лучший букинг с Кексобукингом!",

    address: "{{location.lat}}, {{location.lng}}",

    price: getRandomInt(0, 100),

    type: roomType[getRandomInt(0, roomType.length - 1)],

    rooms: getRandomInt(1, 100),

    guests: getRandomInt(1, 100),

    checkin: checkIn[getRandomInt(0, checkIn.length - 1)],

    checkout: checkOut[getRandomInt(0, checkOut.length - 1)],

    features: roomFeatures[getRandomInt(0, roomFeatures.length - 1)],

    description: "Самый лучший номер!",

    photos: roomPhotos[getRandomInt(0, roomPhotos.length - 1)],

    location: getLocation(),
  };
  return newAd;
}
function getArrayOfAds() {
  let arrayOfAds = [];
  for (i = 0; i <= 9; i++) {
    arrayOfAds.push(makeOffer());
  }
  return arrayOfAds;
}
