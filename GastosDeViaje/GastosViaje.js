/******************************************
 *                                        *
 *           Variables globales           *
 *                                        *
 *******************************************/

let elementoPadre = document.getElementById("idContenedorPadre");
let informacion = document.getElementById("idDatos");
let botonBorrar = document.getElementById("idBotonBorrar");
let botonCalcular = document.getElementById("idBotonCalcular");

let listaGastos = [];

/******************************************
 *                                        *
 *               Eventos                  *
 *                                        *
 *******************************************/
botonBorrar.addEventListener("click", borrarLista);
botonCalcular.addEventListener("click", calcularImporteTotal);

/******************************************
 *                                        *
 *                 Funciones              *
 *                                        *
 *******************************************/
function addLista() {
  // Comprobamos si el código insertado tiene el formato válido
  if (informacion.value.includes(",")) {
    //Si el código es correcto, guardamos las variables gasto e importe
    let gasto = informacion.value.split(",")[0];
    let importe = informacion.value.split(",")[1];
    let gastoImporte = { gasto: gasto, importe: importe };
    // Pusheamos y ordenamos el array
    listaGastos.push(gastoImporte);
    listaGastos.sort((a, b) => a.gasto.localeCompare(b.gasto));
    //Antes de insertarlos hacemos una limpieza para evitar duplicados
    while (elementoPadre.firstChild) {
      elementoPadre.firstChild.remove();
    }

    //Inseramos el valor en la lista

    listaGastos.forEach((item) => {
      let nodoInfo = crearNodo(
        "li",
        `${item.gasto} - ${item.importe}`,
        elementoPadre,
        ["cursiva"],
        [{ style: "color: blue; font-size: 28px;" }]
      );
      console.log(nodoInfo.innerHTML);
    });
  } else {
    alert("Formato de entrada incorrecto. Debe ser 'gasto,importe'");
  }
}

function calcularImporteTotal() {
  let importeTotal = listaGastos.reduce(
    (total, item) => total + parseFloat(item.importe),
    0
  );

  // Elimina el nodo de resultado anterior, si existe
  let nodoResultadoAnterior = document.getElementById("resultadoImporteTotal");
  if (nodoResultadoAnterior) {
    nodoResultadoAnterior.remove();
  }

  // Crea un nuevo nodo de resultado y lo inserta en el contenedor padre
  let contenedorPadre = document.getElementById("idContenedorPadre");
  let nodoResultado = crearNodo(
    "div",
    "Importe Total: " + importeTotal,
    contenedorPadre,
    [],
    [
      {
        style:
          "font-weight: bold; color: red; text-decoration: underline; font-size: 28px;",
      },
    ]
  );
  nodoResultado.id = "resultadoImporteTotal";
}

function crearNodo(
  etiqueta = "div",
  texto = "",
  padre = null,
  clases = [],
  atributos = []
) {
  let nodo = document.createElement(etiqueta);
  nodo.textContent = texto;

  if (padre !== null) {
    padre.appendChild(nodo);
  }

  if (clases.length > 0) {
    clases.forEach((e) => {
      nodo.classList.add(e);
    });
  }

  if (atributos.length > 0) {
    atributos.forEach((e) => {
      for (let i in e) {
        nodo.setAttribute(i, e[i]);
      }
    });
  }

  return nodo;
}

function borrarLista() {
  listaGastos = [];
  while (elementoPadre.firstChild) {
    elementoPadre.firstChild.remove();
  }
}
