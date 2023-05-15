getRandomDog();

const dog_button = document.getElementById("dog_btn");
const dog_result = document.getElementById("dog_result");

dog_button.addEventListener("click",getRandomDog);
addEventListener("keyup",getRandomDog);

function getRandomDog() {
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("get", "https://dog.ceo/api/breeds/image/random");
    httpRequest.send();
  
    httpRequest.onreadystatechange = aFunction;

    function aFunction() {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        var dogs = httpRequest.responseText;
        var dogsObj = JSON.parse(dogs);
        document.getElementById('dog_result').innerHTML = `<img src=${dogsObj.message} alt="dog" />`;
        }
    }
  }
