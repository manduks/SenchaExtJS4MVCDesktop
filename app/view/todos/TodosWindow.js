/**
 * @class Demo.view.todos.TodosWindow
 * @extends Ext.window.Window
 * Esta es la ventana que muestra los todos
 */
Ext.define('Demo.view.todos.TodosWindow', {
    extend: 'Ext.window.Window',
    requires: [
        'Demo.view.todos.TodosGrid',
        'Demo.view.todos.TodosForm'
    ],
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