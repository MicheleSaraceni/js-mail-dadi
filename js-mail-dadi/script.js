/* 
Ciao ragazzi,
Esercizio di oggi:
nome repo: js-mail-dadi */

/*Bonus:
Snack 5-6-7-9 dal pdf in allegato
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
Buon lavoro e buon divertimento! :js: :muscolo:
*/

"use strict";
console.clear();


/*Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Non è necessario provvedere alla validazione delle email */

//array di utenti che possono accedere (@gmail.com --> inserisco in seguito)
const user = [
    'Aj',
    'Agostino',
    'Alessandro',
    'Michele',
    'Carlo',
    'Simone',
    'Luca'
  ];

const usermail = prompt ("Inserisci la tua mail");
console.log(usermail);

/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/


