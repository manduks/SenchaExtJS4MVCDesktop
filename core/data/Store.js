/**
 * @class Core.data.Store
 * @extends Ext.data.Store
 * store genereico para aplicacion
 */
Ext.define('Core.data.Store',{
    extend: 'Ext.data.Store',
    autoLoad:false,
    listeners: {
        beforeload: function (store, operation, ops) {
            store.getProxy().extraParams = {
				auth_token : localStorage.getItem("auth_token")
            };
        }
    }
});