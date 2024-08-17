var express = require('express')
const process = require('process');

var expressapp = express()
expressapp.get('/', function (req, res) {
    res.send('{"message":"Hola Mundo desde JavaScript V2"}')
})
expressapp.listen(5000, function () {
    console.log('Escuchando desde puerto 5000!')
})

/* Ctrl C*/
process.on('SIGINT', function () {
    process.exit();
});