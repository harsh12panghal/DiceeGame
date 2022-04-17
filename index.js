
document.querySelector("button").addEventListener("click", play);

function play(){
    var images = ['images/dice1.png','images/dice2.png','images/dice3.png','images/dice4.png','images/dice5.png','images/dice6.png']

    var randomNumber1 = [Math.floor(Math.random() * images.length)];
    var randomImage1 = images[randomNumber1]
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src",randomImage1);


    var randomNumber2 = [Math.floor(Math.random() * images.length)];
    var randomImage2 = images[randomNumber2]
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src",randomImage2);



    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "Player 1 Wins!"
    }
    else if (randomNumber1 < randomNumber2){
        document.querySelector("h1").innerHTML = "Player 2 Wins!"
    }
    else{
        document.querySelector("h1").innerHTML = "It's a Draw"
    }
}
