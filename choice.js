'use strict'





var game=function () {
  
    
  var choice = prompt('what game do You like more Dota2 or LOL?');
 
  
  var background=''; 
  
  while (choice !== 'dota 2' && choice !== 'lol' ){
    choice = prompt( 'dota 2 or lol?' )
  }
  // var man = prompt('how many?')
  // for (var i=0;i<man;i=i+1){
  
  if (choice === 'dota 2') {
    document.body.style.background.css(' background-repeat', 'no-repeat') = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOjJGpgeoO2WuinRo-PCWlRmUrm8P1C8hHdJwqP6WXG0Ap_gpb')";
  } else if (choice === 'lol' ) {
    document.body.style.background = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRruMIbK1GKXa40gnEtWqRAdLZsGmfjlR8deFfbdpuljLzx2WDsEg')";
  }
  console.log('hello',background)
  // return background;
   }
  // }
document.write(game());

