// declaring  a variable
let boxex = document.querySelectorAll(".box");
let reset = document.getElementById("reset");
let newgamecontainer = document.getElementById("newgamecontainer");
let msg = document.getElementById("msg");
let main = document.querySelector(".main");
let newbtn = document.getElementById("newgame");

let turno = true;
count = 0;
let wincount = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

]

boxex.forEach((box) => {
    box.addEventListener("click", () => {
        if (turno) {
            box.innerText = "O";
            turno = false;

        } else {
            box.innerText = "X"
            turno = true;
        }
        count++;
        box.disabled = true;

        let iswinner = checkwiner();
        if (count == 9 && !iswinner) {
            gameDraw();
        }
    })
})

const enableboxes = () => {
    for (let b of boxex) {
        b.disabled = false;
        b.innerText = "";
    }
}
const disableboxes = () => {
    for (let b of boxex) {
        b.disabled = true;
    }
}
const showwinner = (pos1) => {
    newgamecontainer.style.display = "block"
    msg.innerText = `Congratulation! Winner is ${pos1}`

    main.style.display = "none";
    disableboxes();

}

const checkwiner = () => {
    for (let checkcount of wincount) {
        let pos1 = boxex[checkcount[0]].innerText;
        let pos2 = boxex[checkcount[1]].innerText;
        let pos3 = boxex[checkcount[2]].innerText;
        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showwinner(pos1)
                return true;
            }
        }

    }
}
reset.addEventListener("click", () => {
    enableboxes();
    turno = true;
    count = 0;

})
newbtn.addEventListener("click", () => {
    main.style.display = "flex";
    newgamecontainer.style.display = "none"
    turno = true;
    count = 0;
    enableboxes();
})

const gameDraw = () => {
    newgamecontainer.style.display = "block"
    msg.innerText = `Match is draw`

    main.style.display = "none";

}
