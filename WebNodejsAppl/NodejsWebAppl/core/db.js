var sqlDb = require("mssql");
var settings = require("../settings");

exports.executeSql = function (sql, callback) {
    var conn = new sqlDb.Connection(settings.dbConfig);
    conn.connect().then(function (data) {
        var req = new sqlDb.Request(conn);
        req.query(sql).then(function (data) {
            if (data) {
                callback(data);                
            } else {
                callback([]);
            }           

            conn.close();
        }).catch(function (err) {
            console.log(err);
            callback(null, err);
            conn.close();
        });
    }).catch(function (err) {
        console.log(err);
        callback(null, err);
        conn.close();
    });
};