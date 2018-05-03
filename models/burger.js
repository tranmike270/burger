var orm = require('../config/orm.js');



var burger = {
    view : function(callback){
        orm.selectAll(function(err,results){
            if(err) console.log(err);
            callback(null, results);
        });
    },
    new : function(name,callback){
        orm.insertOne(name, function(err,results){
            if(err) console.log(err);

            callback(null,results);
        });
    },
    update : function(id,toggle, callback){

        orm.updateOne(id,toggle, function(err, results){
            if(err) console.log(err);

            callback(null,results);
        });
    }
};

module.exports= burger;



