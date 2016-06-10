var express = require('express');require('dotenv').load();
var http = require('http');
var url = require('url');
var bodyParser = require('body-parser');
var app = express();
var mysql = require('mysql');

console.log(process.env.x);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Authorization, Content-Type');
  next();
});

app.listen(5005);

DATABASE_HOST = 'localhost';
DATABASE_NAME = 'userlist';
DATABASE_USERNAME = 'root';
DATABASE_PASSWORD = ' ';

var connection = mysql.createConnection({
    host: DATABASE_HOST,
    user: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME
});

app.get('/login', function(request, response) {


       var login=request.query.mail_id;
      // var loginpassword=request.query.Password;

       if(login==loginid)
          if((var password = 'SELECT Password FROM userlist.userlist where mail_id="'+login+'"')==loginpassword) 
            {             
                connection.query(password, function(err){
                if(err)
                {
           	      throw err;
                  response.json("Invalid Username or Password");
		          }
	             	
              }
            }
    });



app.get('/signup', function(request, response) {
// console.log(request.body.doctorName);

       
       var Username=request.query.Username;
       var Age=request.query.Age;
       var Gender='M';
       var mail_id=request.query.mail_id;
       var Password=request.query.Password;
           
       var signupDetails = 'insert into userlist.userlist(Username,Age,Gender,mail_id,Password) values ("'+Username+'","'+Age+'","'+Gender+'","'+mail_id+'","'+Password+'")'
    
          connection.query( signup, function(err, rows){
        if(err)
        {
           	throw err;
            response.json("Error");
		} else
		{
			   response.json("success");
           
    }
  });

});

