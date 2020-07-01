const orm = require('../config/orm');

const burger = {
    all(){
        orm.selectAll('burgers');
    },
    insert(){
        orm.insertOne( 'burgers' );
    },
    update(){
        orm.updateOne( 'burgers' )
    }
};
module.exports = burger