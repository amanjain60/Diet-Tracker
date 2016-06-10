var express = require('express');
var http = require('http');
var url = require('url');
var bodyParser = require('body-parser');
var app = express();
var mysql = require('mysql');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, Authorization, Content-Type');
    next();
});

app.listen(5005);

DATABASE_HOST = 'localhost';
DATABASE_NAME = 'RaxaDietTracker';
DATABASE_USERNAME = 'root';
DATABASE_PASSWORD = 'joker';

var connection = mysql.createConnection({
    host: DATABASE_HOST,
    user: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME
});
console.log("Server On..")

app.get('/signup', function(request, response) {

    var req = request.query;
    var name = req.username;
    var age = req.userage;
    var gender = "M";
    var userid = req.usermail;
    var password = req.userpassword;

    console.log("Sign up initiated..")

    var addUserInfo = "INSERT INTO userlist SET Name=\'" + name + "\',Age=\'" + age + "\',Gender=\'" + gender + "\',Mail=\'" + userid + "\',Password=\'" + password + "\';";


    connection.query(addUserInfo, function(errUserInfo, resUserInfo) {
        if (errUserInfo) {
            // throw err;
            response.json("Error: " + errUserInfo);
        } else {
            console.log("Signup Successful");
            console.log("Info about update in table");
            console.log(resUserInfo);
            //console.log(resNewUser.insertId);
            var newUserInfoJSON = {};
            newUserInfoJSON['rowsAffected'] = resUserInfo.affectedRows;
            response.json(newUserInfoJSON);
        }
    });
});

app.get('/login', function(request, response) {

    var req = request.query;
    var login = req.loginid;
    var password = req.loginpassword;
    var verify = "SELECT Password FROM userlist WHERE Mail=\'" + login + "\';";
    console.log("Password Verification Mode");
    connection.query(verify, function(loginerr, loginres) {
        var dataJSON = {
            "root": loginres
        };
        console.log(dataJSON.root);

        if (loginres.length == 0) {

            console.log("ID don't exist.")

            response.json("Error");
        } else {

            var verifyPassword = [];
            verifyPassword = dataJSON.root;
            response.json(verifyPassword);
        }
    });
});

/*app.get('/analyseData', function(request, response) {

    var req=request.query;
    var foodID = req.foodID;
    
    console.log("Data under process..")

    var lastMeal = "SELECT MAX(Meal) AS lastMeal FROM Meal;";

        connection.query(lastMeal, function(errlastMeal, reslastMeal) {
        if (errlastMeal) {
            response.json("Error: " + errlastMeal);
        } else 
        {
            console.log("LastMeal ID");
          //  console.log(reslastMeal);
            var mealID={};
            mealID=reslastMeal[0];
            console.log("Last Meal:")
            console.log(mealID.lastMeal);
            var currentMeal= mealID.lastMeal+1;
            console.log("Current Meal:")
            console.log(currentMeal);
            var updateFoodID = "INSERT INTO foodSelect SET Meal=\'" + currentMeal + "\',foodID=\'" + foodID + "\';";

          connection.query(updateFoodID, function(errupdateFoodID, resupdateFoodID) {
          if (errupdateFoodID) {
               response.json("Error: " + errupdateFoodID);
         } else 
         {
           // console.log(resupdateFoodID);
            response.json(currentMeal);
         }      
       });
    }

  });
});*/
app.get('/mealID', function(request, response) {
    var req = request.query;
    var Mail = req.user;
    var date = req.presentDate;
    var addMeal = "INSERT INTO  Meal SET Mail=\'" + Mail + "\',Date=\'" + date + "\';";
    connection.query(addMeal, function(erraddMeal, resaddMeal) {
        if (erraddMeal) {
            console.log(erraddMeal);
            response.json("Error: " + erraddMeal);
        } else {

            var newMeal = {};
            newMeal['rowsAffected'] = resaddMeal.affectedRows;
            //  console.log(newMeal);
            response.json(newMeal);

        }
    });
});

app.get('/foodID', function(request, response) {
    var req = request.query;
    var Meal = req.Meal;
    var foodID = req.foodID;
    var insertFood = "INSERT INTO foodSelect SET Meal=\'" + Meal + "\',foodID=\'" + foodID + "\';";
    connection.query(insertFood, function(errinsertFood, resinsertFood) {
        if (errinsertFood) {
            console.log(errinsertFood);
            response.json("Error: " + errinsertFood)
        } else {
            console.log(" Food ID" + resinsertFood);
            response.json(resinsertFood);
        }
    });
});
app.get('/mealofdate', function(request, response) {
    var req = request.query;
    var Mail = req.user;
    var date = req.presentDate;
    var mealofdate = "SELECT Meal FROM Meal WHERE Mail=\'" + Mail + "\' AND Date=\'" + date + "\';";
    connection.query(mealofdate, function(errmealofdate, resmealofdate) {
        if (errmealofdate) {
            console.log(errmealofdate);
            response.json("Error: " + errmealofdate)
        } else {
            console.log(" Meal ID" + resmealofdate);
            response.json(resmealofdate);
        }
    });
});
app.get('/userDate', function(request, response) {
    var req = request.query;
    var userMail = req.Mail;
    console.log(userMail);
    var dateDetails = "SELECT Date FROM Meal WHERE Mail=\'" + userMail + "\';";
    connection.query(dateDetails, function(errdateDetails, resdateDetails) {
        if (errdateDetails) {
            console.log(errdateDetails);
            response.json("Error: " + errdateDetails)
        } else {
            //  console.log(" Meal Dates and Corresponding Meals"+resmealDate);
            response.json(resdateDetails);
        }
    });
});

app.get('/foodOfDate', function(request, response) {
    var req = request.query;
    var Meal = req.meal;
    console.log(Meal)
    var foodData = "SELECT foodID FROM foodSelect WHERE Meal=\'" + Meal + "\';";
    connection.query(foodData, function(errfoodData, resfoodData) {
        if (errfoodData) {
            console.log(errfoodData);
            response.json("Error: " + errfoodData)
        } else {
            console.log(" Food Taken-----" + resfoodData);
            console.log("------");
            response.json(resfoodData);
        }
    });


});