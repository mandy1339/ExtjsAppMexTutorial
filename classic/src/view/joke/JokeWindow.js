Ext.define('app.view.joke.JokeWindow', {
    extend : 'Ext.window.Window',

    controller : 'jokewindowcontroller',

    title : 'What a JOKE M8',
    id: 'joke-window-id',
    layout: {
        type: 'vbox',
        align: 'left'
    },
    x : 0,
    y : 0,
    closable : false,
    height : 300,
    width : 300,
    
    buttons: [{
        iconsCls : 'x-fa fa-user',
        text : 'JOKE',
        handler : 'closeAndJoke',
    }],
});