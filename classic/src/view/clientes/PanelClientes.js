Ext.define('app.view.clientes.PanelClientes', {
    extend: 'Ext.Panel',
    layout: 'border',
    xtype: 'panelclientes',
    controller: 'panelclientescontroller',



    // TOP BAR
    //---------
    tbar: [{
        text: "Add Client",
        tooltip: 'click to add new client using pop up form',
        iconCls: 'x-fa fa-plus',
        handler: 'showAddClientHandler'
    },'->',{
        xtype: 'comboclientes',
        emptyText: 'clients',
        width: 300
    }],
    //--------
    // TOP BAR
    


    // CENTER REGION (tabpanel)
    //--------------
    items: [{
        region: 'center',
        xtype: 'tabpanel',
        reference: 'client-tab-panel',
        layout: 'fit',
        items: [{                           // TABS
            xtype: 'gridclientes',              // TAB 1
            title: 'tab 1',
            reference: 'gridlistado',
            listeners: {
                itemClick: 'showClienteDetalle'
            }
        }, {
            xtype: 'panel',                     // TAB 2
            html: 'content2',
            title: 'tab 2'
        }]
    },
    //--------------
    // CENTER REGION
    


    // SOUTH REGION
    //-------------
    {
        height: 100, //px
        region: 'south',
        reference: 'southregionpanel',
        bodyStyle: 'background-color: yellow; color: black',
        tpl: '<h1>{fname} {lname}</h1>'+
            '<br>' +
            '{apodo}' + ' age: {edad}'
    }],
    //-------------
    // SOUTH REGION



    // BOTTOM  BAR
    //------------
    bbar: [{
        text: 'Eth Price',
        handler: 'getEtherPriceHandler',
        tooltip: 'click to get ethereum price'
    }, {
        xtype: 'textfield',
        reference: 'display-eth-price-field',
        editable: false,
    }, {
        text: 'Add New Tab',
        handler: 'addNewTabHandler',
        // bodyStyle: 'margin-left: 100px;'
    }, {
        xtype: 'textfield',
        reference: 'name-of-tab-field',
        emptyText: 'name of tab',
    }],
    //------------
    // BOTTOM  BAR
    


    seleccionar: function() {
        var me = this;
        var rec = this.lookupReference('gridlistado').getSelectionModel().getSelection();
        this.fireEvent('selectcliente', this, rec[0]);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
            Ext.Msg.alert('WOOOO');
        }
    },
});