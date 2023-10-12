// ! creando un servidor con node 

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     const read = fs.createReadStream('./static/index.html');
//     read.pipe(res);
// });

// server.listen(3000);

// console.log(`Escuchando desde el puerto ${3000}`);

// ? creando servidor con express

const express = require('express');

const morgan = require('morgan'); //? paquete de middlewares


const app = express(); //? en express al server se le llama app

app.use(morgan('dev'));

// app.get('/', (req, res) => { //* una functin que se llama handler
//     res.send('HOLA'); //METODO SEND 
// });

// app.get('/about', (req, res) => {
//     res.send('sobre nosotros'); //METODO SEND 
// });

// app.use((req, res) => { //! si no hay ruta especificada entonces manda esto por default
//     res.status(404).send('Pagina no encontrada'); // # colocamos un status 404 de error para no tener por defaul un 200
// });

// ** http verbs en express

// app.get('/products', (req, res) => {
//     res.send('lista de productos');
// });

// app.post('/products', (req, res) => {
//     res.send('creando productos');
// });

// app.put('/products', (req, res) => {
//     res.send('actualziando(editando) producto');
// });

// app.patch('/products', (req, res) => {
//     res.send('actualizando(editando) producto');
// });

// app.delete('/products', (req, res) => {
//     res.send('eliminando productos');
// });

// ? http response

// app.get('/miarchivo', (req, res) => { 
//     res.sendFile('./yo.jpg', {root:__dirname}); // !para obtener files no tengo que llamar mas a fs, pero hay que especificarle la root para que busque el file
// });

// app.get('/user', (req, res) => {
//     res.json({
//         'nombre': 'juan',
//         'adress': 'casa #2'
//     }); // ?ahora envias un json puede ir sin "" porque se formatea
// });


// * envido de datos de la dod el clientes request body

//! el contendo de un reques suele ser el endpoint que es la URL, el body que es lo que se pide en cuestion(puede ser archivo, jso, string , etc...), igual esta el header

// ? igual puede ser la estructura del response, igual podemos andar codigo de estado

// app.use(express.text());  // # con esto express pued interpretar el texto para que lo pueda entender abajo en el request.body

// app.use(express.json()); // # lo mismo pasa con json, siemrpe debe colocarse antes del req.body

// app.use(express.urlencoded({extended: false})); // ? para que entienda que es un url sin datos complejos que entender solo textos encoded

// app.post('/user', (req, res) => {
//     res.send('Nuevo usuario');
//     console.log(req.body); //* nos permite ver el cuerpo de la petición pero esto dara undefinded porque no puede procesarlo 
// });


//  ! request params
// app.get('/hello/:user', (req, res)=> { // ? permite tener parametros cambiantes segun se requiera con : el nombre que quieras
//     res.send(`Hola ${req.params.user}`); // # y asi se invoca
// });



// * Queries

//son info extra que el ordenador manda backend para hacer una operacion adicional

// ? medoto all

// app.all('/info', (req, resp) => { // !para inidcar que la peticion puede ser cualquier tipo de http verb
//     resp.send('Server info');
// });


// ? middlewares

// app.use(function (req, res , next){ //* aqui se usa el parametro extra que se llama next es para indicar que siga con su flujo de ejecucion normal despues de acabar la ejecucion
//     console.log('pasó por aqui');
//     next(); //! aqui se llama esa funcion next
// }); // # se usa .use para poder usar la funcion en express en este caso es el middlware y al no llevar path se ejecuta siempre que las demas promesas no tengan path


// app.get('/profile', (req, res) => {
//     res.send('profile page');
// });


//! se pueden agregar paquetes a express con middlewares 



app.listen(3000);
console.log(`server on port ${3000}`);