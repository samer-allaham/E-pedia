'use strict'
alert ('hello')
var option = function(){
    var order = prompt('which game would you like to try?');
    //  var total;
    var picture='';
    var total;
    total=prompt( 'how many online games do you play regularly?');
        while (!total){
            total = prompt('please enter a number')
        }
    for (var ctr = 0; ctr < total; ctr = ctr + 1 ) {
     if (order === 'lol'){
         picture=  picture+ '<p><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWgvMHf8fCTQjrqkfhQ2Xly5q1mhNv7lX9VClILA2DXYQOF3Z5"></p>'
         }else if (order ==='dota 2') {
         picture= picture +'<p><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXjcICVwcmBkg-3LJCZJQB5-EtAf-Il3-Q1j0INOJ2JCR3Cn2jw"></p>'
         }
     
        }
        return picture;    
   }
document.write(option());
 