import PersonajeService from './src/service/personajes-services.js'

import PeliserieService from './src/service/peliserie-services.js'

import Personaje from './src/models/personaje.js'

import Peli_Serie from './src/models/peli_serie.js'

import sql from 'mssql'

import express from 'express'
import e from 'express'

 

const app = express ();


 

app.get('/', function(req, res) {

    res.send('Soy la Home Page!');

})


 

app.get('/personaje', async function(req, res) {

    const newPS = new PersonajeService();

    res.send(await newPS.getAllPer())

})

app.get('/personaje/:id', async function(req, res) {

    const newPS = new PersonajeService();
    let id = req.params.id;
    res.send(await newPS.getByIdPer(id))

})

app.get('/personaje/nombre/:nombre', async function(req, res) {

    const newPS = new PersonajeService();
    let nombre = req.params.nombre;
    res.send(await newPS.getByNombrePer(nombre))

})

app.get('/instert-pj/:imagen/:nombre/:edad/:peso/:historia', async function(req, res) {

    const newPS = new PersonajeService();
    const newPer = {imagen:req.params.imagen, nombre:req.params.nombre, edad:req.params.edad, peso:req.params.peso, historia:req.params.historia,}
    res.send(await newPS.insertPer(newPer))

})

app.get('/update-pj/:id', async function(req, res) {

    const newPS = new PersonajeService();
    let id =req.params.id;
    res.send(await newPS.updatePer(id))

})

app.get('/delete-pj/:id', async function(req, res) {

    const newPS = new PersonajeService();
    let id =req.params.id;
    res.send(await newPS.deleteByIdPer(id))

})

app.get('/peliserie', async function(req, res) {

    const newPS = new PeliserieService();

    res.send(await newPS.getAllPeSe())

})

app.get('/peliserie/:id', async function(req, res) {

    const newPS = new PeliserieService();
    let id = req.params.id;
    res.send(await newPS.getByIdPeSe(id))

})

app.get('/peliserie/titulo/:titulo', async function(req, res) {

    const newPS = new PeliserieService();
    let titulo = req.params.titulo;
    let año = req.params.titulo;
    res.send(await newPS.getByTituloPeSe(titulo))

})

app.get('/update-pese/:id', async function(req, res) {

    const newPS = new PeliserieService();
    let id =req.params.id;
    res.send(await newPS.updatePeSe(id))

})

app.get('/delete-pese/:id', async function(req, res) {

    const newPS = new PeliserieService();
    let id =req.params.id;
    res.send(await newPS.deleteByIdPeSe(id))

})


// Iniciamos el servidor

app.listen(3000, function() {

    console.log('Example app listening on port 3000!');

});