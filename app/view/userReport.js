Ext.define('Myapp.view.userReport', {
    extend: 'Ext.Container',
    id: 'userReport',
    config: {

        scrollable: true,
 
        items: [{
                xtype: 'titlebar',
                docked: 'top',
                width: '100%',
                title: 'Analysis Report',
                items: [{
                xtype: 'button',
                text: 'Home',
                id: 'backuserhome',
                align: 'left'
                 },
                {
                xtype: 'button',
                text: 'Logout',
                id: 'logout',
                align: 'right'
                 }

                ]}, 
                {
                xtype: 'label',
                html: '<b><font size="14"><center>Raxa Diet Tracker Analysis Report</center></font></b>',
                margin: '25 0',
                masked: { xtype: 'loadmask',message: 'Loading your Report' },
                },
         /*       {
                xtype: 'label',
                id: 'displayName', 
                margin: '20 0'
                },*/
                {
                xtype: 'label',
                id: 'Sufficient', 
                margin: '5 0'
                },
                {
                xtype: 'label',
                id: 'Sufficient1',
                margin: '5 0'
                },
                {
                xtype: 'label',
                id: 'Sufficient2',
                margin: '5 0'
                },
                {
                xtype: 'label',
                id: 'Sufficient3',
                margin: '5 0'
                },
                {
                xtype: 'label',
                id: 'Sufficient4',
                margin: '5 0'
                },
                {
                xtype: 'label',
                id: 'Sufficient5',
                margin: '5 0'
                },
                {
                xtype: 'label',
                id: 'Sufficient6',
                margin: '5 0'
                },
                {
                xtype: 'label',
                id: 'Sufficient7',
                margin: '5 0'
                },
                {
                xtype: 'label',
                id: 'Sufficient8',
                margin: '5 0'
                },
                {
                xtype: 'spacer',
                margin: '15 0'
                },
                {
                xtype: 'label',
                id: 'Missing', 
                margin: '5 0'
                },
                {
                xtype: 'label',
                id: 'Missing1',
                margin: '5 0'
                },
                {
                xtype: 'label',
                id: 'Missing2',
                margin: '5 0'
                },
                {
                xtype: 'label',
                id: 'Missing3',
                margin: '5 0'
                },
                {
                xtype: 'label',
                id: 'Missing4',
                margin: '5 0'
                },

                {
                xtype: 'label',
                id: 'Missing5',
                margin: '5 0'
                },
                {
                xtype: 'label',
                id: 'Missing6',
                margin: '5 0'
                },
                {
                xtype: 'label',
                id: 'Missing7',
                margin: '5 0'
                },
                {
                xtype: 'label',
                id: 'Missing8',
                margin: '5 0'
                },
                {
                xtype: 'spacer',
                margin: '15 0'
                },
                {
                xtype: 'label',
                id: 'Food', 
                margin: '5 0'
                },
                {
                xtype: 'label',
                id: 'Food1', 
                margin: '3 0'
                },
                {
                xtype: 'label',
                id: 'Food2', 
                margin: '3 0'
                },
                {
                xtype: 'label',
                id: 'Food3', 
                margin: '3 0'
                },
                {
                xtype: 'label',
                id: 'Food4', 
                margin: '3 0'
                },
                {
                xtype: 'label',
                id: 'Food5', 
                margin: '3 0'
                },
                {
                xtype: 'label',
                id: 'Food6', 
                margin: '3 0'
                },
                {
                xtype: 'label',
                id: 'Food7', 
                margin: '3 0'
                },
                {
                xtype: 'label',
                id: 'Food8', 
                margin: '3 0'
                },
                

            ]
        }     
});