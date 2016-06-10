Ext.define('Myapp.store.standardDiet', 
{
    requires: ['Myapp.model.standardDiet',
    ],
    extend: 'Ext.data.Store',
    
    config: {
        model: 'Myapp.model.standardDiet',
        storeId: 'standardDietStore',
        data:[
          {   
              TotalFat: '70',
              VitA: '1.5',
              VitC: '60',
              Calcium: '1000',
              Protein: '50',
              Carbohydrate: '310',
              Iron: '80',
              Energy: '2080',

             }
        ]
      }
 });
