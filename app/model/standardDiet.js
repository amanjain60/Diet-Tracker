Ext.define('Myapp.model.standardDiet', {
    extend: 'Ext.data.Model',
    id: 'standardDietModel',
    config: {
        fields: [
        	{name:'percentwater',type: 'int'},
        	{name:'TotalFat',type: 'int'},
        	{name:'VitA',type: 'int'},
        	{name:'Calcium',type: 'int'},
        	{name:'VitC',type: 'int'},
        	{name:'Energy',type: 'int'},
        	{name:'Iron',type: 'int'},
        	{name:'Carbohydrate',type: 'int'},
        	{name:'Protein',type: 'int'},


     		 ]
   	  }
});
