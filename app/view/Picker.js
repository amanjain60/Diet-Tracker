Ext.define('Myapp.view.Picker', {
    extend: 'Ext.Picker',
    doneButton: true,
    cancelButton: true,
    id: 'picker',
    config: {
        height: '60%',
        toolbar: {
            ui: 'light',
            title: 'Previous Reports!'
        },
        items: [{
                xtype: 'textfield',
                name: 'Date:',
                margin: '35 0',
                label: 'Date:',
                required: true,
                flex: 1

            },

            {
                xtype: 'button',
                text: 'Check Report',
                ui: 'rectangle',
                width: '40%',
                height: '20%',
                margin: '35 0',
                id: 'GenerateReport'

            },



        ]

    }

});