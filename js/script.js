
document.getElementById("btn").addEventListener("click", mostrarVentana);

/*
function mostrarDato(){
    console.log("link funcionando");
    let info=document.getElementById("perfil-social");
    //padre = info.parentNode;
    //padre.removeChild(info);
    info.style.backgroundColor="hsl(217, 19%, 35%)";

    //color de fondo icono

    let btn = document.getElementById("boton");
    btn.style.backgroundColor="hsl(214, 17%, 51%)";
}
*/
/*
console.log("link funcionando");
let ventanM = document.getElementById("ventana");
let triangulo = document.getElementById("triangle");

function mostrarVentana(){
    
    ventanM.style.display = "block";
    triangulo.style.display = "block";
    
}*/

function mostrarVentana(){
    let ventana = document.getElementById("ventana").classList.toggle("ocultar");
    let triangulo = document.getElementById("triangle").classList.toggle("ocultar");
}