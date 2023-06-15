import config from '../../dbconfig.js';
import sql from 'mssql';

class PersonajeService {
    getAllPer = async () => {
        let returnArray = null;
        console.log('Estoy en: PersonajeService.getAll()');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request().query("SELECT * from Personaje");
            returnArray = result.recordsets[0];
        }
        catch (error) {
            console.log(error);
        }
        return returnArray;
    }


    
    getByIdPer = async (id) => {
        let returnEntity = null;
        console.log('Estoy en: PersonajeService.getById(id)');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request()
                                .input('pId', sql.Int, id)
                                .query('SELECT * FROM Personaje JOIN Personaje_Peliserie ON Personaje.Id = Personaje_Peliserie.fk_IdPersonaje LEFT JOIN Peliserie ON Peliserie.Id = Personaje_Peliserie.fk_IdPeliSerie WHERE Personaje.Id = @pId');
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    insertPer = async (personaje) => {
        let rowsAffected = 0;
        console.log('Estoy en: PersonajeService.insert(personaje)');

        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pImagen'     , sql.NChar , personaje?.imagen ?? '')
                .input('pNombre'     , sql.NChar , personaje?.nombre ?? '')
                .input('pEdad'    , sql.Float , personaje?.edad ?? 0)
                .input('pPeso'    , sql.Float , personaje?.peso ?? 0)
                .input('pHistoria', sql.NChar , personaje?.historia ?? '')
                .query(`INSERT INTO Personaje (Imagen, Nombre, Edad, Peso, Historia) VALUES (@pImagen = 'NULL', @pNombre = 'EQUIS', @pEdad = 18 , @pPeso = 55, @pHistoria = 'BLA BLA BLA')`);
            rowsAffected = result.rowsAffected;
        } catch (error) {

            console.log(error);
        }
        return rowsAffected;
    }

    updatePer = async (personaje) => {
        let rowsAffected = 0;
        console.log('Estoy en: PersonajeService.update(personaje)');

        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pImagen'     , sql.NChar , personaje.imagen ?? '')
                .input('pNombre'     , sql.NChar , personaje?.nombre ?? '')
                .input('pEdad'    , sql.Float , personaje?.edad ?? 0)
                .input('pPeso'    , sql.Float , personaje?.peso ?? 0)
                .input('pHistoria', sql.NChar , personaje?.historia ?? '')
                .input('pId'         , sql.Int   , personaje?.id ?? 0)
                .query(`UPDATE Personaje SET Nombre = @pNombre, Imagen=@pImagen, Edad=@pEdad, Peso=@pPeso, Historia=@pHistoria WHERE Id=@pId`);
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
    
    deleteByIdPer = async (id) => {
        let rowsAffected = 0;
        console.log('Estoy en: PersonajeService.deleteById(id)');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request()
                                .input('pId', sql.Int, id)
                                .query('DELETE FROM Personajes WHERE id = @pId');
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }

    getByNombrePer = async (nombre) => {
        let returnEntity = null;
        console.log('Estoy en: PersonajeService.getBynombre(nombre)');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request()
                                .input('pNombre', sql.VarChar, nombre)
                                .query('SELECT * FROM Personaje WHERE nombre = @pNombre');
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }
/*
    getDetallePer = async (id) => {
        let returnEntity = null;
        console.log('Estoy en: PersonajeService.getDetallePer(id)');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request()
                                .input('pId', sql.Int, id)
                                .query('SELECT * FROM Personaje WHERE id = @pId INNER JOIN PeliSerie ON Personaje.Id ');
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }
*/


}

    export default PersonajeService;
    
    