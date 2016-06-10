Ext.define('Myapp.store.dateDetails', 
{	requires: ['Myapp.model.standardDiet',
    ],
    extend: 'Ext.data.Store',
    
    config: {
        model: 'Myapp.model.dateDetails',
        storeId: 'dateDetailsStore',
           }
});