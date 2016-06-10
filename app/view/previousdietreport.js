Ext.define('Myapp.view.previousdietreport', {
    extend: 'Ext.Panel',
    xtype: 'search',
    id: 'previousdietreport',
    config: {
        layout: {
            type: 'vbox',
            align: 'top'
        },
        items: [{
            xtype: 'titlebar',
            docked: 'top',
            width: '100%',
            id: 'Previous Reports',
            title: 'Previous Reports',
            items: [{
                xtype: 'button',
                text: 'Back',
                id: 'backuserhome',
            }]
        }, {
            xtype: 'searchfield',
            placeHolder: 'Search for the Date',
            name: 'searchfield',
            docked: 'top',
            width: '100%',
            id: 'searchdateButton'
        }]
    }
});