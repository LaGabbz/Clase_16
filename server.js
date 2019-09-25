const express = require('express');
const app = express();
const router = express.Router();
/*
//funciones handler seran usadas por la aplicacion express por medio de app.get
app.get('/handler1', function(req,res){
    res.send('handler 1')
});

app.get('/handler2', function(req,res){
    res.send('handler 2')
});

//imprimir valores del objeto request
app.get('/handler1', function(req,res){
    res.send('handler 1')
    console.dir(req.baseUrl)
    console.dir(req.body)
    console.dir(req.hostname)
    console.dir(req.method)
    console.dir(originalUrl)
    console.dir(req.path)
    console.dir(req.protocol)
    console.dir(req.query)
});

//etiquetas en el handler1
app.get('/handler1', function(req,res){
    res.status(200)
    //res.set('Content-Type', 'text/plain')
    res.send('<h1> HOLA </h1>')

});


//crear un middleware
app.use(function(req,res,next){
    console.log('Soy un middleware');
    res.send('Soy un middleware');
    next();
});
*/

router.get('/', (req,res) => {
    res.sendFile(__dirname +'/Public/file.txt');
});

app.use('/asset', router);

//servidor puerto 9,000.
app.listen(9000,() => {
    console.log("El servidor esta escuchando desde el puerto 9mil")
});