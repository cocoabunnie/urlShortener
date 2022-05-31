# URLShortener

Hello and welcome to my URL Shortener! This URL shortener was made using React.js, Node, Express, and an SQL database. The purpose of this application is to take a url link and shorten it. Not only does this shorten URLs, but they also keep track of past URL's created, what they redirect the user to, and how many times they are used.

# How To Run

This application has a node server running for the back end and a React App for the frontend along with some dotenv encrypted variables used to connect the user to an SQL database. At the moment, it only runs on localhost. Here are the encrypted variables you need for the application to run properly:

MY_SQL_HOST = [ Where the application is being hosted (localhost in this case so far) ] <br>
MY_SQL_USER = [ MySQL username ] <br>
MY_SQL_PASSWORD = [ MySQL Password ] <br>
MY_SQL_DATABASE = [ MySQL database  (table) name] <br> <br>

Once you have all of those filled into a dotenv file in the root folder of the application, all you need to do is run the following: <br>
**npm install** to ensure all dependencies are installed in case any are missing <br>
**npm run start** which start both the front and backend where you can run, test and use the application. <br> <br>

Have a wonderful day!
