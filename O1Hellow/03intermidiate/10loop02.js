// For Each //

// const myState = [
//     "rajisthan",
//     "Delhi",
//     "assam", 
//     1947, 
//     "tamil nadu",
//     "Maharashtra"];

// myState.forEach(s => console.log(s));

// For in and For of loop //

// const names = ["youtube","instagram","facebook","netflix","Amazon"];

// for (const n of names){
//      console.log(n);
// } 

// for off is majorly used with arrays//

const symbols = {
    yt: "youtube",
    ig: "instragram",
    fb: "facebook",
    net: "Netflix",
    Amz: "Amazon"
}

for (n in symbols){
    console.log(`key: ${n} value: ${symbols[n]}`);
}




