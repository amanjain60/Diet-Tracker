Ext.define('Myapp.view.Login', {
    extend: 'Ext.Container',
    xtype: 'login',
    id: 'loginpage',


    config: {

        title: 'Login',
        iconCls: 'user',
        url: 'login.php',
        margin: '50 35',



        html: [
            '<img src="raxa.png" width="150" height="150" />',
            '<H1><b><font size="6"><center>Enter your Login details</center></font></b></H1>'
        ],


        layout: {
            type: 'vbox',
            align: 'center',
            packed: 'center'
        },


        items: [{
                xtype: 'fieldset',
                docked: 'bottom',

                items: [{
                    xtype: 'emailfield',
                    name: 'Login ID:',
                    label: 'Login ID:',
                    id: 'loginid'

                }, {
                    xtype: 'textfield',
                    name: 'Password:',
                    label: 'Password:',
                    id: 'loginpassword'
                }]

            }, {
                xtype: 'button',
                docked: 'bottom',
                align: 'center',
                text: 'Login',
                ui: 'confirm',
                id: 'login'
            }

        ]
    }

});