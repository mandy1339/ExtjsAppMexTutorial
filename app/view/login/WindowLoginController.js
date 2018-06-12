Ext.define('app.view.login.WindowLoginController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.windowlogincontroller',

    hacerLogin: function () {
             
        var formulario = this.lookupReference('formulario');

        console.log(`formulario values: `);
        console.log(formulario.getValues());
        var datos = formulario.getValues();

        Ext.Ajax.request({
            url: 'server/login/login.json',
            scope: this, // lets us use 'this' to refer to the ctrler stead of ajax
            params: datos,
       
            success: function(response, opts) {
                var obj = Ext.decode(response.responseText);
                console.dir(obj);
                console.log('SUCCESS');
                Ext.Msg.alert('LOGIN MESSAGE', 
                                'Your user info: <br />' + obj.username + ", " 
                                + obj.password + ' \n'
                                + "<br />You entered: <br />" + datos.user + ', ' + datos.pass,
                                function() {
                                    console.log("INSIDE ALERT")
                                    console.log(this);    
                                },
                            this
                );
                console.log("INSIDE AJAX");
                console.log(this);
                console.log(this.getView());
                this.getView().close();
                
            },
       
            failure: function(response, opts) {
                console.log('FAILURE');
                console.log('server-side failure with status code ' + response.status);
            }
        });

    }

});