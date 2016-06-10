Ext.define('Myapp.view.Register', {
    extend: 'Ext.Panel',
    xtype: 'Register',
    id: 'Register',

    config: {

        scrollable: true,
        styleHtmlCOntent: true,
        layout: {

            align: 'center',
            pack: 'center'
        },


        items: [{
                xtype: 'fieldset',


                items: [{
                        xtype: 'button',
                        docked: 'top',
                        ui: 'rectangle',
                        id: 'Back',
                        text: 'Back',
                        margin: '0 0 20 0'
                    }, {
                        xtype: 'spacer',
                        height: '20%',

                    }, {

                        xtype: 'textfield',
                        name: 'Name:',
                        label: 'Name:',
                        required: true,
                        flex: 1,
                        id: 'username',


                    },

                    {
                        xtype: 'textfield',
                        name: 'Age:',
                        label: 'Age:',
                        required: true,
                        flex: 1,
                        id: 'userage',


                    },


                    // {
                    //   html: [
                    //    '<H1><b><font size="3">Sex:</font></b></H1>' ]
                    //   }, 
                    {
                        layout: 'hbox',
                        items: [{
                            xtype: 'radiofield',
                            name: 'color',
                            value: 'male',
                            label: 'Male',
                            labelWidth: '75px',
                            checked: true
                        }, {
                            xtype: 'radiofield',
                            name: 'color',
                            value: 'female',
                            labelWidth: '75px',
                            label: 'Female'
                        }, {
                            xtype: 'radiofield',
                            name: 'color',
                            value: 'others',
                            label: 'Others',
                            labelWidth: '75px'
                        }]
                    }, {
                        xtype: 'emailfield',
                        name: 'Email ID:',
                        label: 'Email ID:',
                        required: true,
                        flex: 1,
                        id: 'usermail',

                    }, {
                        xtype: 'textfield',
                        name: 'Password:',
                        label: 'Password:',
                        required: true,
                        flex: 1,
                        id: 'userpassword',
                    }, {
                        xtype: 'textfield',
                        name: 'Confirm Password:',
                        label: 'Confirm Password:',
                        required: true,
                        flex: 1,
                        id: 'userconfirmpassword',

                    }
                ]

            }, {
                xtype: 'button',
                text: 'Submit',
                ui: 'confirm',
                id: 'Submit'
            }

        ]
    }

});