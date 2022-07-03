/**
 * 
 * F -> C
 * F -> K
 * 
 * C->F
 * C->K
 * 
 * K->F
 * K->C
 */
//F->C
//T(°C) = (T(°F) - 32) × 5/9
let FARENHITE= 83;
let CELSIUS=(FARENHITE-32) * 5/9;
let ROUNDTHECELSIUS =Math.round(CELSIUS);
console.log(FARENHITE+"˚F is equal to "+ROUNDTHECELSIUS+"˚C")
//F->K
//T(K) = (T(°F) + 459.67)× 5/9
let FARENHITE2=83;
let KALVIN=(FARENHITE2+459.67) * 5/9;
let ROUNDTHEKALVIN =Math.round(KALVIN);
console.log(FARENHITE+"˚F is equal to "+ROUNDTHEKALVIN+"˚K")
//C->F
//T(°F) = T(°C) × 9/5 + 32
let CELCIUS = ROUNDTHECELSIUS
let FARENHITE3=CELCIUS * 9/5 + 32;
let ROUNDTHEFARENHITE=Math.round(FARENHITE3);
console.log(ROUNDTHEFARENHITE+"˚C is equal to "+CELCIUS+"˚F")

//C->K
//T(K) = T(°C) + 273.15
let CELCIUS2 = ROUNDTHECELSIUS
let KALVIN2=CELCIUS2 + 273.15;
let ROUNDTHEKALVIN2 =Math.round(KALVIN2);
console.log(CELCIUS2+"˚C is equal to "+ROUNDTHEKALVIN2+"˚K")

//K->F
//T(°F) = T(K) × 9/5 - 459.67
let KALVIN3 = ROUNDTHEKALVIN
let FARENHITE4= KALVIN3 * 9/5 - 459.67
let ROUNDTHEFARENHITE2 =Math.round(FARENHITE4);
console.log(KALVIN3+"˚K is equal to "+ROUNDTHEFARENHITE2+"˚F")


//K->C
//T(°C) = T(K) - 273.15
let KALVIN4 = ROUNDTHEKALVIN
let CELCIUS3 = KALVIN4 - 273.15
let ROUNDTHECELSIUS2 =Math.round(CELCIUS3);
console.log(KALVIN4+"˚K is equal to "+ROUNDTHECELSIUS2+"˚C")


