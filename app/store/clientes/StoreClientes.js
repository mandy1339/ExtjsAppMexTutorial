Ext.define('app.store.clientes.StoreClientes', {
    extend: 'Ext.data.Store',

    fields: [{name: "eid", type: "int"},
        "fname",
        "lname",
        "email",
        "apodo",
        {name: "edad", type: "int"},
        {name: "bday", type: "date", format: "m-d-Y"},
        {name: "gender", type: "int"},
        "lang"],

    proxy: {
        type: 'ajax',
        url: 'server/client/listcustomers.json',

        reader: {
            type: 'json', 
            rootProperty: 'data'
        }
    }
});