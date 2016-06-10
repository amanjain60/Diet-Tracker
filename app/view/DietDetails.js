Ext.define('Myapp.view.DietDetails', {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.field.Select',
        'Ext.field.Search',
    ],
    id: 'Diet',

    config: {
        scrollable: true,
        styleHtmlCOntent: true,

        tabBar: {
            title: 'Daily Diet Details',

            items: [{
                title: 'Logout',
                html: '<h1><b><font size="4">Logout</font></b></h1',
                id: 'Logout',
                docked: 'right',

            }, {
                title: 'Back',
                html: '<h1><b><font size="4">Back</font></b></h1>',
                docked: 'left',
                id: 'Previous'
            }]
        },

        layout: {

            align: 'center'
        },

        items: [

            {

                xtype: 'list',
                width: '100%',
                height: '100%',
                id: 'foodId',    
               // scrollable: 'vertical',
                store: 'foodliststore',
                itemTpl: new Ext.XTemplate(
                '{[Ext.getStore(\'foodliststore\').findRecord("Food")]}'),
                autoload: true
                     
             }]
    }


});

