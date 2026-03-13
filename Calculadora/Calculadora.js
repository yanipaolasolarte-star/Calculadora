let pantalla = document.getElementById("pantalla")

let numeros = document.querySelectorAll(".numero")
let operadores = document.querySelectorAll(".operador")

let botonResultado = document.getElementById("resultado")
let botonBorrar = document.getElementById("borrar")


// EVENTO CLICK PARA NUMEROS
numeros.forEach(boton => {

    boton.addEventListener("click", function(){
        pantalla.value += boton.textContent
    })

})


// EVENTO CLICK PARA OPERADORES
operadores.forEach(boton => {

    boton.addEventListener("click", function(){
        pantalla.value += boton.textContent
    })

})


// EVENTO PARA CALCULAR RESULTADO
botonResultado.addEventListener("click", function(){

    try{
        pantalla.value = eval(pantalla.value)
    }catch{
        pantalla.value = "Error"
    }

})


// EVENTO DOBLE CLICK PARA BORRAR
botonBorrar.addEventListener("dblclick", function(){
    pantalla.value = ""
})



// ESTILOS DESDE JAVASCRIPT (DOM)

document.querySelectorAll("button").forEach(boton => {

    boton.style.width = "60px"
    boton.style.height = "40px"
    boton.style.margin = "5px"
    boton.style.backgroundColor = "grey"
    boton.style.color = "white"
    boton.style.border = "none"
    boton.style.fontSize = "18px"
    boton.style.borderRadius = "5px"

    // EVENTO AL PASAR EL CURSOR
    boton.addEventListener("mouseover", function(){
        boton.style.backgroundColor = "#2ecc71"
    })

    boton.addEventListener("mouseout", function(){
        boton.style.backgroundColor = "#8fc3c3"
    })

    // EVENTO AL HACER CLICK
    boton.addEventListener("mousedown", function(){
        boton.style.transform = "scale(0.9)"
    })

    boton.addEventListener("mouseup", function(){
        boton.style.transform = "scale(1)"
    })

})


// ESTILO DE LA PANTALLA

pantalla.style.width = "260px"
pantalla.style.height = "40px"
pantalla.style.fontSize = "20px"
pantalla.style.border = "2px solid black"
pantalla.style.textAlign = "right"
pantalla.style.padding = "5px"
pantalla.style.color = "black"
pantalla.style.backgroundColor = "#ecf0f1"
pantalla.style.borderRadius = "5px"