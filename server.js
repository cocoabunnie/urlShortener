const express = require('express');
const mysql = require('mysql');
const path = require('path');
const dotenv = require('dotenv');
const app = express();

//Allowing dotenv to access .env file
dotenv.config({ 
   path: path.resolve(__dirname + '/.env')
})

//Access client folder for frontend files
app.use(express.static("client"));
app.use(express.json());

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

//server side rendering for main page and analytics page
app.get("/", function(request, response) {
    response.sendFile(__dirname + "/client/home.html");
})

app.get("/data-tables", function(request, response) {
    response.sendFile(__dirname + "/client/dataTable.html");
})

//POST route for submitting links to db (Should be connected to button on client side)
app.post("/api/create-url", function(request, response) {
    let shortenedExtension = Math.random().toString(36).substring(2,8); //6 character unique link extention 
    //inserting values into mysql db
    let insertValues = `INSERT INTO userLinks(url,shortlink) VALUES('${request.body.url}','${shortenedExtension}')`;
    sqlConnection.query(insertValues, function(error,result){
        if(error){
            response.status(500).json({
                status:"ERROR",
                message:"There was an error with inserting values!" + error
            });
        } else {
            response.status(200).json({
                status:"SUCCESS",
                shortlink: shortenedExtension
            });
        }
    });
}); 

//get route for retrieving db data
app.get("/api/get-data", function(request,response){
    let select = "SELECT * FROM userLinks";
    sqlConnection.query(select, function(error, result){
        if(error){
            response.status(500).json({
                status:"ERROR",
                message:"There was an error with selecting data values!" + error
            });
        } else {
            response.status(200).json(result);
        }
    })
})

//App.get for redirecting user to a link
app.get("/:shortlink", function(request,response){
    let shortlink = request.params.shortlink;
    let select = `SELECT * FROM userLinks WHERE shortlink='${shortlink}' LIMIT 1`;
    sqlConnection.query(select, function(error,result){
        if(error){
            response.status(500).json({
                status:"ERROR",
                message:"There was an error with selecting a shortlink!" + error
            });
        } else {
            if (result.length > 0){
                select = `UPDATE userLinks SET clicks = ${result[0].clicks + 1} WHERE shortlink='${result[0].shortlink}' LIMIT 1`;
                sqlConnection.query(select, function(error, result1) {
                    if(error){
                        response.status(500).json({
                            status:"ERROR",
                            message:"There was an error with updating the selected tuple!" + error
                        });
                    } else {
                        response.redirect(result[0].url);
                    }
                })
            }
        }
    })
})

//App route for getting one link
app.get("/link/:shortlink", function(request,response){
    let shortlink = request.params.shortlink;
    let select = `SELECT * FROM userLinks WHERE shortlink='${shortlink}'`;
    sqlConnection.query(select, function(error, result){
        if(error){
            response.status(500).json({
                status:"ERROR",
                message:"There was an error with selecting a shortlink!" + error
            });
        } else {
            response.send(result);
        }
    })
})

//App route for the delete button
app.delete("/link/:shortlink", function(request,response){
    let shortlink = request.params.shortlink;
    let deleteLink = `DELETE FROM userLinks WHERE shortlink='${shortlink}'`;
    sqlConnection.query(deleteLink, function(error, result){
        if(error){
            response.status(500).json({
                status:"ERROR",
                message:"There was an error with deleting a shortlink!" + error
            });
        } else {
            response.send("Deleted!");
        }
    })
})

app.listen(3000);