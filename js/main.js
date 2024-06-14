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


const Contatore = document.getElementById("punteggio");

const EndGame =document.getElementById("score");

// creo un evento che da origine a tutto

WannaPlay.addEventListener("click", function () {
  
  //aggiungo la classe hide al bottone e alla select
  Level.classList.add("hide");

  WannaPlay.classList.add("hide");
  //Rimuovo la classe hide alla tavola da gioco
  Container.classList.remove("hide");
  Contatore.classList.remove("hide");
  Contatore.classList.add("d-block")
  // condizioni per i differenti valori di difficoltà
  
    CreatElementsAndClass(
      0,
      100,
      16,
      "div",
      "p",
      "hide",
      "square",
      "veteran",
      "boom",
      "safe"
    );
  
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
  tag2,
  classe,
  classe2,
  classe3,
  Boomclass,
  Safeclass
) {
  //dovendo creare più elementi utilizzo un ciclo for più indicato per valore di indice numerici
  //Variabile numero Random

  let Boom = BoomNum(min, max, numbomb);

  for (let index = min; index < max; index++) {
    // variabili utilizata per i numeri che vanno inseriti nei box
    //variabile future celle
    let Box = document.createElement(tag);
    //aggiungo la classe con le caratteristiche delle celle
    Box.classList.add(classe2, classe3);

    let NumBox= document.createElement(tag2);
    NumBox.append(index + 1);
    NumBox.classList.add(classe);
    Box.appendChild(NumBox);
    // aggiungo un evento per aggiugere una seconda classe in caso di click
    Box.addEventListener("click",function (){
      //inserisco l'index al interno 
      
     let Punti= document.getElementsByClassName(Safeclass);
      
      if (Boom.includes(index)) {
        Box.classList.add(Boomclass);
        NumBox.classList.remove(classe);
        EndGame.classList.remove(classe);
        EndGame.innerHTML="Hai totalizato "+ Punti.length +" "+ "Punti";
      } else {
        Box.classList.add(Safeclass);
        NumBox.classList.remove(classe);
        Contatore.innerHTML=(Punti.length);
        if (Punti.length === max-numbomb) {

          EndGame.innerHTML="You Win All";
        }
      } 
   
    
    }
    );
    
    //stampo tutto
    Container.appendChild(Box);
  }
}
 
    

