
var ARR = [1, -1, 4, -4, 8, -8, 16, -16];
var DurchschnittPositiveZahlen = 0;

for (var i = 0; i < ARR.length; i++) {
    if (ARR[i] > 0) DurchschnittPositiveZahlen = DurchschnittPositiveZahlen + ARR[i]
}

console.log(DurchschnittPositiveZahlen);

DurchschnittPositiveZahlen = 29/4;

for (var e = 0; e < ARR.length; e++) if (ARR[e] > DurchschnittPositiveZahlen) {
    console.log(ARR[e])
}