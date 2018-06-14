Ext.define('app.view.clientes.PanelClientesController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.panelclientescontroller',

    showAddClientHandler: function() {
        var addClientForm = Ext.create('app.view.clientes.addclient.AddClientWindow');
        addClientForm.show();
    },

    getEtherPriceHandler: function() {
        Ext.Ajax.useDefaultXhrHeader = false;
        Ext.Ajax.request({
            useDefaultXhrHeader : false,
            method: 'GET',
            scope: this,
            url: 'https://api.etherscan.io/api?module=stats&action=ethprice&apikey=YourApiKeyToken',
            
            success: function(response, opts) {
                var obj = Ext.decode(response.responseText);
                console.log("SUCCESS");
                console.dir(obj);
                this.lookupReference('display-eth-price-field').setValue(obj.result.ethusd);
            },
            failure: function(response, opts) {
                console.log('Failed ajax ' + response.status);
            }

        });
    },

    addNewTabHandler: function() {
        var tabName = this.lookupReference('name-of-tab-field').getValue();
        // var num = Ext.id();
        var tempPanel = Ext.create('Ext.Panel', {
            title: tabName,
            closable: true,
            layout: 'vbox',
            items: [{
                xtype: 'panel',
                html: 'hijo1',
                bodyStyle: 'background-color: purple; color: white',
                flex: 2
            }, {
                xtype: 'panel',
                layout: 'hbox',
                title: 'hijo 2',
                flex: 3,
                bodyStyle: 'background-color: blue; color: white',
                width: '100%'
            }]
        })
        this.lookupReference('client-tab-panel').add(tempPanel);   
    },

    showClienteDetalle: function(grid, rec) {
        console.info(rec);
        console.log('NAME:');
        console.log(rec.data.apodo);

        var panel = this.lookupReference('southregionpanel');
        panel.update(rec.data);
    },

});