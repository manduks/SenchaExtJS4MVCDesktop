/**
 * @class Demo.view.todos.TodosGrid
 * @extends Ext.grid.Panel
 * El grid que lista los todos
 */
Ext.define('Demo.view.todos.TodosGrid',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.todosgrid',
    columns:[
    	{text:'Descripcion', dataIndex:'description'},
    	{text:'Terminado?', dataIndex:'done'},
    	{text:'Fecha limite', dataIndex:'deadline'},
    ],
    store:'Todos'
});