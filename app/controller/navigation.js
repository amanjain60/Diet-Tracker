Ext.define('Myapp.controller.navigation', {
    extend: 'Ext.app.Controller',
    requires: [
        'Ext.dataview.List'
    ],
    config: {
        views: ['userlogin', 'Signup', 'dietchart', 'user', 'previousdietreport', 'userReport'],
        refs: {

            signup: '#signup',
            login: '#login',
            submituserdetails: '#submituserdetails',
            backloginpage: '#backloginpage',
            foodid: '#foodid',
            dailyreport: '#dailyreport',
            backuserhome: '#backuserhome',
            logout: '#logout',
            previousreport: '#previousreport',
            dateDisplay: '#dateDisplay',
            diettaken: '#diettaken',
            presentReport: '#presentReport',
            searchFood: '#searchFood',
            dietSelected: '#dietSelected',

        },

        control: {

            login: {
                tap: 'loginFunction'
            },
            signup: {
                tap: 'signupFunction'
            },
            submituserdetails: {
                tap: 'submituserdetailsFunction'
            },
            backloginpage: {
                tap: 'backloginpageFunction'
            },
            foodid: {
                tap: 'foodidFunction'
            },
            dailyreport: {
                tap: 'dailyreportFunction'
            },
            backuserhome: {
                tap: 'backuserhomeFunction'
            },
            logout: {
                tap: 'logoutFunction'
            },
            dateDisplay: {
                itemtap: 'previousReportFunction'
            },
            presentReport: {
                tap: 'presentReportFunction'
            },
            diettaken: {
                itemtap: 'diettakenFunction'
                }, 
            /*    showDates: {
                     tap: 'showDatesFunction'
                 },*/
            searchFood: {
                action: 'searchFoodFunction'
            },
            dietSelected:{
                itemtap: 'dietSelectedFunction'
            }

        }
    },

    signupFunction: function() {
        console.log("Signup clicked")
        Ext.getCmp('loginpage').hide();

        if (!Ext.getCmp('signuppage')) {
            Ext.Viewport.add(Ext.create('Myapp.view.Signup'));
        }

        Ext.getCmp('signuppage').show();
    },


    loginFunction: function() {
        console.log("login clicked")
        console.log(Ext.getCmp('userid').getValue());

        var loginid = Ext.getCmp('userid').getValue();

        var loginpassword = Ext.getCmp('userpassword').getValue();
        //    var store = Ext.StoreManager.get('userlistStore');
        Ext.Ajax.request({
            scope: this,
            url: 'http://localhost:5005/login?loginid=' + loginid,
            method: 'GET',
            success: function(response) {
                localStorage.setItem('loginid',loginid);
                localStorage.setItem('loggedInUser',true);
                var verificationJSON = Ext.decode(response.responseText);
                console.log(verificationJSON[0].Password);

                if (verificationJSON[0].Password == loginpassword) {
                    console.log("Yeah")
                    Ext.getCmp('loginpage').hide();
                    if (!Ext.getCmp('userhome')) {
                        Ext.Viewport.add(Ext.create('Myapp.view.user'));
                    }

                  
                    Ext.getCmp('userpassword').reset();
                    Ext.getCmp('userhome').show();
                    initialize: this.showDatesFunction();

                } else {
                    Ext.Msg.alert("Invalid Username or Password.", " Try Again.", Ext.emptyFn);


                }

            }

        });
    },

    submituserdetailsFunction: function() {
        console.log("Submit clicked")

        var username = Ext.getCmp('username').getValue();
        var userage = Ext.getCmp('userage').getValue();
        var usermail = Ext.getCmp('usermail').getValue();
        var userpassword = Ext.getCmp('userpassword').getValue();
        var userconfirmpassword = Ext.getCmp('userconfirmpassword').getValue();

        if ((username != "") && (userage != "") && (usermail != "") && (userpassword != "") && (userpassword == userconfirmpassword)) {
            console.log("password matched")
            console.log("Signup Process initiated")

            Ext.Ajax.request({
                scope: this,
                url: 'http://localhost:5005/signup?username=' + username + "&userage=" + userage + "&usermail=" + usermail + "&userpassword=" + userpassword,
                method: 'GET',
                success: function(response) {
                    console.log(username);
                    localStorage.setItem('Username', username);
                    localStorage.setItem('Age', userage);
                    localStorage.setItem('mail_id', usermail);
                    localStorage.setItem('Password', userpassword);
                    console.log(localStorage.name);

                    console.log("Signup Completed")
                    Ext.getCmp('signuppage').hide();

                    console.log(Ext.getCmp('username'))

                //    if(Ext.getCmp('username)')){Ext.getCmp('username)').reset();}
                //    if(Ext.getCmp('userage)')){Ext.getCmp('userage)').reset();}
                //    localStorage.reset();
                    Ext.getCmp('username').reset();
                    Ext.getCmp('userage').reset();
                    Ext.getCmp('usermail').reset();
                    Ext.getCmp('userpassword').reset();
                    Ext.getCmp('userconfirmpassword').reset();

                    Ext.Msg.alert("Registration Successful.", " Click to login.", Ext.emptyFn);

                    if (!Ext.getCmp('loginpage')) {
                        Ext.Viewport.add(Ext.create('Myapp.view.userlogin'));
                    }

                    Ext.getCmp('loginpage').show();
                }

            });


        } else {
            console.log("password not matched")
            Ext.Msg.alert('Alert', 'Enter Details Properly', Ext.emptyFn);
            Ext.getCmp('signup').show();
        }


    },
    searchFoodFunction: function() {
        var searchText = Ext.getCmp('searchFood').getValue();
        var store = Ext.StoreMgr.get('foodstore');
        /*    store.setProxy({ 
               url: 'localhost:5005/searchFood?food='+searchText
             }); */
        store.filter('Food', searchText);
        store.load();

    },

    backloginpageFunction: function() {
        console.log("back to loginpage clicked")

        Ext.getCmp('signuppage').hide();

        if (!Ext.getCmp('loginpage')) {
            Ext.Viewport.add(Ext.create('Myapp.view.userlogin'));
        }

        Ext.getCmp('loginpage').show();
    },

    dailyreportFunction: function() {
        console.log("Daily Report clicked")
        Ext.getCmp('userhome').hide();

        if (!Ext.getCmp('dietchartlist')) {
            Ext.Viewport.add(Ext.create('Myapp.view.dietchart'));
        }

        Ext.getCmp('dietchartlist').show();

    },

    backuserhomeFunction: function() {
        console.log("Back to User Home clicked")
        if (Ext.getCmp('dietchartlist') != null) {
            Ext.getCmp('dietchartlist').hide();
        }

        if (Ext.getCmp('previousdietreport') != null) {
            Ext.getCmp('previousdietreport').hide();
        }

        if (Ext.getCmp('userReport') != null) {
            initialize: this.clearUserReport();
            Ext.getCmp('userReport').hide();
        }
        
        if (Ext.getCmp('dietchartlist') != null)
        {
        Ext.getCmp('presentDate').reset();
        Ext.getCmp('foodCount').setHtml("");
  //      Ext.getCmp('diettaken').reset();
        var store = Ext.StoreMgr.get('foodSelectStore');
        store.removeAll();
        }

        initialize: this.showDatesFunction();

        if (!Ext.getCmp('userhome')) {
            Ext.Viewport.add(Ext.create('Myapp.view.user'));
        }
        Ext.getCmp('userhome').show();

     },

    logoutFunction: function() {
        console.log("Logout clicked")

        if (Ext.getCmp('userReport') != null) {
            initialize: this.clearUserReport();
            Ext.getCmp('userReport').hide();
        }

        if (Ext.getCmp('userhome') != null) {
            Ext.getCmp('userhome').hide();
        }

        if (Ext.getCmp('dietchartlist') != null) {
            Ext.getCmp('dietchartlist').hide();
        }

        if (Ext.getCmp('dietchartlist') != null)
        {
        Ext.getCmp('presentDate').reset();
        Ext.getCmp('foodCount').setHtml("");
  //      Ext.getCmp('diettaken').reset();
        var store = Ext.StoreMgr.get('foodSelectStore');
        store.removeAll();
        }

        var store = Ext.StoreMgr.get('dateDetailsStore');
        store.removeAll();


        if(Ext.getCmp('userid')){
            Ext.getCmp('userid').reset()
        }
        
        localStorage.clear();
        
        //    if(Ext.getCmp('loginpage')){Ext.getCmp('loginpage').reset();}
        //   if(Ext.getCmp('showDates')){Ext.getCmp('showDates').reset();}

        Ext.Msg.alert("Confirmation", "Logout Successful", Ext.emptyFn);

        if (!Ext.getCmp('loginpage')) {
            Ext.Viewport.add(Ext.create('Myapp.view.userlogin'));
        }

        Ext.getCmp('loginpage').show();
    },

    showDatesFunction: function() {
        console.log("Show Dates clicked")
        var mail = localStorage.loginid;
        console.log(mail);
        Ext.Ajax.request({
            scope: this,
            url: 'http://localhost:5005/userDate?Mail=' + mail,
            method: 'GET',
            success: function(response) {
                var dateDetails = Ext.decode(response.responseText);
                //     console.log(dateDetails[4].Date);
                //     var store = Ext.getStore('dateDetailsStore');   
                //   Ext.getStore('dateDetailsStore').load();

                var store = Ext.getStore('dateDetailsStore');
                //   Ext.getStore('dateDetailsStore').add(dateDetails);
                //    var Store=Ext.getCmp('dateDetailsStore').getStore();
                store.load();


                i = 0;
                while (dateDetails[i] != undefined) { // Ext.getCmp('dateDisplay').setHtml(dateDetails[i].Date);
                    var rawDate = dateDetails[i].Date;
                    // console.log(rawDate);
                    var date = Ext.Date.format(new Date(rawDate), 'F j, Y');
                    // console.log(date);
                    var previousDate = {
                        "date": date
                    }
                    store.add(previousDate);
                    i = i + 1;
                    //   Ext.getStore('dateDetailsStore').load();
                    //   console.log(dateDetails[i].Date)
                }
            }
        });

        /*     this.push({
                 xtype:'timestamp',
                 data:record.dateDetails
             });    */


        /*    Ext.getCmp('userhome').hide();

            if (!Ext.getCmp('previousdietreport')) {
                Ext.Viewport.add(Ext.create('Myapp.view.previousdietreport'));
            }

            Ext.getCmp('previousdietreport').show(); */
    },


    /*    diettakenFunction: function(list, index, target, record)

        {   
                console.log("Food Chosen")
                var foodID = Ext.Cm
                console.log(foodID);      
                Ext.Ajax.request({
                    scope: this,
                    url: 'http://localhost:5005/analyseData?foodID='+foodID,
                    method: 'GET',     
                    success: function(response){
                        var currentMeal = Ext.decode(response.responseText);
                        console.log("Current Meal:")
                        console.log(currentMeal);
                        localStorage.setItem('Meal', currentMeal);
                       }
              });             
         },
    */
    presentReportFunction: function() {
        var user = localStorage.loginid;
        //   console.log(user);
    //   var foodID = Ext.getCmp('diettaken').getSelection();
        var store = Ext.getStore('foodSelectStore');
      //  console.log(store.data.all);
        var foodID=store.data.all;
        var presentDate = Ext.getCmp('presentDate').getValue();
        console.log(presentDate);
        Ext.Ajax.request({
            scope: this,
            url: 'http://localhost:5005/mealID?user=' + user + "&presentDate=" + presentDate,
            method: 'GET',
            success: function(response) {
                var mealDetails = Ext.decode(response.responseText);
                console.log(mealDetails);
                localStorage.setItem('Mail', user);
                localStorage.setItem('Date', presentDate);

                Ext.Ajax.request({
                    scope: this,
                    url: 'http://localhost:5005/mealofdate?user=' + user + "&presentDate=" + presentDate,
                    method: 'GET',
                    success: function(response) {
                        var mealID = Ext.decode(response.responseText);
                        console.log(mealID[0].Meal);
                        i = 0;
                        while (foodID[i] != undefined) {
                            var food = foodID[i].data.foodID;
                            Ext.Ajax.request({
                                scope: this,
                                url: 'http://localhost:5005/foodID?Meal=' + mealID[0].Meal + "&foodID=" + food,
                                method: 'GET',
                                success: function(response) {

                                    localStorage.setItem('Meal', mealID);
                                    localStorage.setItem('foodID', food);


                                    //    console.log(localStorage.foodID);
                                }
                            });

                            i = i + 1;
                        }
                    }
                });
            }
        });
        var i = 0;
        var selectFood = {};

        while (foodID[i] != undefined) {
            selectFood[i] = {
                "foodID": foodID[i].data.foodID
            };
            i = i + 1;
        }

        Ext.getCmp('dietchartlist').hide();
        if (!Ext.getCmp('userReport')) {
            Ext.Viewport.add(Ext.create('Myapp.view.userReport'));
        }

        Ext.getCmp('userReport').show();

        initialize: this.analysisReportFunction(user, presentDate, selectFood);
    },

    previousReportFunction: function(dataview, index, target, record, e, options) {
     //   console.log(record);
        var dateSelect = record;


        var user = localStorage.loginid;
        console.log(dateSelect);
        console.log(user);

        previousDate = Ext.Date.format(new Date(dateSelect.data.date), 'Y-m-d');
        console.log(previousDate);

        Ext.Ajax.request({
            scope: this,
            url: 'http://localhost:5005/mealofdate?user=' + user + "&presentDate=" + previousDate,
            method: 'GET',
            success: function(response) {
                var mealID = Ext.decode(response.responseText);
                console.log(mealID)
                Ext.Ajax.request({
                    scope: this,
                    url: 'http://localhost:5005/foodOfDate?meal=' + mealID[0].Meal,
                    method: 'GET',
                    success: function(response) {
                        var foodDetails = Ext.decode(response.responseText);
                        console.log("FOOD:" + foodDetails[0].foodID);

                        Ext.getCmp('userhome').hide();
                        if (!Ext.getCmp('userReport')) {
                            Ext.Viewport.add(Ext.create('Myapp.view.userReport'));
                        }

                        Ext.getCmp('userReport').show();
                        initialize: this.analysisReportFunction(user, previousDate, foodDetails);
                    }
                });
            }
        });
    },


    analysisReportFunction: function(user, date, foodID) {
        var user = user;
        console.log(user);

        var date = date;
        console.log(date);

        var foodDetails = foodID;
        console.log(foodDetails);

        var store = Ext.getStore('foodstore');
        //  Ext.getStore('foodstore').load();
        var i = 0;
        var Calcium = 0;
        var Iron = 0;
        var Energy = 0;
        var Protein = 0;
        var Carbohydrate = 0;
        var TotalFat = 0;
        var VitA = 0;
        var VitC = 0;
        while (foodDetails[i] != undefined) {
            var foodID = foodDetails[i].foodID;
            console.log("FoodID" + foodID)
            var allData = Ext.getStore('foodstore').findRecord('foodID', foodID).data;
            var Energy = Energy + allData.Energy;
            var Iron = Iron + allData.Iron;
            var Calcium = Calcium + allData.Calcium;
            var Protein = Protein + allData.Protein;
            var Carbohydrate = Carbohydrate + allData.Carbohydrate;
            var TotalFat = TotalFat + allData.TotalFat;
            var VitA = VitA + allData.VitA;
            var VitC = VitC + allData.VitC;

            i = i + 1;
        }
        console.log("Energy:" + Energy)
        console.log("Calcium:" + Calcium)

        var missdiet = {};
        j = 0;
        //  var store = Ext.getStore('standardDietStore');
        var standardDiet = Ext.getStore('standardDietStore');

        console.log(standardDiet);

   //     var userName = Ext.getCmp('username').getValue();
   //     Ext.getCmp('displayName').setHtml("<b> Hi</b>");

        var missing = 1;
        var sufficient= 1;
        if (Energy < standardDiet.data.all[0].raw.Energy) {
            missdiet[j] = {
                "Missing": "Energy"
            };
            Ext.getCmp('Missing1').setHtml("Energy Content");
            Ext.getCmp('Food1').setHtml("Whole Grains <br> Fruits <br> Beans");
            j = j + 1;
            missing = 0;
        }
        else
        {
            Ext.getCmp('Sufficient1').setHtml("Energy Content");
            sufficient= 0;
            
        }

        if (Iron < standardDiet.data.all[0].raw.Iron) {
            missdiet[j] = {
                "Missing": "Iron"
            };
            Ext.getCmp('Missing2').setHtml("Iron ");
            Ext.getCmp('Food2').setHtml("Nuts <br> Oyesters<br>White Rice");
            j = j + 1;
            missing = 0;
        }
        else
        {
            Ext.getCmp('Sufficient2').setHtml("Iron");
            sufficient= 0;
            
        }

        if (Calcium < standardDiet.data.all[0].raw.Calcium) {
            missdiet[j] = {
                "Missing": "Calcium"
            };
            Ext.getCmp('Missing3').setHtml("Calcium ");
            Ext.getCmp('Food3').setHtml("Cheese ");
            j = j + 1;
            missing = 0;
        }
         else
        {
            Ext.getCmp('Sufficient3').setHtml(" Calcium");
            sufficient= 0;
            
        }

        if (Carbohydrate < standardDiet.data.all[0].raw.Carbohydrate) {
            missdiet[j] = {
                "Missing": "Carbohydrate"
            };
            Ext.getCmp('Missing4').setHtml("Carbohydrate ");
            Ext.getCmp('Food4').setHtml("Whole Wheat Bread <br> Sugary Drinks");
            j = j + 1;
            missing = 0;
        }
         else
        {
            Ext.getCmp('Sufficient4').setHtml("Carbohydrate");
            sufficient= 0;
            
        }

        if (Protein < standardDiet.data.all[0].raw.Protein) {
            missdiet[j] = {
                "Missing": "Protein"
            };
            Ext.getCmp('Missing5').setHtml("Protein ");
            Ext.getCmp('Food5').setHtml("Yogurt <br> Milk");
            j = j + 1;
            missing = 0;
        }
         else
        {
            Ext.getCmp('Sufficient5').setHtml("Protein ");
            sufficient= 0;
            
        }

        if (TotalFat < standardDiet.data.all[0].raw.TotalFat) {
            missdiet[j] = {
                "Missing": "TotalFat"
            }
            Ext.getCmp('Missing6').setHtml("Fat Content ");
            Ext.getCmp('Food6').setHtml("Cream <br> Fried Foods like Fried Chips");
            j = j + 1;
            missing = 0;
        }
         else
        {
            Ext.getCmp('Sufficient6').setHtml("Fat Content");
            sufficient= 0;
            
        }

        if (VitA < standardDiet.data.all[0].raw.VitA) {
            missdiet[j] = {
                "Missing": "VitA"
            };
            Ext.getCmp('Missing7').setHtml("Vit A ");
            Ext.getCmp('Food7').setHtml("Sweet Potatoes <br> Tropical Fruits");
            j = j + 1;
            missing = 0;
        }
         else
        {
            Ext.getCmp('Sufficient7').setHtml(" Vit A ");
            sufficient= 0;
            
        }

        if (VitC < standardDiet.data.all[0].raw.VitC) {
            missdiet[j] = {
                "Missing": "VitC"
            };
            Ext.getCmp('Missing8').setHtml("Vit C ");
            Ext.getCmp('Food8').setHtml("Tomatoes <br> Citrus Fruits");
            j = j + 1;
            missing = 0;
        }
         else
        {
            Ext.getCmp('Sufficient8').setHtml(" Vit C");
            sufficient= 0;
            
        }
        if(missing==0)
        {
            Ext.getCmp('Missing').setHtml("<b> Your Diet lacks: </b>");
            Ext.getCmp('Food').setHtml("<b> Recommended Food: </b>");
        }
        else
        {
            Ext.getCmp('Food').setHtml("<b> You are Fit. </b>");
        }
        if(sufficient== 0)
        {
            Ext.getCmp('Sufficient').setHtml("<b> Your Diet contains:</b>"); 
        }




        console.log(missdiet);


    },

diettakenFunction: function(dataview, index, target, record, e, options)
{
    var foodChosen={};
    foodChosen = record;
    console.log(foodChosen.data.Food)

    if(foodChosen!=undefined) {
    var store = Ext.getStore('foodSelectStore');
             //   store.load();
             //   var food = {};
                food = {"Food" : foodChosen.data.Food,
                        "foodID": foodChosen.data.foodID};
                console.log(food);       
                store.add(food);
                var count = store.getCount();
                console.log("Food Count"+ count)
                Ext.getCmp('foodCount').setHtml("Items Selected:" +count);
        }
},

dietSelectedFunction: function(dataview, index, target, record, e, options)
{   var foodRemoval = {};
    foodRemoval = record;
    console.log("Food Removal" +foodRemoval.data.id);
    var store = Ext.getStore('foodSelectStore');
 //   console.log(store)
    i=0;
    
   var track=1;
//   var foodCancel =Ext.getStore('foodSelectStore').findRecord('Food', foodRemoval.data.Food).data.id;
//   console.log(foodCancel)  
    
 //   store.remove(foodCancel);
     store.remove(foodRemoval);
     var count = store.getCount();
     Ext.getCmp('foodCount').setHtml("Items Selected:" +count);
 //   var allData= Ext.getStore('foodSelectStore').data.all;
  //  console.log(allData);
 //  store.load();
   // console.log(allData[0].raw.Food);
/*    while(allData[i].raw.Food!=undefined)
    {   
        console.log(allData[i].raw.Food)
        if(((foodRemoval.data.Food)==(allData[i].raw.Food))&&(track==1))
        {
            track=track-1;
            i=i+1;
        }
        else
        {   var food= {};
            food = {"Food" : allData[i].raw.Food};
            store.add(food);
            i=i+1;

        }*/

    }, 

    clearUserReport: function()
    {
        Ext.getCmp('Missing').setHtml("");
        Ext.getCmp('Missing1').setHtml("");
        Ext.getCmp('Missing2').setHtml("");
        Ext.getCmp('Missing3').setHtml("");
        Ext.getCmp('Missing4').setHtml("");
        Ext.getCmp('Missing5').setHtml("");
        Ext.getCmp('Missing6').setHtml("");
        Ext.getCmp('Missing7').setHtml("");
        Ext.getCmp('Missing8').setHtml("");

        Ext.getCmp('Sufficient1').setHtml("");
        Ext.getCmp('Sufficient2').setHtml("");
        Ext.getCmp('Sufficient3').setHtml("");
        Ext.getCmp('Sufficient4').setHtml("");
        Ext.getCmp('Sufficient5').setHtml("");
        Ext.getCmp('Sufficient6').setHtml("");
        Ext.getCmp('Sufficient7').setHtml("");
        Ext.getCmp('Sufficient8').setHtml("");
        Ext.getCmp('Sufficient').setHtml("");

        Ext.getCmp('Food').setHtml("");
        Ext.getCmp('Food1').setHtml("");
        Ext.getCmp('Food2').setHtml("");
        Ext.getCmp('Food3').setHtml("");
        Ext.getCmp('Food4').setHtml("");
        Ext.getCmp('Food5').setHtml("");
        Ext.getCmp('Food6').setHtml("");
        Ext.getCmp('Food7').setHtml("");
        Ext.getCmp('Food8').setHtml("");
    }




});