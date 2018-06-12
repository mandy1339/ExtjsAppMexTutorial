Ext.define('app.view.clientes.addclient.AddClientWindowController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.addclientwindowcontroller',

    addClientHandler: function() {
        var formulario = this.lookupReference('add-client-form');
        var formValues = formulario.getValues();
        console.log("FORMULARIO VALUES:");
        console.log(formValues);
        Ext.Ajax.request({
            url: '/server/client/addclient.json',
            params: formValues,

            success: function(response, opts) {
                var obj = Ext.decode(response.responseText);
                console.log("SUCCESS:");
                console.log(obj);
            },
            failure: function(response, opts) {
                console.log('FAILURE:');
                console.log(response);
            }
        })
    },

    addClientHandler2: function() {
        var formulario = this.lookupReference('add-client-form').getForm();
        formulario.submit({
            clientValidation: true,
            url: 'server/client/addclient.json',
            success: function(form, action) {
                Ext.Msg.alert('SUCCESS', action.result.msg);
                console.log(action.result.success);
            },
            failure: function(form, action) {
                switch (action.failureType) {
                    case Ext.form.action.Action.CLIENT_INVALID:
                        Ext.Msg.alert('Failure', 'Form fields may not be submitted with invalid values');
                        break;
                    case Ext.form.action.Action.CONNECT_FAILURE:
                        Ext.Msg.alert('Failure', 'Ajax communication failed');
                        break;
                    case Ext.form.action.Action.SERVER_INVALID:
                        Ext.Msg.alert('Failure', action.result.msg);
                        console.log('FAILED CUZ OF JSON FILE SAYS FALSE');
                        console.log(action.result.success);
                        console.log(form);
               }
            }
        })
    },



    loadFormHandler: function() {
        var formulario = this.lookupReference('add-client-form').getForm();
        formulario.load({
            url: '/server/client/loadclient.json',
            params: {eid: 13},
            failure: function(form, action) {
                Ext.Msg.alert("Load Failed", action);
            }
        })
    }

});