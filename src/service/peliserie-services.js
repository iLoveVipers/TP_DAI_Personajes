import config from '../../dbconfig.js';
import sql from 'mssql';

class PeliserieService {
    getAllPeSe = async () => {
        let returnArray = null;
        console.log('Estoy en: PeliserieService.getAll()');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request().query("SELECT * from peliserie");
            returnArray = result.recordsets[0];
        }
        catch (error) {
            console.log(error);
        }
        return returnArray;
    }


    
    getByIdPeSe = async (id) => {
        let returnEntity = null;
        console.log('Estoy en: PeliserieService.getById(id)');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request()
                                .input('pId', sql.Int, id)
                                .query('SELECT * FROM Peliserie WHERE id = @pId');
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    insertPeSe = async (peliserie) => {
        let rowsAffected = 0;
        console.log('Estoy en: PeliserieService.insert(peliserie)');

        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pImagen'     , sql.NChar , peliserie?.imagen ?? '')
                .input('pNombre'     , sql.NChar , peliserie?.nombre ?? '')
                .input('pEdad'    , sql.Float , peliserie?.edad ?? 0)
                .input('pPeso'    , sql.Float , peliserie?.peso ?? 0)
                .input('pHistoria', sql.NChar , peliserie?.historia ?? '')
                .query(`INSERT INTO Peliserie (Imagen, Nombre, Edad, Peso, Historia) VALUES (@pImagen, @pNombre, @pEdad, @pPeso, @pHistoria)`);
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }

    updatePeSe = async (peliserie) => {
        let rowsAffected = 0;
        console.log('Estoy en: PeliserieService.update(peliserie)');

        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pImagen'     , sql.NChar , peliserie?.imagen ?? '')
                .input('pNombre'     , sql.NChar , peliserie?.nombre ?? '')
                .input('pEdad'    , sql.Float , peliserie?.edad ?? 0)
                .input('pPeso'    , sql.Float , peliserie?.peso ?? 0)
                .input('pHistoria', sql.NChar , peliserie?.historia ?? '')
                .input('pId'         , sql.Int   , peliserie?.id ?? 0)
                .query(`UPDATE Peliserie SET Nombre = @pNombre, Imagen=@pImagen, Edad=@pEdad, Peso=@pPeso, Historia=@pHistoria WHERE Id=@pId`);
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
    
    deleteByIdPeSe = async (id) => {
        let rowsAffected = 0;
        console.log('Estoy en: PeliserieService.deleteById(id)');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request()
                                .input('pId', sql.Int, id)
                                .query('DELETE FROM Peliserie WHERE id = @pId');
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }

    
    getByTituloPeSe = async (titulo, fecha) => {
        let returnEntity = null;
        console.log('Estoy en: PeliserieService.getByTitulo(titulo, fecha)');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request()
                                .input('pTitulo', sql.VarChar, titulo)
                                .input('pFecha_Creacion', sql.Date, fecha)
                                .query('SELECT * FROM Peliserie WHERE Titulo = @pTitulo AND  Fecha_Creacion = @pFecha_Creacion');
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

}

    export default PeliserieService;
    
    