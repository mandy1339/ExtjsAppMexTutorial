Ext.define('app.model.clientes.ClienteModel', {
    extend: 'Ext.data.Model',

    fields: [
        {name: "eid", type: "int"},
        "fname",
        "lname",
        "email",
        "apodo",
        {name: "edad", type: "int"},
        {name: "bday", type: 'date'},
        {name: "gender", type: "int"},
        "lang"
    ],

    nombreToHTML: function() {
        return '<b>'+ this.get('lname') +'<b> ' + this.data.edad;
    }

});