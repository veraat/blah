player1 = localStorage.getItem("Player_1");
player2 = localStorage.getItem("Player_2");

player_1_score = 0;
player_2_score = 0;

document.getElementById("player1_name").innerHTML = player1 + " : ";
document.getElementById("player2_name").innerHTML = player2 + " : ";

document.getElementById("player1_score").innerHTML = player_1_score;
document.getElementById("player2_score").innerHTML = player_2_score;

document.getElementById("player_Q").innerHTML = "Question Turn - " + player1;
document.getElementById("player_A").innerHTML = "Answer Turn - " + player2;


function send(){
    input = document.getElementById("word").value;

    word = input.toLowerCase();
    console.log(word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    length_2 = Math.floor(word.length / 2);
    charAt2 = word.charAt(length_2);
    console.log(charAt2);

    length_1 = word.length - 1;
    charAt3 = word.charAt(length_1);
    console.log(charAt3);

    remove1 = word.replace(charAt1 , "_");
    remove2 = remove1.replace(charAt2 , "_");
    remove3 = remove2.replace(charAt3 , "_");

    console.log(remove3);

    question_word = "<h4 id='display_word'> Q : " + remove3 + "</h4>";

    document.getElementById("qeu").innerHTML = question_word;
    document.getElementById("word").value = "";
}

question_Turn = "player1";
answer_Turn = "player2";

function check() {
    get_ans = document.getElementById("answer").value;
    ans = get_ans.toLowerCase();
    console.log("Ans in lower case - " + ans);
    ques = document.getElementById("player_Q");
    answ = document.getElementById("player_A");

    if ( ans == word ) {
        if ( answer_Turn == "player1"){
            player_1_score = player_1_score + 1;
            document.getElementById("player1_score").innerHTML = player_1_score;
            console.log("player 1 score " + player_1_score);
        } 
        
        else {
            player_2_score = player_2_score + 1;
            document.getElementById("player2_score").innerHTML = player_2_score;
            console.log("player 2 score " + player_2_score);
        } 
    } 

    if ( question_Turn == player1){
        question_Turn = "player2";
        ques.innerHTML = "Question Turn - " + player2;
    }
    else {
        question_Turn = "player1";
        ques.innerHTML = "Question Turn - " + player1;
    }

    if ( answer_Turn == player1){
        answer_Turn = "player2";
        answ.innerHTML = "Answer Turn - " + player2;
    }
    else {
        answer_Turn = "player1";
        answ.innerHTML = "Answer Turn - " + player1;
    }
    document.getElementById("qeu").value = "";
} 