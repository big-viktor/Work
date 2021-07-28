const check = document.querySelector('.ceck-box');
const chek = document.querySelector('.chek');
const active = document.querySelector('.active');

let activ = false;
checkEven = () =>{
    if(activ==true ){
        chek.classList.remove("active");
        activ=false;
    }else{
        chek.classList.add("active");
        activ=true;
    }
}
check.addEventListener("click",checkEven)
;
const burger = document.getElementById("burger"); 
const menuContent = document.querySelector('.menu_content');


if(menuContent){
    const menuBody = document.querySelector('menu_body');
    burger.addEventListener("click", function (e) {
    menuContent.classList.add("_active");
    menuBody.classList.add("_active");

});

}