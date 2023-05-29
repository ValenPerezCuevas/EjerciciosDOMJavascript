//Guardamos el formulario en una variable
let formulario = document.getElementById("id_form");

//Declaramos un mapa y le insertamos los valores
let autorLibro = new Map();

autorLibro.set("Stephen King", ["It", "La larga marcha", "El Resplandor", "Doctor Sueño"]);
autorLibro.set("Brandom Sanderson", ["El camino de los reyes", "Elantris", "El imperio Final", "El aliento de los dioses"]);
autorLibro.set("Agatha Christie", ["Asesinato en el Orient Express", "Muerte en el Nilo", "Cinco cerditos", "Némesis"]);
autorLibro.set("Isaac Asimov", ["Fundación", "Yo, robot", "El fin de la eternidad", "El hombre bicentenario"]);

//Seteamos un valor predeterminado
formulario.elements['id_autor'].value = "Stephen King";

//Obtenemos el elemento select del formulario
let selectAutor = formulario.elements['id_autor'];

//Recorremos el mapa y creamos las opciones
autorLibro.forEach((libros, autor) => {
    let opcion = document.createElement("option");
    opcion.value = autor;
    opcion.text = autor;
    selectAutor.appendChild(opcion);
});

//Llamamos a la función
colocarObras();

//Usamos el change para cuando elija otra opción, llame a la función para dibujar las obras
formulario.elements['id_autor'].addEventListener("change", colocarObras);

//Función para colocar las obras
function colocarObras() {
    //Obtenemos el autor seleccionado
    let autorSeleccionado = formulario.elements['id_autor'].value;
    //Eliminamos las opciones anteriores
    let opcionesTotales = document.querySelectorAll("#id_obra > option");
    opcionesTotales.forEach((e) => e.remove());

    //Obtenemos las obras del autor seleccionado
    let obras = autorLibro.get(autorSeleccionado);
    for (const obra of obras) {
        let opcion = document.createElement("option");
        opcion.value = obra;
        opcion.innerHTML = obra;
        formulario.elements['id_obra'].appendChild(opcion);
    }
}
