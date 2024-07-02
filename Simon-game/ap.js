let gameseq = [];
let userseq = [];

btns=['red','yellow','green','blue']

let started = false;
let level = 0;
let h2 = document.querySelector('h2');
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started");
        started = true;
        levelup();
   }
})

function gameflash(btn) {
    btn.classList.add('flash');
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 70);
}
function usersflash(btn) {
    btn.classList.add('userflash');
    setTimeout(function () {
        btn.classList.remove("userflash")
    }, 70);
}

function levelup(){
    userseq = [];
    level++;
    h2.innerText = `level${level}`;
    let randindx = Math.floor(Math.random() * 3);
    let randcolor = btns[randindx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameflash(randbtn);
    gameseq.push(randcolor);
}

function check(idx) {
    if (userseq[idx] == gameseq[idx]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelup,300);
        }
    }
    else {
        h2.innerHTML = `Nice Try ! YOUR SCORE=> ${level} NOW PRESS ANY KEY TO PLAY AGAIN TO BEAT HIGHEST SCORE-100`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white"
        }, 300);
        reset();
    }

}

function btnpress() {
    console.log(this);
    let btn = this;
    usersflash(btn);
    usercolor = btn.getAttribute('id');
    // console.log(usercolor);
    userseq.push(usercolor);
    check(userseq.length-1);

}
 
let allbtns = document.querySelectorAll(".btn")
for (btn of allbtns) {
    btn.addEventListener("click", btnpress);
}
function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}
