Ext.define('app.view.clientes.PanelClientes', {
    extend: 'Ext.Panel',
    layout: 'border',
    xtype: 'panelclientes',
    controller: 'panelclientescontroller',
    model: 'panelclientesmodel',



    // TOP BAR
    //---------
    tbar: [{
        text: "Add Client",
        tooltip: 'click to add new client using pop up form',
        iconCls: 'x-fa fa-plus',
        handler: 'showAddClientHandler'
    },'->',{
        xtype: 'comboclientes',
        emptyText: 'im not a button',
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
            xtype: 'panel',                     // TAB 1
            html: 'content',
            title: 'tab 1',
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
        html: 'border sur',
        bodyStyle: 'background-color: yellow; color: black'
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
    
});