/*L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.*/

//variabile bottone

const WannaPlay = document.querySelector("button");

//variabile tavolo da gioco
const Container = document.getElementById("game-table");

//variabile select
const Level = document.querySelector("select");

// creo un evento che da origine a tutto

WannaPlay.addEventListener("click", function () {
  // variabile valore livello selezionato
  const Difficult = document.querySelector("select").value;
  //aggiungo la classe hide al bottone e alla select
  Level.classList.add("hide");

  WannaPlay.classList.add("hide");
  //Rimuovo la classe hide alla tavola da gioco
  Container.classList.remove("hide");

  // condizioni per i differenti valori di difficoltà
  if (Difficult == 2) {
    CreatElementsAndClass(
      0,
      100,
      16,
      "div",
      "square",
      "veteran",
      "boom",
      "safe"
    );
  } else if (Difficult == 1) {
    CreatElementsAndClass(
      0,
      81,
      16,
      "div",
      "square",
      "soldier",
      "boom",
      "safe"
    );
  } else {
    CreatElementsAndClass(
      0,
      49,
      16,
      "div",
      "square",
      "recluta",
      "boom",
      "safe"
    );
  }
});

//FUNZIONE

//Funzione genera numero da  a
function RandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//funzione bombe
function BoomNum(min, max, numbomb) {
  let Boom = [];
  let i = min;
  //creo un generatore di bnumeri rando
  while (i < numbomb) {
    let Nub = RandomNumber(min, max);
    console.log(Nub);

    // se nub non è incluso procedo
    if (Boom.includes(Nub) === false) {
      Boom.push(Nub);
      i++;
    }
  }
  console.log(Boom);
  return Boom;
}

//dovendo creare più elementi utilizzo un ciclo for più indicato per valore di indice numerici

function CreatElementsAndClass(
  min,
  max,
  numbomb,
  tag,
  classe,
  classe2,
  Boomclass,
  Safeclass
) {
  //dovendo creare più elementi utilizzo un ciclo for più indicato per valore di indice numerici
  //Variabile numero Random

  let Boom = BoomNum(min, max, numbomb);

  for (let index = min; index < max; index++) {
    // variabili utilizata per i numeri che vanno inseriti nei box
    let element = index;

    //variabile future celle
    let Box = document.createElement(tag);

    //aggiungo la classe con le caratteristiche delle celle
    Box.classList.add(classe, classe2);

    // aggiungo un evento per aggiugere una seconda classe in caso di click
    Box.addEventListener("click", function () {
      //inserisco l'index al interno
      Box.append(index + 1);
      console.log(index);
      if (Boom.includes(index)) {
        Box.classList.add(Boomclass);
      } else {
        Box.classList.add(Safeclass);
      }
    });

    //stampo tutto
    Container.appendChild(Box);
  }
}
