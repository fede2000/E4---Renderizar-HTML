// ARRAY DE OBJETOS PIZZAS

let Pizzas = [
    {id: 1,nombre: "muzza",ingredientes: ["salsa de tomate","muzzarella","aceitunas"],precio: 800},
    {id: 2,nombre: "napolitana",ingredientes: ["salsa de tomate","muzzarella","jamon","rodajas de tomate","aceitunas"],precio: 1000},
    {id: 3,nombre: "calabresa",ingredientes: ["salsa de tomate","muzzarella","longaniza"],precio: 1000},
    {id: 4,nombre: "jamon y morron",ingredientes: ["salsa de tomate","muzzarella","jamon","morron","aceitunas"],precio: 900},
    {id: 5,nombre: "4 quesos",ingredientes: ["salsa de tomate","muzzarella","provolone","roquefort","parmesano","aceitunas"],precio: 1200},
    {id: 6,nombre: "fugazzeta",ingredientes: ["salsa de tomate","muzzarella","cebolla","aceitunas"],precio: 500},
]


// obtenemos del documneto el input con el numero id que vamos a buscar
const nombrePizzaBuscada = document.getElementById("nombre__pizza")
// obtenemos del documento el h2 donde pondremos el nombre de la pizza
// const nombrePizza = document.getElementById("nombre__pizza")
// obtenemos del documneto el h4 donde pondremos el precio de la pizza
// const precioPizza = document.getElementById("precio__pizza")
// obtenemos el boton que accionara el programa a travez de un click
const btnBuscar = document.getElementById("btnBuscar")
// obtenemos el contenedor de imagen donde porndremos la foto de la pizza
// const imagenPizza = document.getElementById("container--img")
// obtenemos el boton para mostrar el menu de pizzas
const btnMenu = document.getElementById("btnMenu")
// obtenemos el ul donde mostraremos cada elemento del array pizzas
const listMenu= document.getElementById("list-menu")


// guardamos el array de objetos pizzas en el local storage
function saveLocalStorage(array){
    localStorage.setItem("arrayPizzas", JSON.stringify(array))
}

saveLocalStorage(Pizzas)

let menuPizzas = [];

function recuperarLocalStorage(){
    document.addEventListener("DOMContentLoaded", () => {
        menuPizzas = JSON.parse(localStorage.getItem("arrayPizzas"))
        createMenuHTML();
    })
}

recuperarLocalStorage()

function createMenuHTML(){
    listMenu.innerHTML = "";
    for(let i = 0;menuPizzas.length;i++){
        const li = document.createElement("li");

        li.innerHTML  = `<div class="container--img id${i+1}" id="container--img"></div>
        <div class="container--info">
            <h2 id="nombre__pizza">${menuPizzas[i].nombre}</h2>
            <div><p>Ingredientes: (${menuPizzas[i].ingredientes})</p></div>
            <h4 id="precio__pizza">${menuPizzas[i].precio}</h4>
        </div>`;

        listMenu.appendChild(li)
    }
}

btnMenu.addEventListener("click",mostrarMenu)

function mostrarMenu(){
    createMenuHTML()
}

// escuchador de eventos 

// escucharemos cuando se produja un click en el boton y llamaremos a una funcion
btnBuscar.addEventListener("click",mostrarPizzaBuscada)

function mostrarPizzaBuscada(){
    listMenu.innerHTML = "";
    let aBuscar = nombrePizzaBuscada.value.toLowerCase();
    console.log(menuPizzas)
    // buscamos si algun elemento del array que cumpla con la condicion, si cumple devuelve el elemento , si no cumple devuelve undefined
    let pizzaBuscada = menuPizzas.find(nombrePizza => nombrePizza.nombre == aBuscar)

    // si pizzaBuscada es distinta de undefined entonces hacer:
    if(pizzaBuscada != undefined){
        const li = document.createElement("li");

        li.innerHTML  = `<div class="container--img id${pizzaBuscada.id}" id="container--img"></div>
        <div class="container--info">
            <h2 id="nombre__pizza">${pizzaBuscada.nombre}</h2>
            <p>Ingredientes: (${pizzaBuscada.ingredientes})</p>
            <h4 id="precio__pizza">${pizzaBuscada.precio}</h4>
        </div>`;
        listMenu.appendChild(li)
    }
    // si no hacemos esto
    else{

        const li = document.createElement("li");

        li.innerHTML  = `<div class="container--img error" id="container--img"></div>
        <div class="container--info">
            <h2 id="nombre__pizza"> Pizza no encontrada en el menu</h2>
            <h4 id="precio__pizza">Intente nuevamente con otra pizza</h4>
        </div>`;

        listMenu.appendChild(li)
    }
    // reseteamos el input
    nombrePizzaBuscada.value = "";
    console.log(nombrePizzaBuscada)

}

