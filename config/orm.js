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
        //INSERT INTO tableName SET values;
        connection.query("INSERT INTO ?? SET ?", [tableName, values], (err, results) =>{
            if(err) throw err;
            cb( results );
        })

    },


    updateOne(tableName, newValue, targetId, cb ){
        // UPDATE tableName SET values WHERE id = targetId
        connection.query( "UPDATE ?? SET ? WHERE id = ?", [tableName, newValue, targetId])
        if(err) throw err;
        cb( results );
    }


};

module.exports = orm;