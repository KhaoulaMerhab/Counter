//declare a counter 
let count = 0;

const value = document.querySelector(".value");
const btn = document.querySelectorAll(".btn");

btn.forEach(function(b){
    b.addEventListener('click',function(item){
        const classes = item.currentTarget.classList;
        if (classes.contains('decrease')){
            count--;
            value.style.color = 'red';
        }
        else if(classes.contains('increase')){
            count++;
            value.style.color = 'green';
        }
        else if(classes.contains('reset')){
            count = 0;
            value.style.color = '#111';
        }
        value.textContent = count ;
        
    });
});