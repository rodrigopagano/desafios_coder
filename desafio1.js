const suma = (a ,b) => a + b
const resta = (a ,b) => a - b

const iva = x => x * 0.25
let precioproducto = 50
let descuento = 5
let bonus = 1

let nuevoprecio = resta(suma(precioproducto, iva(precioproducto)),descuento,) + bonus
console.log(nuevoprecio)