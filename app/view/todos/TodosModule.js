

Ext.define('Demo.view.todos.TodosModule', {
    extend: 'Ext.ux.desktop.Module',

    requires: [
        'Demo.view.todos.TodosGrid',
        'Demo.view.todos.TodosForm'
    ],

    id:'todos-win',

    init : function(){
        this.launcher = {
            text: 'Todos Window',
            iconCls:'tabs'
        }
    },

    createWindow : function(){
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('todos-win');
        if(!win){
            win = desktop.createWindow({
                id: 'todos-win',
                closeAction:'hide',
                title:'Todos',
                width:500,
                height:400,

                layout:{
                        type:'hbox',
                        align:'stretch'
                    },

                items:[{
                    xtype:'todosgrid',
                    flex:1
                },{
                    xtype:'todosform',
                    flex:1
                }]
            });
        }
        return win;
    }
});
