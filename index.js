import PersonajesService from './src/services/pizzas-services.js'
import Personaje from './src/models/personaje.js'
import Peli_Serie from './src/models/personaje.js'


await test_getAll();
//await test_getById();
//await test_insert();
//await test_update();
//await test_deleteById();

async function test_getAll(){
    let svc = new PizzasService();
    let data;

    data = await svc.getAll();
    console.log(data);  //muestro todas las pizzas

    //console.log(data[0].Id);
    //console.log(data[0].id);
    //console.log(data[0].Id);
}

process.exit();