var randomNumber1 = Math.floor(Math.random() * 6+1);
var randomNumber2 = Math.floor(Math.random() * 6+1);
document.querySelector(".img1").setAttribute("src", `dice${randomNumber1}.png`);
document.querySelector(".img2").setAttribute("src", `dice${randomNumber2}.png`);
if(randomNumber1 === randomNumber2)
{
    document.querySelector("h1").innerHTML = "Draw 👍";
}
else if(randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins!💥";
}
else
{
    document.querySelector("h1").innerHTML = "Player 1 Wins!💥";
}
let dice1=document.querySelectorAll("img");
function RefreshMe(){
    location.reload();
    dice1.forEach(function(die){
        die.classList.add("shake");
    });
}