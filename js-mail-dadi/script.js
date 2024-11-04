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

//Faccio scegliere se l'utente vuole usare la parte di script mail o dice game
let scelta = parseInt(prompt("Vuoi validare la mail o giocare a dadi con il pc? Premi 1 per la l'accesso tramite mail / Premi 2 per il gioco dei dadi"))

//controllo la scelta dell'utente 
if (scelta === 1){
    /*Mail
    Chiedi all’utente la sua email,
    controlla che sia nella lista di chi può accedere,
    stampa un messaggio appropriato sull’esito del controllo.
    Non è necessario provvedere alla validazione delle email */

    //array di utenti che possono accedere
    const user = [
        'Aj@gmail.com',
        'Agostino@gmail.com',
        'Alessandro@gmail.com',
        'Michele@gmail.com',
        'Carlo@gmail.com',
        'Simone@gmail.com',
        'Luca@gmail.com'
    ];

    //inizializzo le var
    let usermail = " ";
    let tentativi = 0;

    while (tentativi < 10) {
        //chiedo la mail all'utente
        usermail = prompt ("Inserisci la tua mail:");
        console.log("La mail inserita è: " + usermail);
        //controllo se l'utente a inserito il carattere obbligatorio per una mail @
        if (usermail.includes("@")) {
            break;
        } else {
            console.log("Email non valida perchè priva del carattere '@', riprova.");
            tentativi++;
        }
        //solo per utenti duri di comprendonio 
        if (tentativi === 10) {
            console.log("Mi dispiace ma se ancora dopo 10 volte non hai inserito una mail corretta non puoi accedere al sito, CIAO.");
        }
    }

    //scorro l'array
    for (let i = 0; i < user.length; i++){
        //Controllo se la mail inserita è presente
        if (user[i] === usermail){
            console.log ("La mail è registrata, accesso effettuato correttamente.");
            i = user.length;
        } else if(user[user.length - 1] !== usermail){ //se arrivati all'ultimo indice della lista la mail non è presente comunicalo
            console.log ("La mail " + usermail + " non è registrata, controlla se è stata inserita correttamente altrimenti se non hai ancora un account effettua la registrazione e tenta di nuovo l'accesso.");
        }
    }
} else if (scelta === 2){
    /*Gioco dei dadi
    Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
    Stabilire il vincitore, in base a chi fa il punteggio più alto.*/

    // Funzione per generare un numero random da 1 a 6
    function d6() {
        return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    }

    // Tiro 1d6 per l'utente e uno per il computer
    let userRoll = d6();
    let computerRoll = d6();

    // Mostro i tiri effettuati dai 2 giocatori
    console.log("Giocatore ha tirato: " + userRoll);
    console.log("Computer ha tirato: " + computerRoll);

    // Verifico chi ha vinto
    if (userRoll > computerRoll) {
        console.log("Congratulazioni! Hai vinto!");
    } else if (computerRoll > userRoll) {
        console.log("Mi dispiace! Il computer ha vinto!");
    } else {
        console.log("Cavolo, è un pareggio! Dovrete rigiocare!");
    }
} else {
    console.log ("Hai inserito un valore non presente tra le scelte, aggiorna la pagina e segui le istruzioni in modo corretto")
}

