const connection = require("./connection");

const orm = {
    selectAll(columns, tableName, cb) {
        //
        connection.query("SELECT ?? FROM ??", [columns, tableName], (err, results) =>{
            if(err) throw err;
            cb( results );

        });
    },


    insertOne(tableName, values, cb){
        
        connection.query("INSERT INTO ?? SET ?", [tableName, values], (err, results) =>{
            if(err) throw err;
            cb( results );
        })

    },


    updateOne(tableName, newValues, targetId, cb ){
          
            connection.query( "UPDATE ?? SET ? WHERE id = ?", [tableName, newValues, targetId], (err, results) =>{
            if(err) throw err;
            cb( results );
        });
    },
    delete(tableName, condition, cb) {
        let queryString = "DELETE FROM " + tableName;
        queryString += " WHERE ";
        queryString += condition;

        connection.query( queryString, (err, result) =>{
            if (err) {
                throw err;
            }
            cb(result);

        });
    }
};

module.exports = orm;