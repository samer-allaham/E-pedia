'use strict'



var game=function () {
    
  var choice = prompt('what game do You like more Dota2 or LOL?');
  var picture; 
  while (choice !== 'dota 2' && choice !== 'lol' ){
   choice = prompt( 'dota 2 or lol?' )
   }
  
  if (choice == 'dota 2') {
    document.body.style.background = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOjJGpgeoO2WuinRo-PCWlRmUrm8P1C8hHdJwqP6WXG0Ap_gpb')";
  } else if (choice == 'lol' ) {
    document.body.style.background = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRruMIbK1GKXa40gnEtWqRAdLZsGmfjlR8deFfbdpuljLzx2WDsEg')";
  }
  return picture;
   }
  

document.write(game())

