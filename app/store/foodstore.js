    Ext.define('Myapp.store.foodstore', {
        requires: ['Myapp.model.foodstoreModel'],

        extend: 'Ext.data.Store',

        config: {
            model: 'Myapp.model.foodstoreModel',
            storeId: 'foodstore',
            // sorters: ('Food'),
            proxy: {
                type: 'ajax',
                url: '/dietData.json',
                reader: {
                    type: 'json',
                },
            },

            autoLoad: true,
        }

    });