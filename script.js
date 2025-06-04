let yourscore = 0;
let compscore = 0;

let choices = document.querySelectorAll(".choise");
let msg = document.querySelector("#last");
let coc = document.querySelector("#coc");
let urc = document.querySelector("#urc");

let urscore = document.querySelector("#urscore");
let coscore = document.querySelector("#coscore");

let gcompchoice = () => {
    let option = ["rock", "paper", "scissors"];
    let indexno = Math.floor(Math.random() * 3);
    return option[indexno];
}

let draw = () => {
    console.log("Draw");
    msg.innerText = "Draw";
    msg.style.backgroundColor = "#83786f";
}

let winner = (urwin) => {
    if(urwin) { 
        yourscore++
        urscore.innerText = yourscore;
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
    } else {
        compscore++
        coscore.innerText = compscore;
        msg.innerText = "You Lose!";
        msg.style.backgroundColor = "red";
    }

} 

let playgame = (urchoice) => {
    let compchoice = gcompchoice();
    console.log(compchoice, "selected this");
    coc.innerText = compchoice; 

    if (urchoice === compchoice) {
        draw();
    } else {
        let urwin = true;
        if(urchoice === "rock") {
        urwin = compchoice === "paper" ? false : true;
    } else if(urchoice === "paper") {
        urwin = compchoice === "scissors" ? false : true;
    } else {
        urwin = compchoice === "rock" ? false : true;
    }
    winner(urwin);
}
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let urchoice = choice.getAttribute("id");
        urc.innerText = urchoice;
        playgame(urchoice);
    })
})