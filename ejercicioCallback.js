function aceptar(){
    alert("Callback")
}
//Callback
//addEventListener
let names = document.getElementById("name");
names.addEventListener("click",()=>{
    console.log(names.value);
})
//onChange
let ape = document.getElementById("ape");
ape.addEventListener(("change"),(event)=>{
    console.log(event.target.value)
});
