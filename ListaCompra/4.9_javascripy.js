function addList(){

//Creamos el elemento padre
let elementoPadre = document.getElementById("idContenedor")

//Recogemos el valor del campo de texto
let informacion = document.getElementById("idEntrada")

//Creamos una lista ordenada y le insertamos el valor 
let elemento = document.createElement("li")
let texto = document.createTextNode(informacion.value)



//Lo pintamos en consola y lo subimos al elemento grande
console.log("El nuevo elemento es: ", informacion.value)
elemento.appendChild(texto)
// elementoPadre.appendChild(elemento)

//Creamos un array para ordenar la lista

let lista = Array.from(elementoPadre.children)
//Se inserta el elemento
lista.push(elemento)
//Se ordena. El método localCompare te dice que elemento 
lista.sort((i,j)=>{
    return i.textContent.localeCompare(j.textContent)
})

lista.forEach(li=>{
    elementoPadre.appendChild(li)
})

//Función para borrar el carrito de la compra
elemento.addEventListener("dblclick", function() {
    elementoPadre.removeChild(elemento); // Borramos el elemento al hacer doble clic en él
  });


}