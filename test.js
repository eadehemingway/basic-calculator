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
var dec = document.getElementById('.')
var add = document.getElementById('+')
var sub = document.getElementById('-')
var div = document.getElementById('/')
var times = document.getElementById('*')
var perc = document.getElementById('%')
var equals = document.getElementById('=')


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

dec.addEventListener('click', function(){
  addDigit('.');
})

add.addEventListener('click', function(){
  addDigit('+');
})

sub.addEventListener('click', function(){
  addDigit('-');
})

times.addEventListener('click', function(){
  addDigit('*');
})

div.addEventListener('click', function(){
  addDigit('/');
})

perc.addEventListener('click', function(){
  addDigit('%');
})



equals.addEventListener('click', function(){
  numscreen.textContent = eval(numscreen.textContent);
})
