
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
         document.write(`<button>agregar al carrito</button>`)   
        
        
        })


}

function imprimirCarrito() {
    carrito.forEach(p => {
        console.log( p );
    })

}

componenteProductos()
agregarAlcarrito(2)
