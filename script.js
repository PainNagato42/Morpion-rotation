var cases = document.querySelectorAll(".case");
var joueurActuel = 1
const popup = document.querySelector(".popup");
const mask = document.querySelector(".mask");
const result = document.querySelector("#result");
var nbrTour = 0;
const text = document.querySelector("#text");
const containCase = document.querySelector(".contain_case");
var rotate = 0;

cases.forEach(carre => {
    carre.addEventListener("click", () => {
        if (carre.textContent === "") {
            rotate += 45
            containCase.style.transform = "rotate("+rotate+"deg)";
            nbrTour++;
            if (joueurActuel == 1) {
                carre.classList.add("joueur1");
                carre.textContent = "O";
                joueurActuel = 2;
            } else {
                carre.classList.add("joueur2");
                carre.textContent = "X";
                joueurActuel = 1;
            }
        }


        if (cases[0].textContent == "O" && cases[1].textContent == "O" && cases[2].textContent == "O") {
            victoire(1)
        } else if (cases[3].textContent == "O" && cases[4].textContent == "O" && cases[5].textContent == "O") {
            victoire(1)
        } else if (cases[6].textContent == "O" && cases[7].textContent == "O" && cases[8].textContent == "O") {
            victoire(1)
        } else if (cases[0].textContent == "O" && cases[3].textContent == "O" && cases[6].textContent == "O") {
            victoire(1)
        } else if (cases[1].textContent == "O" && cases[4].textContent == "O" && cases[7].textContent == "O") {
            victoire(1)
        } else if (cases[2].textContent == "O" && cases[5].textContent == "O" && cases[8].textContent == "O") {
            victoire(1)
        } else if (cases[0].textContent == "O" && cases[4].textContent == "O" && cases[8].textContent == "O") {
            victoire(1)
        } else if (cases[6].textContent == "O" && cases[4].textContent == "O" && cases[2].textContent == "O") {
            victoire(1)
        } else if (cases[0].textContent == "X" && cases[1].textContent == "X" && cases[2].textContent == "X") {
            victoire(2)
        } else if (cases[3].textContent == "X" && cases[4].textContent == "X" && cases[5].textContent == "X") {
            victoire(2)
        } else if (cases[6].textContent == "X" && cases[7].textContent == "X" && cases[8].textContent == "X") {
            victoire(2)
        } else if (cases[0].textContent == "X" && cases[3].textContent == "X" && cases[6].textContent == "X") {
            victoire(2)
        } else if (cases[1].textContent == "X" && cases[4].textContent == "X" && cases[7].textContent == "X") {
            victoire(2)
        } else if (cases[2].textContent == "X" && cases[5].textContent == "X" && cases[8].textContent == "X") {
            victoire(2)
        } else if (cases[0].textContent == "X" && cases[4].textContent == "X" && cases[8].textContent == "X") {
            victoire(2)
        } else if (cases[6].textContent == "X" && cases[4].textContent == "X" && cases[2].textContent == "X") {
            victoire(2)
        }

        if (nbrTour == 9) {
            mask.style.display = "block";
            popup.style.display = "block";
            text.textContent = "Match Nul !";
        }
    })
})

function victoire(joueur) {
    if (joueur == 1) {
        joueurActuel = 1
    } else {
        joueurActuel = 2
    }
    mask.style.display = "block";
    popup.style.display = "block";
    result.textContent = joueurActuel;
}



