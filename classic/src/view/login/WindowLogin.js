Ext.define('app.view.login.WindowLogin', {
    
    extend: 'Ext.window.Window',
    controller: 'windowlogincontroller',
    
    title: 'Welcome user',
    height: 190,
    draggable: false,
    closable: true,
    buttonAlign: 'center',   
    modal: true,

    items: [{
        xtype: 'form',
        id: 'window-form-id',
        reference: 'formulario',
        bodyPadding: 10,
        
        items: [{
            xtype: 'textfield',
            allowBlank: false,
            fieldLabel: 'User',
            name: 'user',
            vtype: 'email'
        },{
            xtype: 'textfield',
            allowBlank: false,
            inpytType: 'password',
            fieldLabel: 'Password',
            name: 'pass'
        }]
    }],
    
    buttons: [{
        iconCls: 'x-fa fa-user',
        text: 'Enter',
        handler: 'hacerLogin',
    }]


});