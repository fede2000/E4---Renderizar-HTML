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
const idPizza = document.getElementById("numero__id")
// obtenemos del documento el h2 donde pondremos el nombre de la pizza
const nombrePizza = document.getElementById("nombre__pizza")
// obtenemos del documneto el h4 donde pondremos el precio de la pizza
const precioPizza = document.getElementById("precio__pizza")
// obtenemos el boton que accionara el programa a travez de un click
const btnBuscar = document.getElementById("btnBuscar")
// obtenemos el contenedor de imagen donde porndremos la foto de la pizza
const imagenPizza = document.getElementById("container--img")


// escuchador de eventos 

// escucharemos cuando se produja un click en el boton y llamaremos a una funcion
btnBuscar.addEventListener("click",mostrarPizza)

function mostrarPizza(){
    // limpiamos el contenido del h2 y h4
    nombrePizza.textContent = "";
    precioPizza.textContent = "";

    // buscamos si algun elemento del array que cumpla con la condicion, si cumple devuelve el elemento , si no cumple devuelve undefined
    let pizzaBuscada = Pizzas.find((pizza) => pizza.id == idPizza.value)

    // si pizzaBuscada es distinta de undefined entonces hacer:
    if(pizzaBuscada != undefined){
        nombrePizza.textContent = pizzaBuscada.nombre;
        precioPizza.textContent = "$"+pizzaBuscada.precio;
        let claseAgregar = "id"+idPizza.value;
        imagenPizza.className = "container--img "+claseAgregar
    }
    // si no hacemos esto
    else{
        nombrePizza.textContent = "ID de pizza no encontrado, intente nuevamente"
        imagenPizza.className = "container--img error"
    }
    // reseteamos el input
    idPizza.value = ""

}

