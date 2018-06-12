Ext.define('app.view.joke.JokeWindowController',{
    extend : 'Ext.app.ViewController',

    alias : 'controller.jokewindowcontroller',

    closeAndJoke : function() {
        this.getView().close();
        Ext.Msg.alert('Why did the chicken cross the road?', 'To get to the other side');
    }

});