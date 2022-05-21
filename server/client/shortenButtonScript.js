document.querySelector(".shortenUrlButton").addEventListener("click", function(){
    var originalURL = document.querySelector(".urlInput").value.trim();
    
    //Checking to ensure URL is valid
    if(originalURL.startsWith("https://") || originalURL.startsWith("http://") || originalURL.startsWith("www.")){
        alert("Valid URL :)");
    } else {
        alert("Not valid...")
    }
});