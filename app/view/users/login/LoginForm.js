/**
 * @class Demo.view.users.login.LoginForm
 * @extends Ext.form.Panel
 * Formulario de login de nuestra applicacion
 */
Ext.define('Demo.view.users.login.LoginForm',{
    extend: 'Ext.form.Panel',
    alias: 'widget.loginform',
    requires: [
    	'Ext.layout.container.Form',
    	'Ext.ux.DataTip'
    ],

    layout:'form',

    width:270,
    height:150,
    bodyPadding:'5 5 0',
    frame:true,
    title:'Login',

    fieldDefaults:{
    	msgTarget:'side'
    },

    plugins:{
    	ptype:'datatip'
    },

    items:[{
    	xtype:'textfield',
    	name:'email',
    	fieldLabel:'Email',
    	vtype:'email',
    	value:'armando@cursa.me',
    	allowBlank:false
    },{
    	xtype:'textfield',
    	name:'password',
    	fieldLabel:'Password',
    	inputType:'password',
    	value:'12345678',
    	allowBlank:false
    }],

    buttons: [{
    	text:'Login',
    	disabled:true,
    	formBind:true,
    	handler:function (btn) {
    		var form = btn.up('form');
    		Ext.data.JsonP.request({
    			url:'http://api-codetlan.herokuapp.com/api/tokens/create.json',
    			params: form.getForm().getValues(),
    			callback:function (c, action) {

                    var privilegios = {
                        modules:[
                            'Demo.view.todos.TodosModule',
                            'Demo.view.todos.TodosModule',
                            'Demo.view.todos.TodosModule',
                            'Demo.view.todos.TodosModule'
                            ],
                        shortcuts:[{ name: 'Grid Window', iconCls: 'grid-shortcut', module: 'todos-win' }]
                    };

    				if(action.response.success == true){
    					form.fireEvent('loginsuccesfull',
    						form, action.response.auth_token,privilegios);
    				}
    				else{
    					Ext.Msg.alert('Error',action.response.message);
    				}
    			}
    		});
    	}
    }]
});