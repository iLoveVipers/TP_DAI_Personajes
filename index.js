import PersonajeService from './src/service/personajes-services.js'
import PeliserieService from './src/service/peliserie-services.js'
import Personaje from './src/models/personaje.js'
import Peli_Serie from './src/models/peli_serie.js'
import sql from 'mssql'
import express from 'express'

const app = express ();
const port = 3100;

//await test_getAllPer();
//await test_getByIdPer();
//await test_insertPer();
//await test_updatePer();
//await test_deleteByIdPer();
//await test_getAllPeSe();
//await test_getByIdPeSe();
//await test_insertPeSe();
//await test_updatePeSe();
//await test_deleteByIdPeSe();
//await test_getByNombrePer();
//await test_getByTituloPeSe();

/*async function test_getAllPer(){
    let svc = new PersonajesService();
    let data;

    data = await svc.getAllPer();
    console.log(data);  
}*/

/*async function test_getAllPeSe(){
    let svc = new PeliserieService();
    let data;

    data = await svc.getAllPeSe();
    console.log(data);  
}*/

/*async function test_getByNombrePer(){
    let svc = new PersonajeService();
    let data;

    data = await svc.getByNombrePer('Aurora', 16 );
    console.log(data);  
} */

/*app.get('/personaje', async function (req, res) {

    const newPS = new PersonajeService()
    res.send(await newPS.getAllPer(

    ))
});*/

app.get("/home", function (req, res) {
    res.send("hola")
})

app.listen(port, () => {

    console.log(`Escuchando el port ${port}`)
});

process.exit();