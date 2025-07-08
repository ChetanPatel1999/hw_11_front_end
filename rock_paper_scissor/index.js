let divs = document.querySelectorAll(".mydiv");
let result = document.querySelector("#result");
let compScore=document.querySelector("#comp-score");
let userScore=document.querySelector("#user-score");
divs.forEach((div) => {
    div.addEventListener("click", () => {
        let user_choise = div.getAttribute("id")
        console.log("user choise = ", user_choise)
        let comp_choise = get_comp_choise();
        console.log("comp choise = ", comp_choise)
        let winner = get_winner(user_choise, comp_choise);
        console.log(winner);
        if (winner == "computer win !") {
            result.innerText = winner+` ${comp_choise} beats ${user_choise}`;
            result.style.backgroundColor="red";
            compScore.innerText= Number(compScore.innerText)+1;
        }
        else if (winner == "you win !") {
            result.innerText = winner+` ${user_choise} beats ${comp_choise}`;
            result.style.backgroundColor="green";
            userScore.innerText= Number(userScore.innerText)+1;
        }
        else {
            result.innerText = winner;
            result.style.backgroundColor="rgb(15, 15, 83)";
        }
        
    })
})

function get_comp_choise() {
    let arr = ["rock", "paper", "scissor"];
    let index = parseInt(Math.random() * 3);
    return arr[index];
}

function get_winner(user_choise, comp_choise) {
    if (user_choise == comp_choise) {
        return "match is draw";
    }
    else if (user_choise == "rock") {
        if (comp_choise == "paper") {
            return "computer win !";
        }
        else {
            return "you win !";
        }
    }
    else if (user_choise == "paper") {
        if (comp_choise == "scissor") {
            return "computer win !";
        }
        else {
            return "you win !";
        }

    }
    else {
        if (comp_choise == "rock") {
            return "computer win !";
        }
        else {
            return "you win !";
        }
    }

}