
var sentence = 'women are sick at coding'
console.log(sentence)
var sum = 4 + 3
console.log(sum)

function printName (str) {
  console.log("my name is "+ str)
  }

var jess_name = "jess"
var eade_name = "eade"
printName(jess_name) // will print "my name is jess"
printName(eade_name) // will print "my name is eade"



var values = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '.',
  '+',
  '-',
  '/',
  '*'
]

values.forEach(function (val) {
  addEventListener(val)
})

function addEventListener(str) {
  var digit = document.getElementById(str)

  digit.addEventListener('click', function () {
    addDigit(str)
  })
}

var numscreen = document.getElementById('numscreen')

function addDigit(dig) {
  if (numscreen.textContent === '0') {
    numscreen.textContent = dig
  } else {
    numscreen.textContent = numscreen.textContent + dig
  }
}

document.getElementById('on').addEventListener('click', function () {
  numscreen.textContent = '0'
})

document.getElementById('reset').addEventListener('click', function () {
  numscreen.textContent = '0'
})

document.getElementById('=').addEventListener('click', function () {
  numscreen.textContent = eval(numscreen.textContent)
})
