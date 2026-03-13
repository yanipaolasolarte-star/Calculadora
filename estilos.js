//eventos onclick ondblclick onmouseover onmouseout

function aceptar(){
    alert("Hola esto es una prueba");
    console.log("Esto es una prueba");
    //capturar getElementById
    let titulo = document.getElementById("titulo");
    titulo.style.color = "red";
    let tamaño = document.getElementById("tamaño");
    tamaño.style.color = "blue";
    tamaño.style.fontSize = "30px";
}

function pasar(){
    let boton = document.getElementById("boton");
    boton.style.backgroundColor = "blue";
    boton.style.width = "70px";
    boton.style.border = "none";
    boton.style.color = "white";
}

function fuera(){
    let boton = document.getElementById("boton");
    boton.style.backgroundColor = "gray";
    boton.style.width = "70px";
    boton.style.color = "black";
}