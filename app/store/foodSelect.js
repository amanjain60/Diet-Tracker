Ext.define('Myapp.store.foodSelect', 
{	requires: ['Myapp.model.foodSelect',
    ],
    extend: 'Ext.data.Store',
    
    config: {
        model: 'Myapp.model.foodSelect',
        storeId: 'foodSelectStore',
           }
});