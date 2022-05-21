const express = require('express');
const app = express();

app.use(express.static("client"));

app.get("/", function(request, response) {
    response.sendFile(__dirname + "/client/client.html");
})

app.listen(3000);