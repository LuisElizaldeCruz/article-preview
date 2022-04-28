
document.getElementById("boton").addEventListener("click", mostrarDato);

function mostrarDato(){
    console.log("link funcionando");
    let info=document.getElementById("perfil-social");
    /*padre = info.parentNode;
    padre.removeChild(info);*/
    info.style.backgroundColor="hsl(217, 19%, 35%)";

    //color de fondo icono

    let btn = document.getElementById("boton");
    btn.style.backgroundColor="hsl(214, 17%, 51%)";
}