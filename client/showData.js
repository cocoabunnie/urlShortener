//Function meant to get and display db info
window.onload = function(){
    fetch("http://localhost:3000/api/get-data").then(function(response){
        return response.json();
    }).then(function(data){
        let html = "";
        for(let i=0; i < data.length; i++){
            html += `
                <div class = "linkCard">
                    <p>${data[i].url}</p>
                    <p>http://localhost:3000/${data[i].shortlink}</p>
                    <button class="deleteBtn">Delete</button>
                </div>
                `;
        }
        console.log(data);
        document.querySelector(".dataDisplayContainer").innerHTML = html;

        //DELETE BUTTON CODE
        let allDeleteBtn = document.getElementsByClassName(".deleteBtn");
        for(var i = 0; i < allDeleteBtn.length; i++){
            allDeleteBtn[i].addEventListener("click", function() {
                alert("Delete button was clicked");
            })
        }

    }).catch(function(error){
        alert("ERROR WITH GETTING DATA" + error)
    })
}