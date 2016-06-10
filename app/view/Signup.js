Ext.define('Myapp.view.Signup', {
    extend: 'Ext.Panel',
    // xtype: 'Signup',
    id: 'signuppage',
    config: {

        scrollable: true,
        //  styleHtmlCOntent: true,
        layout: {

            align: 'center',
            pack: 'center',
            margin: '15 0'
        },


        items: [{
                xtype: 'fieldset',
                instructions: 'Please enter the information above',
                defaults:
                {
                    label: '40%',
                },
                


                items: [{
                        xtype: 'button',
                        align: 'left',
                        width: '20%',
                        ui: 'rectangle',
                        text: 'Back',
                        id: 'backloginpage',
                        margin: '0 0 20 0'
                    }, {
                        xtype: 'spacer',
                        //  height: '20%',

                    }, {

                        xtype: 'textfield',
                        name: 'Name:',
                        label: 'Name:',
                        required: true,
                        margin: '15 0',
                        id: 'username',
                        placeHolder: 'John',
                        listeners: {
                            change: function(textField, newValue) {
                                if (newValue.length !== 0) {
                                    if (/[^A-Za-z0-9.\-_]/.test(newValue)) {
                                        Ext.Msg.alert('Error', "Please Enter a valid Name");
                                        textField.setValue('');
                                    }
                                }
                            }
                        }

                    },

                    {
                        xtype: 'textfield',
                        name: 'Age:',
                        label: 'Age:',
                        required: true,
                        margin: '15 0',
                        id: 'userage',
                        placeHolder: '21',
                        listeners: {
                            change: function(textField, newValue) {
                                if (newValue.length !== 0) {
                                    if (/[^0-9]/.test(newValue)) {
                                        Ext.Msg.alert('Error', "Please Enter a valid Age");
                                        textField.setValue('');
                                    }
                                }
                            }
                        }

                    },

                    {
                        layout: 'hbox',
                        items: [{
                            xtype: 'radiofield',
                            name: 'color',
                            value: 'male',
                            label: 'Gender: Male',
                            labelWidth: '125px',
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
                        margin: '15 0',
                        id: 'usermail',
                        placeHolder: 'email@example.com',
                        listeners: {
                            change: function(textField, newValue) {
                                var passedValid = 0;
                                if (newValue.length !== 0) {
                                    //Note: Extreme cases can crash the app because of this regex!
                                    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(newValue)) {
                                        Ext.Msg.alert('Error', 'Please Enter a valid Email Address', null, null, -1, true);
                                        textField.setValue('');
                                    }
                                }
                            }

                        }

                    }, {
                        xtype: 'passwordfield',
                        name: 'Password:',
                        label: 'Password:',
                        required: true,
                        margin: '15 0',
                        id: 'userpassword',
                        placeHolder: 'Password'
                    }, {
                        xtype: 'passwordfield',
                        name: 'Retype Password:',
                        label: 'Retype Password:',
                        required: true,
                        margin: '15 0',
                        id: 'userconfirmpassword',
                        placeHolder: 'Retype Password'

                    }
                ]

            }, {
                xtype: 'button',
                text: 'Submit',
                ui: 'confirm',
                id: 'submituserdetails',
                width: '100%',
                
            }

        ]
    }

});