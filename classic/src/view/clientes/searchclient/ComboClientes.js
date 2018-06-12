Ext.define('app.view.clientes.searchclient.ComboClientes', {
    extend: 'Ext.form.ComboBox',

    xtype: 'comboclientes',


    //queryMode: 'remote', by default
    displayField: 'fname',
    valueField: 'eid',
    pageSize: 25,
    initComponent: function() {
        Ext.apply(this, {
            store: Ext.create('app.store.clientes.StoreClientes')
        });
        this.callParent();
    }
});