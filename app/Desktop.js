
Ext.define('Demo.Desktop', {
    extend: 'Ext.ux.desktop.App',

    requires: [
        'Ext.window.MessageBox',
        'Ext.ux.desktop.ShortcutModel',


        'Demo.view.todos.TodosModule'
    ],

    init: function() {
        this.callParent();
    },

    getModules : function(){
        var privilegios = localStorage.getItem('privilegios');
        privilegios = Ext.decode(privilegios);

        var modules = privilegios.modules;

        var modulesAux = [];

        Ext.each(modules, function(item) {
            modulesAux.push(Ext.create(item));
        }, this);

        return modulesAux;
    },

    getDesktopConfig: function () {
        var me = this, ret = me.callParent();

        var privilegios = localStorage.getItem('privilegios');

        privilegios = Ext.decode(privilegios);

        return Ext.apply(ret, {
            //cls: 'ux-desktop-black',

            contextMenuItems: [
                { text: 'Change Settings', handler: me.onSettings, scope: me }
            ],

            shortcuts: Ext.create('Ext.data.Store', {
                model: 'Ext.ux.desktop.ShortcutModel',
                data: privilegios.shortcuts
            }),

            wallpaper: 'resources/wallpapers/Blue-Sencha.jpg',
            wallpaperStretch: false
        });
    },

    // config for the start menu
    getStartConfig : function() {
        var me = this, ret = me.callParent();

        return Ext.apply(ret, {
            title: 'Don Griffin',
            iconCls: 'user',
            height: 300,
            toolConfig: {
                width: 100,
                items: [
                    {
                        text:'Settings',
                        iconCls:'settings',
                        handler: me.onSettings,
                        scope: me
                    },
                    '-',
                    {
                        text:'Logout',
                        iconCls:'logout',
                        handler: me.onLogout,
                        scope: me
                    }
                ]
            }
        });
    },

    getTaskbarConfig: function () {
        var ret = this.callParent();

        return Ext.apply(ret, {
            quickStart: [
                { name: 'Accordion Window', iconCls: 'accordion', module: 'todos-win' },
                { name: 'Grid Window', iconCls: 'icon-grid', module: 'todos-win' }
            ],
            trayItems: [
                { xtype: 'trayclock', flex: 1 }
            ]
        });
    },

    onLogout: function () {
        Ext.Msg.confirm('Logout', 'Are you sure you want to logout?');
    },

    onSettings: function () {
        var dlg = new MyDesktop.Settings({
            desktop: this.desktop
        });
        dlg.show();
    }
});