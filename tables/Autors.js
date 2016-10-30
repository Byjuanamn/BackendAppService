/**
 * Created by byjuanmn
 */

var azureMobileApps = require('azure-mobile-apps');

var table = azureMobileApps.table();

table.columns = {
    "name" : "string",
    "secondName": "string",
    "published": "string"
};


table.dynamicSchema = false;

/*
*   Trigger para insert
*
* */

table.insert(function (context) {

    context.item.usuario = context.user.id;
    return context.execute();
});


table.read(function (context) {
    context.query.where({usuario : context.user.id});
    return context.execute();
});

/*
* Permisos de acceso a la tabla
*
* */


table.read.access = 'anonymous';
table.update.access = 'authenticated';
table.delete.access = 'authenticated';
table.insert.access = 'authenticated';


module.exports = table;

