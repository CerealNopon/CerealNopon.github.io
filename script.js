//Pulling from index.html, we nickname these "dog_button" and "dog_result"
const dog_button = document.getElementById("dog_btn");
const dog_result = document.getElementById("dog_result");

//Two event listeners: "click" & "keyup"
dog_button.addEventListener("click",getRandomDog);
addEventListener("keyup",getRandomDog);

//The function itself
function getRandomDog() {
    //Instantiates the XMLHttpRequest() object to interact with API
    var httpRequest = new XMLHttpRequest();
    //Initializes a request: open(method, url)
    httpRequest.open("get", "https://dog.ceo/api/breeds/image/random");
    //Sends the request: send()
    httpRequest.send();
    //If send() is successful, onreadystatechange senses the change...
    //and activates the getImage function
    httpRequest.onreadystatechange = getImage;

    function getImage() {
        //ensures 1. successful & 2. an image
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            //responseText will be stored into "dogs"
            var dogs = httpRequest.responseText;
            console.log(dogs);
            //transform it into a JSON so elements are easily accessible
            var dogsObj = JSON.parse(dogs);
            console.log(dogsObj);
            //in "dog_result", replace it with this text, 
            document.getElementById('dog_result').innerHTML = `<img src=${dogsObj.message} alt="dog" />`;
        }
    }
  }
