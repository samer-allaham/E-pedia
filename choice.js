'use strict'

var game=function () {
    


  var choice = prompt('what game do You like more Dota2 or LOL?');
  var picture; 
  while (choice !== 'Dota2' && choice !== 'LOL' ){
   choice = prompt( 'Dota 2 or league?' )
   }
  if (choice == 'Dota2'&& choice) {
    document.body.style.background = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOjJGpgeoO2WuinRo-PCWlRmUrm8P1C8hHdJwqP6WXG0Ap_gpb')";
  } else if (choice == 'LOL' ) {
    document.body.style.background = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRruMIbK1GKXa40gnEtWqRAdLZsGmfjlR8deFfbdpuljLzx2WDsEg')";
  }
  return picture;

}
document.write(game())


