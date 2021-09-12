let count = 0;
let p1 = [];
let p2 = [];

window.addEventListener("click", ev => {
    let el = ev.target;
    if (el.tagName == "BUTTON") {
        count++;
        if (count % 2 == 0) {
            el.innerText = "X";
            el.classList.add("player2");
            p2.push(el.id);
        }
        else {
            el.innerText = "0";
            el.classList.add("player1");
            p1.push(el.id);
        }
        el.disabled = "true";
    }
    setTimeout(() => check());
})

function check() {

    if ((p1.includes("1") && p1.includes("2") && p1.includes("3")) ||
        (p1.includes("4") && p1.includes("5") && p1.includes("6")) ||
        (p1.includes("7") && p1.includes("8") && p1.includes("9")) ||
        (p1.includes("1") && p1.includes("4") && p1.includes("7")) ||
        (p1.includes("2") && p1.includes("5") && p1.includes("8")) ||
        (p1.includes("3") && p1.includes("6") && p1.includes("9")) ||
        (p1.includes("1") && p1.includes("5") && p1.includes("9")) ||
        (p1.includes("7") && p1.includes("5") && p1.includes("3"))) {
        alert("Congratulations! Player1 wins");
        location.reload();
    }
    else if ((p2.includes("1") && p2.includes("2") && p2.includes("3")) ||
        (p2.includes("4") && p2.includes("5") && p2.includes("6")) ||
        (p2.includes("7") && p2.includes("8") && p2.includes("9")) ||
        (p2.includes("1") && p2.includes("4") && p2.includes("7")) ||
        (p2.includes("2") && p2.includes("5") && p2.includes("8")) ||
        (p2.includes("3") && p2.includes("6") && p2.includes("9")) ||
        (p2.includes("1") && p2.includes("5") && p2.includes("9")) ||
        (p2.includes("7") && p2.includes("5") && p2.includes("3"))) {
        alert("Congratulations! Player2 wins");
        location.reload();
    }
    else if (count == 9) {
        alert("Draw!");
        location.reload();
    }
}