var connection = require('./connection.js');


var orm = {
    selectAll : function(callback){
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err,data){
            if(err) throw err;
       
            callback(null,data);
        })
    },
    insertOne: function(name, callback){
        var queryString ="INSERT INTO burgers SET ?";
        connection.query(queryString,
            {
                burger_name: name,
                devoured: 0
            },
        function(err){
            if(err) throw err;

            callback(null, "Added new burger!");
        });
    },
    updateOne: function(id, toggle, callback){
      
        var queryString ="UPDATE burgers SET devoured = ? WHERE id = ?";
        connection.query(queryString,[toggle,id],
        function(err, data){
            if(err) throw err;
            callback(null, data);
        });

    }
}

module.exports = orm;
