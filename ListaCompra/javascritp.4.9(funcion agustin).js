function addList(){

    //Creamos el elemento padre
    let elementoPadre = document.getElementById("idContenedor")
    
    //Recogemos el valor del campo de texto
    let informacion = document.getElementById("idEntrada")
    
    //Creamos una lista ordenada y le insertamos el valor 
    let elemento = crearNodo("li",informacion.value,elementoPadre,[],[])
    
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
    
    
    
    
    /**
     * Función para automatizar el proceso de creación de nodos 
     *
     *  Ejemplo de uso:
     *  
     *  // crearNodo("p", "Hola Mundo", null,["oculto","tam-18"],[{style:"color:red"}, {id:"idNombre"}])
     * 
     * @param {*} etiqueta      Tipo de Elemento a crear
     * @param {*} texto         Contenido del elemento    
     * @param {*} padre         Elemento padre a asociar
     * @param {*} clases        Clases a añadir al elemento
     * @param {*} atributos     Atributos a a añadir al elemento
     * 
     * @returns     Nodo a generar 
     */
     function crearNodo(etiqueta = "div", texto = "", padre = null, clases = [], atributos = []) {
    
        let nodo = document.createElement(etiqueta)
        let text = document.createTextNode(texto)
    
        nodo.appendChild(text)
    
        //Gestión del Padre
        if (padre !== null) {
    
            padre.appendChild(nodo)
        }
    
        //Gestión de Clases
        if (clases !== []) {
    
            clases.forEach(e => {
                nodo.classList.add(e)
            }
            )
        }
    
        //Gestión de atributos
        if (atributos !== []) {
            atributos.forEach(e => {
                for (let i in e) {
                    nodo.setAttribute(i, e[i])
                }
            })
        }
    
        return nodo
    }