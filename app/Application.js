/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('app.Application', {
    extend: 'Ext.app.Application',

    name: 'app',

    stores: [
        // TODO: add global / shared stores here
    ],

    // // adding a launch function to see how it will affect the app
    // launch: function () {
    //     var ventana = Ext.create('app.view.login.WindowLogin', {});
    //     var ventana2 = Ext.create('app.view.joke.JokeWindow', {});
        
    //     ventana.show();
    //     ventana2.show();
    // },


    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
