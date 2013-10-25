Ext.define('Demo.controller.Main', {
    extend: 'Ext.app.Controller',

    refs:[{
    	ref:'main',
    	selector:'main-view'
    }],

    init: function	() {
    	this.control({
    		'loginform':{
    			loginsuccesfull: this.onLoginUser
    		},
            'window grid':{
                render: this.onGridShow
            }
    	});
    },
    onGridShow:function (grid) {
        grid.getStore().load();
    },
    onLoginUser:function(form,token, privilegios) {
        //guardamos el token para futuras peticiones
        localStorage.setItem('auth_token', token);
        localStorage.setItem('privilegios', Ext.encode(privilegios));
        
        myDesktopApp = Ext.create('Demo.Desktop');
    },
    onLaunch:function () {
        if(localStorage.getItem('auth_token')){
            myDesktopApp = new Demo.Desktop();
        }
    }
});
