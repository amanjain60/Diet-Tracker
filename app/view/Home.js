Ext.define('Myapp.view.Home', {
    extend: 'Ext.Container',
    xtype: 'homepanel',
    id: 'home',
    config: {
        title: 'Home',
        iconCls: 'home',
        cls: 'home',
        margin: '50 35 40 40',
        style: 'text-align:centre',
        scrollable: true,
        styleHtmlCOntent: true,
        html: [
            '<img src="raxa.png" height="150" width="150" />',
            '<H1><b><font size="18"><center>Welcome to Raxa Diet Center</center></font></b></H1>',
            "<p>Raxa Diet Center helps you to analyse your daily diet.",
            " What you have to do is to just enter your Daily Diet and we would ",
            "let you know what is missing in your diet.</p>"
        ].join(""),
        layout: {
            type: 'vbox',
            align: 'center'
        },
        items: [

            {
                xtype: 'button',
                docked: 'bottom',
                ui: 'round',
                text: 'New Users Click Here to Register',
                id: 'Registration'
            }
        ]
    },

});