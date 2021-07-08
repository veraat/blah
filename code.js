 function login(){
    player1 = document.getElementById("text_input_1").value;
    player2 = document.getElementById("text_input_2").value;

    localStorage.setItem("Player_1" , player1);
    localStorage.setItem("Player_2" , player2);

    window.location = "../play.html";
 }