function agregar(){
player1 = document.getElementById("jugador1").value;
player2 = document.getElementById("jugador2").value;
localStorage.setItem("player1",player1);
localStorage.setItem("player2",player2);
window.location = "game.html";
}