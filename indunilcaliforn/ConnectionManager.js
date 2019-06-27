module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["indunil"] = {
        host: process.env.EndPoint_rdsIndunil,
        port: process.env.Port_rdsIndunil,
        user: process.env.User_rdsIndunil,
        password: process.env.Password_rdsIndunil,
        database: "indunil"
    };
};