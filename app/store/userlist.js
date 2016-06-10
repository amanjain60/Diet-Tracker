Ext.define('Myapp.store.userlist', 
{
    requires: ['Myapp.model.userlist',
        'Ext.data.proxy.Rest'
    ],
    extend: 'Ext.data.Store',
    
    config: {
        model: 'Myapp.model.userlist',
        storeId: 'userlistStore',
      //  sorters: ('username'),
         proxy: {
            type:'rest',
                     reader: {
                type: 'json',
                rootProperty: 'root'    
                    }  
             
                }
             }
 });
