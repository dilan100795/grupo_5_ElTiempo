const fs = require('fs');
const path = require('path')
const productos = require('../data/productos.json');
const guardar = (dato) => fs.writeFileSync(path.join(__dirname, '../data/productos.json'), JSON.stringify(dato, null, 4), 'utf-8')

module.exports = {
    listar: (req,res) => {
        return res.render('admin/listar',{
            productos
        })
    },
    crear:(req,res) => {
        return res.render('admin/crear')
    },
    editar:(req,res) => {
        /* id = +req.params.id
        let producto = productos.find((elemento) => {
            return elemento.id == id
        }) */
        /* return res.send(producto) Comprobar que esta llegando bien el elemento*/
        return res.render('admin/editar')
    },
    nuevo:(req,res) => {
        let {Titulo,Autor,Idioma,Editorial,Tapa,Modelo,Categoria,Precio,Descuento,Stock,Descripcion,Subcategoria} = req.body;

        let productoNuevo = {
            id : productos[productos.length - 1].id + 1,
            titulo: Titulo,
            autor: Autor,
            idioma: Idioma,
            editorial: Editorial,
            tapa: Tapa,
            modelo: Modelo,
            categoria: Categoria,
            precio: Precio,
            descuento: Descuento,
            stock: Stock,
            descripcion: Descripcion,
            subcategoria: Subcategoria,
            imagen: ["default-image.jpg"]
        }
        productos.push(productoNuevo)
        guardar(productos)

       return res.redirect('/administrador/listar')
    }
}