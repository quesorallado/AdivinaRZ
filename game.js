player1_name = localStorage.getItem("player1");
player2_name = localStorage.getItem("player2");
var player1_score = 0;
var player2_score = 0;
document.getElementById("player1").innerHTML = player1_name + ": ";
document.getElementById("player2").innerHTML = player2_name + ": ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_pregunta").innerHTML = "Turno para preguntar de "+player1_name;
document.getElementById("player_respuesta").innerHTML = "Turno para responder de "+player2_name;
function enviar(){
var obtener_palabra = document.getElementById("word").value;
palabra = obtener_palabra.toLowerCase();
console.log("Palabra en minuscula: "+ palabra);
var charAt1= palabra.charAt (1);
console.log("caracyer1: "+charAt1);
tamaño_2 = Math.floor(palabra.length/2);
charAt2= palabra.charAt(tamaño_2);
console.log("caracter2 "+charAt2);
var tamaño_menos1 = palabra.length-1
charAt3 = palabra.charAt(tamaño_menos1);
console.log("caracter3" + charAt3);
var quitar_c1 = palabra.replace(charAt1,"_");
var quitar_c2 = quitar_c1.replace(charAt2, "_");
var quitar_c3 = quitar_c2.replace(charAt3,"_");
console.log(quitar_c3);
var pregunta = "<h4 id='display'> adivina... " + quitar_c3 + "</h4>";
var input = "<br>Respuesta:<input type = 'text'id = 'box'> "
var boton = "<br> <br> <button onclick ='verificar()' class = 'btn btn-success'>comprobar </button>"

var codigo = pregunta +input+boton;
document.getElementById("output").innerHTML = codigo;
document.getElementById("word").value = "";
}
var turno_preguntar = "jugador1";
var turno_respunder = "jugador2";
function verificar(){
var obtener_respuesta = document.getElementById("box").value;
var respuesta = obtener_respuesta.toLowerCase();
console.log("respuesta en minuscula: "+ respuesta);
if(respuesta == palabra){
if(turno_respunder == "jugador1"){
player1_score = player1_score +1;
document.getElementById("player1_score").innerHTML = player1_score;
}
if(turno_respunder ==  "jugador2"){
player2_score = player2_score +1;
document.getElementById("player2_score").innerHTML = player2_score;
}
}
else{
    if(turno_respunder == "jugador1"){
        player1_score = player1_score -1;
        document.getElementById("player1_score").innerHTML = player1_score;
        }
        if(turno_respunder == "jugador2"){
            player2_score = player2_score -1;
            document.getElementById("player2_score").innerHTML = player2_score;
            }
}
if(turno_preguntar == "jugador2"){
turno_preguntar = "jugador1";
document.getElementById("player_pregunta").innerHTML = "Turno para preguntar: " + player1_name;
}
else{
turno_preguntar = "jugador2";
document.getElementById("player_pregunta").innerHTML = "Turno para preguntar: " + player2_name;
}
if(turno_respunder == "jugador2"){
    turno_respunder = "jugador1";
    document.getElementById("player_respuesta").innerHTML = "Turno para responder: " + player1_name;
    }
    else{
    turno_respunder = "jugador2";
    document.getElementById("player_respuesta").innerHTML = "Turno para responder: " + player2_name;
    }
    document.getElementById("output").innerHTML = "";
}