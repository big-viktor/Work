const paralax = document.getElementById('paralax');
// const paralax = document.querySelector('.container_slider_paralax');

let x = 0;

 window.onscroll = () => {
     
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 500) {
        x = 0;
        paralax.style.top = x + "px";
      } else {
        x -= 5;
        // console.log(x);
        paralax.style.top = x + "px";
      };
      if(x === -230){
          x = 0;
          paralax.style.top = x + "px";
      }
};
