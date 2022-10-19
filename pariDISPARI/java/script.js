/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/


const pariDispari = prompt('pari o dispari');
console.log(pariDispari);

const numUtente = parseInt(prompt('inserisci un numero da 1 a 5'));
console.log(numUtente);

const num3 = random(numPc);

function random (){
  numPc = Math.round(Math.random()*5);
  console.log('numero ', numPc);
  return numPc;
}

random();



function somma(num3, numUtente) {
  var risultato ='';
  var x;
  var y;
  risultato = x+y;
  console.log('la somma è', risultato);
  return risultato;
}
somma();







