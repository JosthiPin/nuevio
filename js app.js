const cris = document.querySelector(".cris");

const navegacion= document.querySelector(".navegacion");
const enlaces= document.querySelector(".navegatcion a");

document.addEventListener("DOMContentLoaded",()=>{
    mostrarMenu();
    cerrarMenu();
});
function mostrarMenu(){
    cris.addEventListener("click",()=>{
        navegacion.classList.toggle("ocultar")
        
    });
    
}

 function cerrarMenu(){
    enlaces.forEach(enlaces => {
        enlaces.addEventListener("click",(e)=>{
   if(e.target.tagName=== "A"){
    navegacion.classList.add("ocultar");
   }
 });
    });
}
