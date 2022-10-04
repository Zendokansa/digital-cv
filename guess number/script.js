'use strict';

let secret_number = Math.trunc(Math.random()*20+1) ;
console.log(secret_number);
// console.log(document.querySelector('.number').textContent=number);
// console.log(document.querySelector('.number').textContent=number);
let score = 10;
const display_message = function(message){
    document.querySelector('.message').textContent= message ;
}

    
let highscore= Number(document.querySelector('.highscore').textContent);

// click check action
    document.querySelector('.check').addEventListener('click', function(){
    let score = Number(document.querySelector('.score').textContent);
    const guess = Number(document.querySelector('.guess').value);
   // console.log(guess , typeof guess);
   console.log(highscore,score);
if( !guess)
{
   display_message("please input number");
}
else if ( guess === secret_number)
    { document.querySelector('.number').textContent=secret_number;
    document.querySelector('body').style.backgroundColor ='#60b347';
    if(score>highscore)
    {    document.querySelector('.highscore').textContent=score;
        // document.querySelector('.highscore').textContent=label_score;
    }
  
    if (score ==10)
    { display_message('You are Master');     
}
    else
    {display_message("You win");}
    
    }

else if (score <1)
{ if(score<1){
    display_message('DM, ngu VL');
    return;}
}
else
{   
    score-=1;
    console.log(score);
    document.querySelector('.score').textContent=score;
   if(guess>secret_number)
   {
    display_message(guess + " is too high");
   
   }
   else
   {
    display_message (guess + " is too low");
   }
}
}
)

//  click again button
document.querySelector('.again').addEventListener('click',function()
{   score=10;
    secret_number = Math.trunc(Math.random()*20+1) ; 
    console.log(secret_number);
    document.querySelector('.number').textContent='?'; 
    display_message("start guessing.....");
    document.querySelector('.score').textContent='10';
    console.log(highscore);
    if (Number(document.querySelector('.highscore').textContent)==10)
    {
        document.querySelector('.highscore').textContent=0;
    }
    document.querySelector('.guess').value="";
    document.querySelector('body').style.backgroundColor = '#222';
}
)