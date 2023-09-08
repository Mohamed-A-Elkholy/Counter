const number = document.getElementById('number');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
let i =0;

increaseBtn.addEventListener("click",function (){
    i++;
    number.style.color ='green';
    number.innerText = i;
})
decreaseBtn.addEventListener("click",function (){
    i--;
    number.style.color = 'red';
    number.innerText = i;
})
resetBtn.addEventListener("click",function (){
    i = 0;
    number.style.color = '#111';
    number.innerText = i;
})
