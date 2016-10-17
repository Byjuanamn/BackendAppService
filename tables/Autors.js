/**
 * Created by byjuanmn
 */

var azureMobileApps = require('azure-mobile-apps');

var table = azureMobileApps.table();

table.columns = {
    "name" : "string",
    "secondName": "string"
};

/*
* Permisos de acceso a la tabla
*
* */


table.read.access = 'authenticated';
table.update.access = 'disabled';


module.exports = table;

