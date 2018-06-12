Ext.define('app.view.clientes.addclient.AddClientWindow', {
    extend: 'Ext.window.Window',
    xtype: 'addclientwindow',


    bodyPadding: 10,
    layout: 'fit',
    controller: 'addclientwindowcontroller',

    // initComponent: function() {
    //     this.items=[{
    //         xtype: 'textfield',
    //         fieldLabel: 'Nombre'
    //     }, {
    //         xtype:'textfield',
    //         fieldLabel: 'Correo',
    //         vtype:'email'
    //     }];
    //     this.callParent();
    // },

    title: 'add client form',

    items: [{


            xtype: 'form',              // FORM
            id: 'add-client-form',
            reference: 'add-client-form',
            defaultType: 'textfield',
            fieldDefaults: {
                anchor: '100%',
                msgTarget: 'under',
                allowBlank: false,
                labelAlign: 'right',
                labelWidth: 110,
            },
            items: [{
                fieldLabel: 'First Name',       // f name
                name: 'fname',
                vtype: 'alpha'
            }, {
                fieldLabel: 'Last Name',        // l name
                name: 'lname',
                vtype: 'alpha'
            },{
                fieldLabel: 'Email',            // email
                name: 'email',
                vtype: 'email'
            }, {
                xtype: 'displayfield',          // apodo
                fieldLabel: 'Apodo',
                name: 'apodo',
                value: 'Por asignar...'
            }, {
                xtype: 'numberfield',           // age
                fieldLabel: 'Edad',
                maxValue: 99,
                minValue: 0,
                allowDecimals: false,
                name: 'edad'
            }, {
                xtype: 'datefield',             // bday
                fieldLabel: 'Birth Date',
                maxValue: new Date(),
                format: "m-d-Y",
                allowBlank: true,
                name: 'bday'
            }, {
                xtype: 'radiogroup',
                fieldLabel: 'gÉnero',
                vertical: true,
                items: [
                    { boxLabel: 'Hombre', name: 'gender', inputValue: '1' },
                    { boxLabel: 'Mujer', name: 'gender', inputValue: '2', checked: true }
                ]
            }, {

                xtype: 'checkboxgroup',
                fieldLabel: 'Idiomas',
                columns: 2,
                vertical: true,
                items: [
                    {boxLabel: 'French', name: 'lang', inputValue: '1'},
                    {boxLabel: 'Portuguese', name: 'lang', inputValue: '2'},
                    {boxLabel: 'German', name: 'lang', inputValue: '3'},
                    {boxLabel: 'English', name: 'lang', inputValue: '4'},
                    {boxLabel: 'Spanish', name: 'lang', inputValue: '5'}
                ]
            }],
            bbar: ['->',{                       // bbar
                xtype: 'button',
                text: 'add client',
                handler: 'addClientHandler2',
            },
            {
                xtype: 'button',
                text: 'load form',
                handler: 'loadFormHandler',
            }, {
                xtype: 'button',
                text: 'close',
                handler: 'closeFormHandler',
            }]

        
    }]


    //FORM


});