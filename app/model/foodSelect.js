Ext.define('Myapp.model.foodSelect', {
    extend: 'Ext.data.Model',
    id: 'foodSelectStoreModel',
    config: {
        fields: [
        	{name:'Food',type: 'string'},
        	{name: 'foodID', type: 'int'},
        	
     		 ]
   	  }
});
