/**
 * eine Funktion getValueorZeroOfARR(index) die den Wert des Arrays an der Stelle Index

 zurückgibt wenn dieser Index ein gültiger Index ist, und sonst 0 (Null)
 */

var ARR = [1, -1, 4, -4, 8, -8, 16, -16];

function getValueorZeroofARR (index) {
    for (var i = 0; i < ARR.length; i++) {
    if (i = index) {
       console.log(ARR[i]);
    }
        else {
        console.log("0");
    }
    }
}