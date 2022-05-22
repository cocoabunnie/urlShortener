document.querySelector(".shortenUrlButton").addEventListener("click",function(){
	let originalURL = document.querySelector(".urlInput").value.trim();
	//Checking if the url is valid, of course
	if(originalURL.startsWith("http://") || originalURL.startsWith("https://") || originalURL.startsWith("www.")){
		
		//Add https:// if the user has the url start with www.
		if(originalURL.startsWith("www.")){
			originalURL = "https://" + originalURL;
		}

		fetch("http://localhost:3000/api/create-url",{
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
			console.log(data);
		}).catch(function(error){
			alert("Something went wrong\n" + error);
		})
	}
});
