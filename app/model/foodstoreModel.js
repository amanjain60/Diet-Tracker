Ext.define('Myapp.model.foodstoreModel', {
    extend: 'Ext.data.Model',
    id: 'foodstoreModel',
    config: {
        fields: [
        	{name:'Food',type: 'string'},
        	{name:'FoodType',type: 'string'},
        	{name:'percentwater',type: 'int'},
        	{name:'TotalFat',type: 'int'},
        	{name:'VitA',type: 'int'},
        	{name:'Calcium',type: 'int'},
        	{name:'VitC',type: 'int'},
        	{name:'Energy',type: 'int'},
        	{name:'Iron',type: 'int'},
        	{name:'Carbohydrate',type: 'int'},
        	{name:'Protein',type: 'int'},
            {name:'foodID',type: 'int'},
            {name: 'ServingSize', type: 'string'},

        		 ]
   		  }
});
