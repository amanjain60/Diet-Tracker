Ext.define('Myapp.view.user', {
    extend: 'Ext.Panel',
    xtype: 'report',
    id : 'userhome',
    config: {
         layout: {
            type: 'vbox',
            align: 'top'
        },
    	items: [{
            xtype: 'titlebar',
            docked: 'top',
            width: '100%',
            id: 'Welcome',
            title: 'Welcome',
            items: [{
                xtype: 'button',
                text: 'Logout',
                id: 'logout',
                align: 'right'
            }]
        },{
            xtype: 'button',
            docked: 'top',
            align: 'center',
            text: 'Click Here to find Daily Report',
            ui: 'confirm',                 
            id: 'dailyreport',
            margin: '15 0'
        },
  /*      {
            xtype: 'button',
            docked: 'top',
            align: 'center',
            text: 'Click Here to find Previous Report',
            ui: 'confirm',                 
            id: 'previousreport',
            margin: '15 0'
        }, */
   /*     {
            xtype: 'button',
            docked: 'top',
            align: 'center',
            text: 'Show Previous Dates',
            width: '70%',
            ui: 'confirm',                 
            id: 'showDates',
            margin: '2 0'
        }, */
 
        {
           xtype: 'list',
           width: '100%',
           height: '100%',
           id: 'dateDisplay',
           ui: 'confirm', 
           styleHtmlContent: true,
           masked: { xtype: 'loadmask',message: 'Retrieving your Previous Dates' },
         //  html: '',
           store: 'dateDetailsStore',
           itemTpl: new Ext.XTemplate(
                      '<div width="100%">',
                      '<div style="float:center;font-size:1.2em;color:"Black";">{date}</div>',
                      '</div>'),       
        }
     ]
   }

});