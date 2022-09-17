var rps = ["rock","paper","scissors"]
var won = 0, draw = 0, lost = 0

function compDecides()
{   
    let index = Math.floor(Math.random()*3)
    document.getElementById("comp_"+rps[index]).style.borderColor = "#ffa9a9"

    return rps[index]
}

function checkWin(player,comp)
{
    playerIndex = rps.findIndex(item => item == player)
    compIndex = rps.findIndex(item => item == comp)
    disableButtons()
    if (playerIndex == compIndex)
    {
        document.getElementById('outcome').innerHTML = "It's a draw!";
        draw++
        document.getElementById('draw').innerHTML = draw;
    }
    else if ((playerIndex+1) % 3 == compIndex)
    {
        document.getElementById('outcome').innerHTML = "You lost!";
        lost++
        document.getElementById('lost').innerHTML = lost;
    }
    else
    {
        document.getElementById('outcome').innerHTML = "You won!";
        won++
        document.getElementById('won').innerHTML = won;
    }
    document.getElementById("player_"+player).style.borderColor = "#ffa9a9"
}

function disableButtons()
{
    rps.forEach(element => document.getElementById("player_"+element).disabled = true)
    rps.forEach(element => document.getElementById("player_"+element).getElementsByTagName("img")[0].style.filter = "grayscale(70%)")
}

function playerPick(choice)
{
    var comp = compDecides()
    checkWin(choice,comp)
}

function playAgain()
{
    rps.forEach(element => document.getElementById("player_"+element).disabled = false)
    rps.forEach(element => document.getElementById("comp_"+element).style.borderColor = '#73caf0')
    rps.forEach(element => document.getElementById("player_"+element).style.borderColor = '#73caf0')
    document.getElementById('outcome').innerHTML = "";
    rps.forEach(element => document.getElementById("player_"+element).getElementsByTagName("img")[0].style.filter = "grayscale(0%)")
    
}

window.onload = function()
{
    document.getElementById('won').innerHTML = won;
    document.getElementById('draw').innerHTML = draw;
    document.getElementById('lost').innerHTML = lost;
}