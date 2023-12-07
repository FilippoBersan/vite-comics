'use strict';

//  1 contaElementi(): scrivere una funzione che, dato un array in input, conti il numero degli elementi presenti e lo restituisca come numero intero

// //  creiamo l'array
// const array = ['Enrico', 'AlessandroB', 'AlessandroT', 'Filippo', 'Lorenzo'];

// // creiamo funzione
// const contaElementi = (array) => array.length;

// const risultato = contaElementi(array);

// console.log(risultato);

// inserisciInCoda(): 2 scrivere una funzione che, dato un array A in input e un elemento da inserire E, restituisca un nuovo array B con tutti gli elementi dell'array A e come ultimo elemento E

// creiamo l'array
// const array = ['Enrico', 'AlessandroB', 'AlessandroT', 'Filippo', 'Lorenzo'];

// function inserisciInCoda(array, elemento) {
//   let nuovoArray = [];
//   let i = 0;
//   while (i < array.length) {
//     nuovoArray[i] = array[i];
//     i++;
//   }
//   nuovoArray[i] = elemento;
//   return nuovoArray;
// }

// const risultato = inserisciInCoda(array, 'Ciao');

// console.log(risultato);

// togliDallaCoda():  3 scrivere una funzione che, dato un array A in input, restituisca un nuovo array B con tutti gli elementi dell'array A, tranne l'ultimo

const array = ['Enrico', 'AlessandroB', 'AlessandroT', 'Filippo', 'Lorenzo'];

function inserisciInCoda(array) {
  let nuovoArray = [];
  let i = 0;
  while (i < array.length - 1) {
    nuovoArray[i] = array[i];
    i++;
  }

  return nuovoArray;
}

const risultato = inserisciInCoda(array);

console.log(risultato);
