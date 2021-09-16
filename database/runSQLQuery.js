const sql = require('mssql')



 async function getData (config, queryStatement, value){

    try {
        let pool = await sql.connect(config)
        let result1 = await pool.request()
            .input('input_parameter', sql.Int, value)
            .query(queryStatement+' where id = @input_parameter');
        await pool.close();
        return result1.recordset;
    } catch (err) {
          throw "Database is not connected!!!"
    }

}

async function getQueryData (config, queryStatement){
    try {
        let pool = await sql.connect(config)
        let result1 = await pool.request()
            .query(queryStatement);
        await pool.close();
        return result1.recordset;
    } catch (err) {
        throw "Database is not connected!!!"
    }
}


async function postData (config, queryStatement, value){

    try {
        let pool = await sql.connect(config)
        let result1 = await pool.request()
            .input('input_parameter', sql.Int, value)
            .query(queryStatement+ " VALUES (@input_parameter, 'Testing');");
    
        return result1.recordset;
    } catch (err) {
        throw "Database is not connected!!!"
    } 
}



   module.exports = {
    getData,
    postData,
    getQueryData
   }
