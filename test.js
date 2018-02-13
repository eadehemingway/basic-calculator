var on = document.getElementById('on')
var ce = document.getElementById('reset')
var numscreen = document.querySelector('h1')
var one = document.getElementById('1')
var two = document.getElementById('2')
var three = document.getElementById('3')
var four = document.getElementById('4')
var five = document.getElementById('5')
var six = document.getElementById('6')
var seven = document.getElementById('7')
var eight = document.getElementById('8')
var nine = document.getElementById('9')
var zero = document.getElementById('0')


function addDigit(dig){
  if(numscreen.textContent === '0'){
    numscreen.textContent = dig;
  }else{
    numscreen.textContent = numscreen.textContent + dig;
  }
}

on.addEventListener('click', function(){
  numscreen.textContent = '0';
})

ce.addEventListener('click', function(){
  numscreen.textContent = '0';
})

one.addEventListener('click', function(){
  addDigit('1');
})

two.addEventListener('click', function(){
  addDigit('2');
})

three.addEventListener('click', function(){
  addDigit('3');
})

four.addEventListener('click', function(){
  addDigit('4');
})

five.addEventListener('click', function(){
  addDigit('5');
})

six.addEventListener('click', function(){
  addDigit('6');
})

seven.addEventListener('click', function(){
  addDigit('7');
})

eight.addEventListener('click', function(){
  addDigit('8');
})

nine.addEventListener('click', function(){
  addDigit('9');
})

zero.addEventListener('click', function(){
  addDigit('0');
})
