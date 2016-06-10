Ext.define('Myapp.view.Main', {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.TitleBar'],
    id: 'Main',

    config: {
        tabbarPosition: 'top',

        items:[
        {
            xtype: 'homepanel',
            id: 'home'

        },

        {
            xtype: 'login',
            id: 'loginpage'
        },
        
        ]
    }
  
});
           