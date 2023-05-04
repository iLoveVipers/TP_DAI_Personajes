import PersonajesService from './src/service/personajes-services.js'
import PeliserieService from './src/service/peliserie-services.js'
import Personaje from './src/models/personaje.js'
import Peli_Serie from './src/models/personaje.js'


//await test_getAllPer();
await test_getByIdPer();
//await test_insertPer();
//await test_updatePer();
//await test_deleteByIdPer();
//await test_getAllPeSe();
//await test_getByIdPeSe();
//await test_insertPeSe();
//await test_updatePeSe();
//await test_deleteByIdPeSe();

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

async function test_getByIdPer(){
    let svc = new PersonajesService();
    let data;

    data = await svc.getByIdPer(2);
    console.log(data);  
}


process.exit();