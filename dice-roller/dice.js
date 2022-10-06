'use strict';
// idtentify who play
// roll dice
// display dice
// if roll to 1, all point will be remove and change turn
/* listen hold to add point to score and change turen
 add dice to current point when press hold and change turn*/


/// variable
 let number =0;
 
 const display_dice_dot = function(dot){
  document.querySelector(dot).classList.remove("hidden");
 }

 const collapse_dice_dot = function(dot){
    document.querySelector("."+dot).classList.add("hidden");
 }
 const point =[0];
 for(let i=1; i<7;i++)
{ 
  point.push(".dot_"+[i]);
}
 console.log(point);

//  roll dice
let temp_score = 0;
    
    
        const player_1 = document.querySelector(".player_1").classList;
        const player_2 = document.querySelector(".player_2").classList;
        let score_1 = Number(document.querySelector(".score_1").textContent);
        let score_2 = Number(document.querySelector(".score_2").textContent);
        // switch player 
        const switch_player = function(){
      
          if (player_1.contains("glow"))
          { 
            player_1.remove("glow");
            player_2.add("glow");
            document.querySelector(".current_score_2").textContent=0;
          }
          else
          {
            player_1.add("glow");
            player_2.remove("glow");
            document.querySelector(".current_score_1").textContent=0;
          }
        }
        document.querySelector(".roll").addEventListener("click",function(){
          const dice_number = Math.trunc(Math.random()*6+1);
          console.log(dice_number);
          document.querySelector(".dice-roller").classList.remove("hidden");
          document.querySelector(".dot_1").classList.add("hidden");
          document.querySelector(".dot_2").classList.add("hidden");
          document.querySelector(".dot_3").classList.add("hidden");
          document.querySelector(".dot_4").classList.add("hidden");
          document.querySelector(".dot_5").classList.add("hidden");
          document.querySelector(".dot_6").classList.add("hidden");
          document.querySelector(".dot_7").classList.add("hidden");
          switch (dice_number){
            case 1 :
              { temp_score-=temp_score;
                document.querySelector(".dot_4").classList.remove("hidden");
              break;
            }
          case 2:
            {  
              document.querySelector(".dot_3").classList.remove("hidden");
              document.querySelector(".dot_5").classList.remove("hidden");
              // temp_score += dice_number;
              break;
            }
          case 3:
            {
              document.querySelector(".dot_4").classList.remove("hidden");
              document.querySelector(".dot_3").classList.remove("hidden");
              document.querySelector(".dot_5").classList.remove("hidden");
              // temp_score += dice_number;
              break;
            }  
          case 4 :
            {
              document.querySelector(".dot_1").classList.remove("hidden");
              document.querySelector(".dot_3").classList.remove("hidden");
              document.querySelector(".dot_5").classList.remove("hidden");
              document.querySelector(".dot_7").classList.remove("hidden");
              // temp_score += dice_number;
              break;
            }
            case 5:
              { document.querySelector(".dot_4").classList.remove("hidden");
                document.querySelector(".dot_1").classList.remove("hidden");
                document.querySelector(".dot_3").classList.remove("hidden");
                document.querySelector(".dot_5").classList.remove("hidden");
                document.querySelector(".dot_7").classList.remove("hidden");
                // temp_score += dice_number;
              break;
              }
            case 6:
              {
                
                document.querySelector(".dot_1").classList.remove("hidden");
                document.querySelector(".dot_2").classList.remove("hidden");
                document.querySelector(".dot_3").classList.remove("hidden");
                document.querySelector(".dot_5").classList.remove("hidden");
                document.querySelector(".dot_6").classList.remove("hidden");
                document.querySelector(".dot_7").classList.remove("hidden");
                // temp_score += dice_number;
                break;
              }
            
            }
            if(dice_number!==1)
           { temp_score+=dice_number;
            if(player_1.contains("glow"))
            document.querySelector(".current_score_1").textContent=temp_score;
            else
            document.querySelector(".current_score_2").textContent=temp_score;
          }
            else
            {temp_score-=temp_score;
            document.querySelector(".current_score_1").textContent=0;
            document.querySelector(".current_score_2").textContent=0;
            switch_player();
            }
        }
        )
            //  add point to temp score
           
            
        
       
// add point


    document.querySelector(".hold").addEventListener("click", function(){
      const current_1 = Number(document.querySelector(".current_score_1").textContent);
      const current_2 = Number(document.querySelector(".current_score_2").textContent);
      console.log(current_1,current_2);
      if(player_1.contains("glow"))
      {score_1+= current_1;
        document.querySelector(".score_1").textContent=score_1
        document.querySelector(".current_score_1").textContent=0;
        temp_score=0;}
      else
      {score_2+= current_2;
        document.querySelector(".score_2").textContent=score_1
        document.querySelector(".current_score_2").textContent=0;
      temp_score=0;}
      document.querySelector(".score_2").textContent=score_2
      switch_player();
 })
// reset
  document.querySelector(".newgame").addEventListener("click",function(){
      document.querySelector(".score_1").textContent=0;
      document.querySelector(".score_2").textContent=0;
      document.querySelector(".dice-roller").classList.add("hidden");
  })