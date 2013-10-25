/**
 * @class Demo.view.todos.TodosForm
 * @extends Ext.form.Panel
 * Formulario para agregar todos
 */
Ext.define('Demo.view.todos.TodosForm',{
    extend: 'Ext.form.Panel',
    alias: 'widget.todosform',
    requires: [
    	'Ext.layout.container.Form',
    	'Ext.ux.DataTip',
        'Ext.form.field.Date'
    ],

    layout:'form',

    //width:270,
    bodyPadding:'5 5 0',
    frame:true,
    title:'Todo Form',

    fieldDefaults:{
    	msgTarget:'side'
    },

    plugins:{
    	ptype:'datatip'
    },

    items:[{
        xtype:'textfield',
        fieldLabel:'Descripción',
        name:'description',
        allowBlank:false
    },{
        xtype:'datefield',
        fieldLabel:'Fecha de entrega',
        name:'deadline',
        format: 'd-m-Y'
    }],
    buttons: [{
        text:'Agregar',
        disabled:true,
        formBind:true,
        handler:function (btn) {
            var form = btn.up('form'),          
                values = form.getForm().getValues();

                values.done = false;
                values.auth_token = localStorage.getItem('auth_token');

            Ext.data.JsonP.request({
                url:'http://api-codetlan.herokuapp.com/api/api/add_todo.json',
                params: values,
                callback:function (c, action) {
                    if(action.response.success == true){
                        form.fireEvent('todoadded',form);
                    }
                    else{
                        Ext.Msg.alert('Error',action.response.message);
                    }
                }
            });
        }
    }]
    
});