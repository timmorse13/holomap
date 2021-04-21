

// BACKGROUND

// var canvas = document.createElement( 'canvas' );
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// var context = canvas.getContext( '2d' );
// context.fillStyle = 'rgb(0,0,0)';
// context.fillRect( 0, 0, canvas.width, canvas.height );

// var brightness;

// var brightnessB;

// var starSize;
// var starX;
// var starY;

// for ( var i = 0; i < 2400; i ++ ) 
// {
//   brightness = Math.floor(Math.random() * 128);
//   brightnessB = Math.floor((Math.random() * 50 ) + 1);
  
//   if (i%2 == 0) {
//     //white star
//     brightnessB = brightness;
//   }
//   else if (i%3 == 0) {
//     // blue star
//     brightnessB = brightnessB + brightness;
//   }
//   else {
//     // yellow star
//     brightnessB = brightness - brightnessB;
//   }
  
//   //large stars every once in a while
//   if (i%25 == 0) {
//     starSize = Math.floor(Math.random() * 2) + 1;
//   }
//   else {
//     starSize = 1;
//   }
  
//   var starColor = 'rgba(' + brightness + ',' + brightness + ',' + brightnessB + ',255)'; 
  
//   context.fillStyle = starColor;
  
//   starX = Math.random() * canvas.width;
//   starY = Math.random() * canvas.height;
  
//   context.fillRect( starX, starY, starSize, starSize );
// }

// document.body.style.background = 'url(' + canvas.toDataURL('image/png') + ')';

