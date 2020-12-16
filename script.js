function getRndInteger(min, max) {
  return Math.floor(Math.random() * (min + max));
}

let c = +document.getElementById('demo').value
let i = +document.getElementById('x1').value

if (c === i) {
  alert= ("correct");
}
