function mostrar(valor){
    let pantalla=document.getElementById("pantalla");
    pantalla.value+=valor;
}

function borrar(){
    document.getElementById("pantalla").value='';
}

function cambio(){
    let boton=document.getElementById("pantalla");
    boton.style.background="lightblue"; 
    boton.style.border="4px solid purple"; 
    boton.style.fontSize="26px";
    boton.style.color="black";
}

function pasar(){
    let boton=document.getElementById("7");
    boton.style.background="white"; 
    boton.style.color="black";
    boton.style.border="3px solid black";
}

function fuera(){
    let boton=document.getElementById("7");
    boton.style.background="lightgray";
    boton.style.color="black";
    boton.style.border="1px solid gray";
}

function presionar(){
    let boton=document.getElementById("8");
    boton.style.transform="scale(0.8)";
    boton.style.background="green";
}

function soltar(){
    let boton=document.getElementById("8");
    boton.style.transform="scale(1)";
    boton.style.background="white";
}

function doble(){
    let boton=document.getElementById("9");
    boton.style.background="purple"; 
    boton.style.color="white"; 
    boton.style.fontSize="20px";
}

function pasar_(){
    let boton=document.getElementById("-");
    boton.style.background="white"; 
    boton.style.color="black";
    boton.style.border="2px solid black";
}

function fuera_(){
    let boton=document.getElementById("-");
    boton.style.background="white";
    boton.style.color="black";
}

function presionar_(){
    let boton=document.getElementById("4");
    boton.style.transform="scale(0.6)";
    boton.style.background="white";
}

function soltar_(){
    let boton=document.getElementById("4");
    boton.style.transform="scale(1)";
    boton.style.background="white";
}

function doble_(){
    let boton=document.getElementById("5");
    boton.style.background="darkgreen"; 
    boton.style.color="white"; 
    boton.style.border="3px solid black";
}

function pasar_b(){
    let boton=document.getElementById("6");
    boton.style.background="white"; 
    boton.style.color="black";
    boton.style.fontSize="18px";
}

function fuera_b(){
    let boton=document.getElementById("6");
    boton.style.background="white";
    boton.style.color="black";
}

function presionar_b(){
    let boton=document.getElementById("+");
    boton.style.transform="scale(0.6)";
    boton.style.background="yellow";
}

function soltar_b(){
    let boton=document.getElementById("+");
    boton.style.transform="scale(1)";
    boton.style.background="white";
}

function doble_b(){
    let boton=document.getElementById("1");
    boton.style.background="teal"; 
    boton.style.color="white"; 
    boton.style.border="2px solid black";
}

function pasar_a(){
    let boton=document.getElementById("2");
    boton.style.background="white"; 
    boton.style.color="black";
}

function fuera_a(){
    let boton=document.getElementById("2");
    boton.style.background="lightyellow";
    boton.style.color="black";
}

function presionar_a(){
    let boton=document.getElementById("3");
    boton.style.transform="scale(0.7)";
    boton.style.background="pink";
}

function soltar_a(){
    let boton=document.getElementById("3");
    boton.style.transform="scale(1)";
    boton.style.background="white";
}

function doble_a(){
    let boton=document.getElementById("*");
    boton.style.background="black"; 
    boton.style.color="yellow"; 
}

function pasar_c(){
    let boton=document.getElementById("0");
    boton.style.background="darkgray"; 
    boton.style.color="white";
    boton.style.border="2px solid black";
}

function fuera_c(){
    let boton=document.getElementById("0");
    boton.style.background="white";
    boton.style.color="black";
}

function presionar_c(){
    let boton=document.getElementById("00");
    boton.style.transform="scale(1.3)";
    boton.style.background="lightgreen";
}

function soltar_c(){
    let boton=document.getElementById("00");
    boton.style.transform="scale(1)";
    boton.style.background="white";
}

function pasar_d(){
    let boton=document.getElementById("/");
    boton.style.background="white"; 
    boton.style.color="black";
}

function fuera_d(){
    let boton=document.getElementById("/");
    boton.style.background="lightgray";
    boton.style.color="black";
}

function presionar_d(){
    let boton=document.getElementById("c");
    boton.style.transform="scale(1.5)";
    boton.style.background="red";
    boton.style.color="white";
}

function soltar_d(){
    let boton=document.getElementById("c");
    boton.style.transform="scale(1)";
    boton.style.background="white";
    boton.style.color="black";
}

// ESTILO DE LA PANTALLA

pantalla.style.width = "260px"
pantalla.style.height = "40px"
pantalla.style.fontSize = "20px"
pantalla.style.border = "2px solid black"
pantalla.style.textAlign = "right"
pantalla.style.padding = "5px"
pantalla.style.color = "black"
pantalla.style.backgroundColor = "#e4e9e9"
pantalla.style.borderRadius = "5px"