

// VARIABLES AND SOME SIMPLE DATA TYPES ///////////////////////////////////////////////////////////////////////////////

var my_string = 'women are sick at coding'
var my_num = 4
var my_boolean = true

// PRINTING TO CONSOLE ///////////////////////////////////////////////////////////////////////////////

// console.log('my name is eade')
// console.log('my name is jess')
// console.log('my name is lucia')
// console.log('my name is emma')

// console.log('-----------------------------')

// FUNCTIONS  ///////////////////////////////////////////////////////////////////////////////
function printSentence (name) {
  console.log(`'imagine this is a really long sentence that you didnt want to have to write several times, so you just want a function that inserted a name so that you could reuse it' said `+ name)
  }

var jess_name = "Jess"
var eade_name = "Eade"
var lucia_name = "Lucia"
var emma_name = "Emma"

printSentence(jess_name)
printSentence(eade_name)
printSentence(emma_name)
printSentence(lucia_name)


// FUNCTIONS WITH NUMBERS ///////////////////////////////////////////////////////////////////////////////
function addNumbers (a, b){
console.log( a + b)
}

// addNumbers(40, 34)
// addNumbers(7870, 384)



// IF BLOCKS INSIDE FUNCTIONS ///////////////////////////////////////////////////////////////////////////////
function isNumOver100 (a){
  if (a > 100) console.log(a + 'is over 100!')
  else {
    console.log(a + ' is less than a hundred')
  }
}

isNumOver100(200)
isNumOver100(12)

///////////////////////////////////////////////////////////////////////////////


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
