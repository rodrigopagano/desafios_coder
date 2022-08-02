document.addEventListener('DOMContentLoaded', function() {

    document.write(`<h1>proyecto final</h1>`)
    document.write(`<input id = "nombre" type="text">`)

    let input1 = document.getElementById("nombre")
    input1.addEventListener("input", () =>{

        console.log(input1.value)
    })


const productos = [
      {id:1, nombre:'horno',precio: 400, stock: 16},
      {id:2, nombre:'heladera',precio: 500, stock: 20},
      {id:3, nombre:'lavadora',precio: 520, stock: 26},
      {id:4, nombre:'ventilador',precio: 700, stock:90},
      {id:5, nombre:'termotanque',precio: 800, stock:100},
      {id:6, nombre:'estufa',precio: 800, stock:100},

      
]

const carrito = []

function agregarAlcarrito( id ){

   const producto = productos.find( p => p.id == id )
   carrito.push( {id: producto.id, nombre: producto.nombre } )
}

function componenteProductos() {
    productos.forEach( p => {
      document.write(`<li>${p.nombre}<li>`)
      document.write(`<li>${p.precio}<li>`)
      document.write(`<li>${p.stock}<li>`) 
      document.write(`<button>añadir al carro de compras</button>`)
      
      
    
         
        
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

componenteProductos()


agregarAlcarrito(2)
imprimirCarrito()

agregarAlcarrito(4)
imprimirCarrito()

console.log(detalledelproducto(4) );

console.log(detalledelcarrito());




});


