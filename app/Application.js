Ext.define('Demo.Application', {
    name: 'Demo',

    extend: 'Ext.app.Application',

    requires:[
        'Ext.data.JsonP',
        'Demo.Desktop'
    ],

    views: [
        // TODO: add views here
    ],

    controllers: [
        'Demo.controller.Main',
        'Demo.controller.Pendientes'
    ],

    stores: [
        'Todos'
    ]
});
