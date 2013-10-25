Ext.define('Demo.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.layout.container.Card',
        'Demo.view.users.login.LoginForm'
    ],
    
    xtype: 'main-view',

    layout: {
        type: 'card'
    },

    defaults:{
        xtype:'container'
    },

    activeItem:0,

    items: [{        
        xtype:'container',
        layout:{
            type:'hbox',
            pack:'center',
            align:'middle'
        },
        items:[{
            xtype:'loginform'
        }]
    },{
        xtype:'container'
    }]
});