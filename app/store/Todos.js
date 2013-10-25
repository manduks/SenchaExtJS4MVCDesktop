/**
 * @class Demo.store.Todos
 * @extends Ext.data.Store
 * store para todos
 */
Ext.define('Demo.store.Todos',{
    extend: 'Core.data.Store',
    requires: [
       	'Demo.model.Todo'
    ],
    model:'Demo.model.Todo'
});