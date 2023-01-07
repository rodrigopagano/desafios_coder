const Contenedor = require('./gProductos.js')

const run = async function () {
    let contenedor = new Contenedor('productos.txt')
    contenedor.save({
        title: 'protean',
        price: 869,
        thumbnail: 'sin imagen'
    })

    contenedor.save({
        title: 'Col',
        price: 180,
        thumbnail: 'sin imagen'
    })

    contenedor.save({
        title: 'pin',
        price: 120,
        thumbnail: 'sin imagen'
    })

    contenedor.save({
        title:'save',
        price:34,
        thumbnail:'sin imagen'
    })

    contenedor.save({
        title:'osct',
        price:938,
        thumbnail:'sin imagen'
    })

    contenedor.save({
        title:'ultima',
        price:38,
        thumbnail:'sin imagen'
    })

    contenedor.save({
        title:'hyper',
        price:9568,
        thumbnail:'sin imagen'
    })

    contenedor.save({
        title:'kia',
        price:99944,
        thumbnail:'sin imagen'
    })

    contenedor.save({
        title:'attck',
        price:6858,
        thumbnail:'sin imagen'
    })

    contenedor.save({
        title:'aork',
        price:665837,
        thumbnail:'sin imagen'
    })


    console.log(contenedor.getById(1));
    console.log(contenedor.getById(5));
    console.log(contenedor.getAll());
    console.log(contenedor.deleteById(1));
    console.log(contenedor.deleteById(6));
    console.log(contenedor.getAll());
    contenedor.deleteAll();
    console.log(contenedor.getAll());
};

run();