
const productos = ["escoba" ,"plancha" ,"mesa" ,"television" ,"detergente"]

const eliminar = (producto) => {
   
    let index = productos.indexOf(producto)

    if (index != -1) {
        productos.splice(index, 1)
    }


}

eliminar("television")





