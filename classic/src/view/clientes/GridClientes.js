Ext.define('app.view.clientes.GridClientes', {
    extend: 'Ext.grid.GridPanel',

    xtype: 'gridclientes',

    initComponent: function() {
        var theStore = Ext.create('app.store.clientes.StoreClientes', { autoLoad: true});
        Ext.apply(this, {
            store: theStore,
            columns: [
                {text: 'Nombre', dataIndex: 'fname', flex: 1},
                {text: 'Apellido', dataIndex: 'lname', flex: 1, renderer: function (val, meta, rec) {
                    return rec.nombreToHTML();
                }},
                {text:'Email', dataIndex: 'email', flex: 1.5},
                {text:'DOB', dataIndex: 'bday', width: 160, type: 'date', renderer: Ext.util.Format.dateRenderer('F d, Y')},
                {text:'ID', dataIndex: 'eid', width: 40},
                {
                    xtype: 'actioncolumn',
                    width: 50,
                    items: [{
                        icon: 'http://www.iconhot.com/icon/png/bunch-cool-bluish-icons/512/edit-29.png',
                        tooltip: 'Edit',
                        handler: function(grid, rowIndex, colIndex) {
                            var rec = grid.getStore().getAt(rowIndex);
                            alert("Edit " + rec.get('fname'));
                        }
                    }, {
                        icon: 'http://www.endlessicons.com/wp-content/uploads/2012/12/trash-icon-614x460.png',
                        tooltip: 'Delete',
                        handler: function(grid, rowIndex, colIndex) {
                            var rec = grid.getStore().getAt(rowIndex);
                            Ext.Msg.confirm('Delete client', 'Are you sure you want to delete ' + '<b>' + rec.get('fname') + rec.data.lname + '<b>', function(respuesta) {
                                if(respuesta == 'yes') {
                                    grid.store.remove(rec);
                                }
                            })
                        }
                    }]
                }
            ],

            dockedItems: [{
                xtype: 'pagingtoolbar',
                dock: 'bottom',
                displayInfo: true
            }]
        });
        this.callParent();
    },
    
});