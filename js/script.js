const paralax = document.getElementById('paralax');
const scrol = document.body;
console.log(scrol)
// const paralax = document.querySelector('.container_slider_paralax');

let x = -300;

//  window.onscroll = () => {
     
//     if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 500) {
//         x = 0;
//         paralax.style.top = x + "px";
//       } else {
//         x -= 5;
//         // console.log(x);
//         paralax.style.top = x + "px";
//       };
//       if(x === -230){
//           x = 0;
//           paralax.style.top = x + "px";
//       }
// };

function myFunction(event) {
 
  var y = event.deltaY;
  if (y > 0) {
    x -= 45;
    paralax.style.top = x + "px";
  } else {
    x += 45;
    paralax.style.top = x + "px";
  } 
}