Ext.define('Myapp.controller.controller', {
    extend: 'Ext.app.Controller',
    requires: [
        'Ext.data.proxy.Rest'
    ],
    config: {
        views: ['Home', 'Login', 'Register', 'Main', 'User', 'Picker', 'DietDetails'],
        refs: {

            Registration: '#Registration',
            Submit: '#Submit',
            login: '#login',
            Back: '#Back',
            loginpage: '#loginpage',
            Logout: '#Logout',
            Previousreport: '#Previousreport',
            Previous: '#Previous',
            DietPage: '#DietPage',
          

        },

        control: {
            Registration: {
                tap: 'RegistrationFunction'
            },
            Submit: {
                tap: 'SubmitFunction'
            },
            Back: {
                tap: 'BackFunction'
            },
            login: {
                tap: 'loginFunction'
            },
            Logout: {
                tap: 'LogoutFunction'
            },
            Previousreport: {
                tap: 'PreviousreportFunction'
            },
            Previous: {
                tap: 'PreviousFunction'
            },
            DietPage: {
                tap: 'DietPageFunction'
            },
            
        }
    },

    RegistrationFunction: function() {
        Ext.getCmp('home').hide();
        Ext.getCmp('Main').hide();
        if (!Ext.getCmp('Register')) {
            Ext.Viewport.add(Ext.create('Myapp.view.Register'));
        }

        Ext.getCmp('Register').show();

    },

    BackFunction: function() {
        Ext.getCmp('Register').hide();

        if (!Ext.getCmp('Main')) {
            Ext.Viewport.add(Ext.create('Myapp.view.Main'));
        }

        if (!Ext.getCmp('home')) {
            Ext.Viewport.add(Ext.create('Myapp.view.Home'));
        }

        Ext.getCmp('Main').show();
        Ext.getCmp('home').show();

    },

    loginFunction: function() {
        console.log("login clicked")

        var loginid=Ext.getCmp('loginid').getValue();
        var loginpassword=Ext.getCmp('loginpassword').getValue();


        Ext.getCmp('loginpage').hide();
        Ext.getCmp('Main').hide();

        if (!Ext.getCmp('User')) {
            Ext.Viewport.add(Ext.create('Myapp.view.User'));
        }

        Ext.getCmp('User').show();

    },

    LogoutFunction: function() {
        if (Ext.getCmp('Diet') != null) {
            Ext.getCmp('Diet').hide();
        }
        if (Ext.getCmp('User') != null) {
            Ext.getCmp('User').hide();
        }
        if (!Ext.getCmp('Main')) {
            Ext.Viewport.add(Ext.create('Myapp.view.Main'));
        }

        if (!Ext.getCmp('home')) {
            Ext.Viewport.add(Ext.create('Myapp.view.Home'));
        }

        Ext.getCmp('Main').show();
        Ext.getCmp('home').show();

    },

    PreviousreportFunction: function() {

        if (!Ext.getCmp('Picker')) {
            Ext.Viewport.add(Ext.create('Myapp.view.Picker'));
        }

        Ext.getCmp('picker').show();
    },

    PreviousFunction: function() {

        Ext.getCmp('Diet').hide();
        
        if (!Ext.getCmp('User')) {
            Ext.Viewport.add(Ext.create('Myapp.view.User'));
        }

        Ext.getCmp('User').show();
    },

    DietPageFunction: function() {

        Ext.getCmp('User').hide();

        if (!Ext.getCmp('DietDetails')) {
            Ext.Viewport.add(Ext.create('Myapp.view.DietDetails'));
        }


        Ext.getCmp('Diet').show();
    },

    SubmitFunction: function()
	{	console.log("Submit clicked")
		
	    var username=Ext.getCmp('username').getValue();
        var userage=Ext.getCmp('userage').getValue();
        var usermail=Ext.getCmp('usermail').getValue();
		var userpassword = Ext.getCmp('userpassword').getValue();
		var userconfirmpassword = Ext.getCmp('userconfirmpassword').getValue();
        
        if(userpassword==userconfirmpassword)
        {	console.log("password matched")

			Ext.getCmp('Register').hide();
    		console.log("hidden")

        	if (!Ext.getCmp('Main')) {
            Ext.Viewport.add(Ext.create('Myapp.view.Main'));
        	}

        	if (!Ext.getCmp('loginpage')) {
            Ext.Viewport.add(Ext.create('Myapp.view.Login'));
       		}

        	Ext.getCmp('Main').show();
        	Ext.getCmp('loginpage').show();

        }
       	else
        {	
        	console.log("password not matched")
           	Ext.getCmp('Register').show();	
        }
    }
});