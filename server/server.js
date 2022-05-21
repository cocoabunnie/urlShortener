const express = require('express');
const mysql = require('mysql');
const path = require('path');
const dotenv = require('dotenv');
const app = express();

//Allowing dotenv to access .env file
dotenv.config({ 
   path: path.resolve(__dirname, '../.env')
})

//Access client folder for frontend files
app.use(express.static("client"));

//server side rendering for main page
app.get("/", function(request, response) {
    response.sendFile(__dirname + "/client/client.html");
})


//information to mysql db to give app access
const sqlConnection = mysql.createConnection({
    host: process.env.MY_SQL_HOST,
    user: process.env.MY_SQL_USER,
    password: process.env.MY_SQL_PASSWORD,
    database: process.env.MY_SQL_DATABASE
});

//connecting to mysql db
sqlConnection.connect(function(error){
    if (error){
        console.log("Could not connect to database, error message below... \n" + error);
    } else {
        console.log("Connection to MYSQL database successful!");
    }
});

//POST function for submitting links to db (Should be connected to button on client side)
app.post("/api/linkdata", function(request, response) {
    var shortenedExtension = Math.random().toString(36).substring(2,8); //6 character unique link extention 

    //inserting values into mysql db
    var insertValues = `INSERT INTO userLinks(url,shortlink) 
                        VALUES('${request.body.url}', '${shortenedExtension})`;
    sqlConnection.query(insertValues);
}); 

app.listen(3000);