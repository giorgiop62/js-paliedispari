/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/


const pariDispari = prompt('pari o dispari');
const numUtente = parseInt(prompt('inserisci un numero da 1 a 5'));
const sum = 0;


function random (){
  numPc = Math.round(Math.random()*5);
  console.log(random);
}
return random;

sum = numPc + numUtente;
console.log(sum);

function sumParidispari(sum){
  if(sum % 2 == 0){
    return 'pari';
  
  }
  console.log(sumParidispari);


}
