/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('app.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        var panel = Ext.create('app.view.clientes.PanelClientes');
        
        var win = Ext.create('Ext.window.Window', {
            width: 800,
            height: 700,
            title: 'Seleccionar Cliente',
            layout: 'fit',
            items: panel,
            
            buttons: [{
                text: 'Select',
                scope: this,
                handler: function() {
                    panel.seleccionar();
                }
            }, {
                text: 'Cancel',
                scope: this,
                handler: function() {
                    win.hide();
                }
            }]
        });



        panel.on({
            selectcliente: function(panelclientes, rec) {
                win.hide();
                Ext.Msg.confirm('Cliente ' + rec.data.fname, 'Cliente selected: ' + rec.data.fname, 'onConfirm', this);
                // onConfirm function is in PanelClientes because "this" scope here refers to that panel
            },
            
        });

        win.show();
    },

});
