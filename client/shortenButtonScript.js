document.addEventListener("DOMContentLoaded", () => {
	document.querySelector(".shortenUrlButton").addEventListener("click",function(){
		let originalURL = document.querySelector(".urlInput").value.trim();
		
		//Checking if the url is valid, of course
		if(originalURL.startsWith("http://") || originalURL.startsWith("https://") || originalURL.startsWith("www.")){
			let baseURL = "http://localhost:3000/";
			//Add https:// if the user has the url start with www.
			if(originalURL.startsWith("www.")){
				originalURL = "https://" + originalURL;
			}

			//POST url / send to db
			fetch(baseURL + "api/create-url",{
			method:"POST",
			body:JSON.stringify({
				url:originalURL
			}),
			headers:{
				"Content-type":"application/json; charset=UTF-8"
			}
			}).then(function(response){
				return response.json();
			}).then(function(data){
				html = `<p>Here's Your New Shortlink: </p><a href=${baseURL}${data.shortlink}>${baseURL}${data.shortlink}</a>`

				document.querySelector(".newURLDisplay").innerHTML = html;
			}).catch(function(error){
				alert("Something went wrong\n" + error);
			})
		}
	});
});
