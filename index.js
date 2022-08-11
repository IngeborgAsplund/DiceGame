
function calculateRandomNumber()
{
  var random = Math.floor((Math.random()*6)+1);
  return random;
}
function RunGame()
{
  var randomnumber1 = calculateRandomNumber();
  var randomNumber2 = calculateRandomNumber();
  var image1 = "images/dice"+randomnumber1+".png";
  var image2 = "images/dice"+randomNumber2+".png";

  document.querySelectorAll(".img")[0].setAttribute("src",image1);
  document.querySelectorAll(".img")[1].setAttribute("src",image2);
  document.querySelector("h1").textContent = displayWinner(randomnumber1,randomNumber2);
}
function displayWinner(player1,player2)
{
  if(player1===player2)
  {
    return "Draw!";
  }
  else if(player1>player2)
  {
    return "🚩 Player 1 wins!";
  }
  else if(player2>player1)
  {
    return "Player 2 wins! 🚩";
  }
}
RunGame();
