//Function meant to get and display db info
window.onload = function(){
    fetch("http://localhost:3000/api/get-data").then(function(response){
        return response.json();
    }).then(function(data){
            let html = "";
            for(let i = 0; i < data.length; i++){
                html += `
                    <div class = "linkCard">
                        <p>${data[i].url}</p>
                        <p>http://localhost:3000/${data[i].shortlink}</p>
                        <button class="deleteBtn" value=${data[i].shortlink}>Delete</button>
                    </div>
                    `;
            }
            
            document.querySelector(".dataDisplayContainer").innerHTML = html;

            //DELETE BUTTON CODE
            let dBtns = document.querySelectorAll(".deleteBtn");
            
            for(let i = 0; i < dBtns.length; i++){
                dBtns[i].addEventListener("click", function(){
                    let shortlink = dBtns[i].value;
                    console.log(shortlink);

                    fetch("http://localhost:3000/link/" + shortlink,{
                    method:"DELETE",
                    body:JSON.stringify({
                        shortlink:shortlink
                    }),
                    headers:{
                        "Content-type":"application/json; charset=UTF-8"
                    }
                    }).then(function(response){
                        return response.json();
                    }).then(function(data){
                        console.log(data);
                    }).catch(function(error){
                        console.log("Something went wrong with deleting\n" + error);
                    })

                })
            }
            
        }).catch(function(error){
        alert("DELETE ERROR" + error);
    })
}