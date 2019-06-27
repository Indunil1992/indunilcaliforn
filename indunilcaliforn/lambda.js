let SL_AWS = require('slappforge-sdk-aws');
let connectionManager = require('./ConnectionManager');
const rds = new SL_AWS.RDS(connectionManager);

exports.handler = function (event, context, callback) {


    // You must always end/destroy the DB connection after it's used
    rds.beginTransaction({
        instanceIdentifier: 'indunil'
    }, function (error, connection) {
        if (error) {
            throw error;
        }
    });



    callback(null, { "message": "Successfully executed" });
}