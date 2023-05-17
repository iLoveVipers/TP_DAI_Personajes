import PersonajeService from './src/service/personajes-services.js'

import PeliserieService from './src/service/peliserie-services.js'

import Personaje from './src/models/personaje.js'

import Peli_Serie from './src/models/peli_serie.js'

import sql from 'mssql'

import express from 'express'

 

const app = express ();


 

app.get('/', function(req, res) {

    res.send('Soy la Home Page!');

})


 

app.get('/personajes', async function(req, res) {

    const newPS = new PersonajeService();

    res.send(await newPS.getAllPer())

})

app.get('/personaje/:id', async function(req, res) {

    const newPS = new PersonajeService();
    let id = req.params.id;
    res.send(await newPS.getByIdPer(id))

})

app.get('/personaje/:nombre- :edad', async function(req, res) {

    const newPS = new PersonajeService();
    let nombre = req.params.nombre;
    let edad = req.params.edad;
    res.send(await newPS.getByNombrePer(nombre, edad))

})

app.get('/instert-pj', async function(req, res) {

    const newPS = new PersonajeService();
    
    res.send(await newPS.insertPer(Personaje))

})

app.get('/update-pj/:id', async function(req, res) {

    const newPS = new PersonajeService();
    let id =req.params.id;
    res.send(await newPS.updatePer(id))

})

app.get('/delete-pj', async function(req, res) {

    const newPS = new PersonajeService();

    res.send(await newPS.deleteByIdPer())

})

app.get('/personaje', async function(req, res) {

    const newPS = new PersonajeService();

    res.send(await newPS.getAllPeSe())

})

app.get('/personaje', async function(req, res) {

    const newPS = new PersonajeService();

    res.send(await newPS.getByIdPeSe())

})

app.get('/personaje', async function(req, res) {

    const newPS = new PersonajeService();

    res.send(await newPS.insertPeSe())

})

app.get('/personaje', async function(req, res) {

    const newPS = new PersonajeService();

    res.send(await newPS.updatePeSe())

})

app.get('/personaje', async function(req, res) {

    const newPS = new PersonajeService();

    res.send(await newPS.deleteByIdPeSe())

})

app.get('/personaje', async function(req, res) {

    const newPS = new PersonajeService();

    res.send(await newPS.getByNombrePer())

})

app.get('/personaje', async function(req, res) {

    const newPS = new PersonajeService();

    res.send(await newPS.getByTituloPeSe())

})


// Iniciamos el servidor

app.listen(3000, function() {

    console.log('Example app listening on port 3000!');

});