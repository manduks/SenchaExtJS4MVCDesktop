Ext.define('Demo.controller.Pendientes', {
    extend: 'Ext.app.Controller',

    init: function	() {
    	this.control({
    		'todosform':{
    			todoadded: this.alAgregarTodo
    		}
    	});
    },
    alAgregarTodo:function (form) {
        Ext.getStore('Todos').load();
        form.getForm().reset();
    }
});