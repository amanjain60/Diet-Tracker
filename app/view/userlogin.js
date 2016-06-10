Ext.define('Myapp.view.userlogin', {
    extend: 'Ext.Container',
    id: 'loginpage',
    config: {


        scrollable: true,
        html: [

            '<H1><b><font size="18"><center>Welcome to Raxa Diet Center</center></font></b></H1>',
            "<p>Raxa Diet Center helps you to analyse your daily diet.",
            " What you have to do is to just enter your Daily Diet and we would ",
            "let you know what is missing in your diet.</p>"
        ].join(""),


        items: [{
                xtype: 'titlebar',
                docked: 'top',
                width: '100%',
                title: 'Raxa Diet Tracker'
            }, {
                xtype: 'button',
                docked: 'bottom',
                align: 'center',
                text: 'SignUp',
                ui: 'confirm',
                id: 'signup',
                margin: '15 0'
            },

            {
                xtype: 'button',
                docked: 'bottom',
                align: 'center',
                text: 'Login',
                ui: 'confirm',
                id: 'login',
                margin: '15 0',

            }, {
                xtype: 'spacer',
                height: '20%'
            }, {
                xtype: 'passwordfield',
                name: 'Password:',
                label: 'Password:',
                id: 'userpassword',
                docked: 'bottom',
                placeHolder: 'Password',



            }, {

                xtype: 'emailfield',
                name: 'Login ID:',
                label: 'Login ID:',
                id: 'userid',
                docked: 'bottom',
                bind: 'user',
                placeHolder: 'email@example.com',
             }]
        }     
});