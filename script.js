const openburger=document.querySelector('.openburger');
const closeburger=document.querySelector('.closeburger');
const navlink=document.querySelector(".nav-links");
var toggle = false;

console.log(openburger)
openburger.addEventListener("click", function(){
    console.log(toggle);
    if(toggle===false){
        toggle=true;
        openburger.src="./images/burgerClose.png";
        navlink.style.opacity="1";
    }
    else{
        openburger.src="./images/burgerOpen.png";
        navlink.style.opacity="0";
        toggle=false;
    }
    console.log("clicked")
 
    
    

  });





