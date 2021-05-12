
// In your own words, define closure (1-2 sentences).
// everything in the outer function or outside function is available in the inner function or access from inner function is called closure


function personalDice(name){
    return function(){
        // generate random number between 1 and 6
      const newRoll = Math.floor(Math.random() * 6);
      console.log(`${name} rolled a ${newRoll}`)
    }
  }
  
  const dansRoll = personalDice("Dan");
  
  const zoesRoll = personalDice("Zoe");
  
  
  dansRoll();
  dansRoll();
 /* 
a. Where is closure used in this code? How can you tell?

line 7 is closure because its using variable from outside and function using variable from outside the scope are actually closures


b. Compare and contrast calling dansRoll the first and second time. What is always the same? What could change?

name is always same and newRoll is keep changing


c. What is the lexical scope of newRoll? this might help https://stackoverflow.com/questions/1047454

whatever is inside the "function personalDice(name)" is lexical enviornment or lexical scope



Write a function that would allow you to do this using a closure. */

function createBase(x){
return function addSix(y){
    return x + y;
}
}


var addSix = createBase(6);
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27



