document.addEventListener('DOMContentLoaded', function() {

    document.write(`<h1>proyecto final</h1>`)
    document.write(`<p>ingrese su nombre de usuario<p>`)
    document.write(`<input id = "nombre" type="text">`)
    document.write(`<p>ingrese su contraseña<p>`)
    document.write(`<input id = "contraseña" type="text">`)

    let input1 = document.getElementById("nombre")
    input1.addEventListener("input", () =>{

        console.log(input1.value)
    })

    let input2 = document.getElementById("contraseña")
    input2.addEventListener("input", () =>{

        console.log(input2.value)
    } )


const productos = [
      {id:1, nombre:'horno',precio: 400, stock: 16},
      {id:2, nombre:'heladera',precio: 500, stock: 20},
      {id:3, nombre:'lavadora',precio: 520, stock: 26},
      {id:4, nombre:'ventilador',precio: 700, stock:90},
      {id:5, nombre:'termotanque',precio: 800, stock:100},
      {id:6, nombre:'estufa',precio: 800, stock:100},

      
]
 
   const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor)}
    
   for (const producto of productos) {
    guardarLocal("listaproductos", JSON.stringify(productos));

   }

   

 function componenteProductos() {
    productos.forEach( p => {
     document.write(`<li>${p.nombre}<li>`)
     document.write(`<li>${p.precio}<li>`)
     document.write(`<li>${p.stock}<li>`) 
     document.write(`<button>añadir al carro de compras</button>`)
     
      

    
         
        
    })
}

 const carrito = []

function agregarAlcarrito( id ){

   const producto = productos.find( p => p.id == id )
   carrito.push( {id: producto.id, nombre: producto.nombre } )
}

 function componenteProductos() {
    productos.forEach( p => {
     const divproducto = document.createElement("div")
     divproducto.innerHTML = `
     <h3>${p.nombre}</h3>
     <p>${p.precio}</p>
     <p>${p.stock}</p>

     `
     const botonAgregarAlCarrito = document.createElement("button")
     botonAgregarAlCarrito.innerText = "añadir al carro de compras"
     botonAgregarAlCarrito.addEventListener("click" , () => agregarAlcarrito(p.id))


     divproducto.appendChild(botonAgregarAlCarrito)

     document.body.appendChild(divproducto)
     
     
      
         
        
    })
}

function añadirProductoAlcarrito(evento){
    carrito.push(evento.target.getattribute("marcador"))
    renderizarcarrito();
    guardarcarritoenlocalstorage();
}




function imprimirCarrito() {
    carrito.forEach(p => {
        console.log( p );
    })

}

function detalledelproducto(id) {
    return productos.find( p => p.id == id)
    
}

function detalledelcarrito(){
     let productos = []
     carrito.forEach( p => {
        productos.push(detalledelproducto( p.id ))
     })
     return productos

}

function calculartotal(){
    let total = 0
    carrito.forEach( p => {
        total += p.precio
    })
    return total

}

class producto {
    constructor(obj){
        this.nombre = obj.producto.toUpperCase();
        this.precio = parseFloat(obj.precio);
    }
    sumaIva(){
        this.precio = this.precio * 1.21;
    }
}

const todoslosproductos = [...productos]

Toastify({
    text: "This is a toast",
    duration: 5000,
    destination: "https://github.com/rodrigopagano/desafios_coder.git",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #800000, #008000)",
    },
    onClick: function(){} // Callback after click
  }).showToast();


componenteProductos()


agregarAlcarrito(2)
imprimirCarrito()

agregarAlcarrito(4)
imprimirCarrito()

console.log(detalledelproducto(4) );

console.log(detalledelcarrito());

console.log(todoslosproductos)


});


