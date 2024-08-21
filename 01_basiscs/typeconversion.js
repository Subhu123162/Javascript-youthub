let score = 33
console.log(typeof score);
console.log(typeof (score));

let core = "33abc"
console.log(typeof core);
console.log(typeof (core));



let valueInNumber = Number(core)
console.log(typeof valueInNumber);
console.log(valueInNumber); //NaN output

//"33"=>33
//"331abc"=>NaN
//true=>1,false=>0

let isLoggedIn = 1
let BooleanIsLoggedIn = Boolean(isLoggedIn);