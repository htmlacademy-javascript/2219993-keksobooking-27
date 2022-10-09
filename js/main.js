// Генерация целого числа
function getRandomInt(max, min) {
  if (max < 0 || min < 0) {
    console.log("NaN");
  } else {
    min = Math.ceil(min);
    max = Math.floor(max);
    console.log(Math.floor(Math.random() * (max - min + 1) + min));
  }
}

//Генерация числа с плавающей точкой
function getRandomFloat(min, max, precision) {
  let x = Math.random() * (max - min + 1) + min;
  if (x > max) {
    x = Math.floor(x);
    return x;
  }
  console.log(x.toFixed(precision));
}
