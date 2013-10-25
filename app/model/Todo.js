/**
 * @class Demo.model.Todo
 * @extends Ext.data.Model
 * Description
 */
Ext.define('Demo.model.Todo', {
   extend: 'Ext.data.Model',

   fields:[{
   		name:'description',
   		type:'string'
   		//mapping:'description.short'
   	},{
   		name:'done',
   		type:'boolean'
   	},{
   		name:'deadline',
   		type:'date'
   	}],

   	proxy:{
   		type:'jsonp',
   		url:'http://api-codetlan.herokuapp.com/api/api/list_todos.json',
   		reader:{
   			type:'json',
   			root:'todos'
   		}
   	}
});