// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(x, y){
    if(x > y){
      return x;
    }
    else {
      return y;
    }
}

console.log(max(2,4));

// Will need to revisit this question #1 to somehow give me the "result" of a number instead of the true or false value
//And Mike helped me out with this.

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(a, b, c){

  if(a > b && a > c){
    return a

  }
  else if (a > b && b > c){
    return b
  }
  else {
    return c
  }

}

console.log(maxOfThree(10, 15, 20));
console.log(maxOfThree(60,30,77))

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
    if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
      return true;
    }
    else {
      return false;
    }
}

console.log(isVowel("t"));
console.log(isVowel("i"));

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.

function sum(x, y){
  return x + y;
}

console.log(sum(5,5))


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.

function avg(a, b, c){
  let sum = a + b + c;
  let div = sum / 3;
  return div
}

console.log(avg(4,7,10))

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.

function getLength(gotlength){
  return gotlength.length;
}

console.log(getLength("The Almighty Dog"));

//or this method could also work

function getLength(gotlength){
  console.log(gotlength.length)
}

getLength("The Almighty Dog");


// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan(x, y){
  if(x > y){
    return true;
  }
  else{
    return false;
  }
}

console.log(greaterThan(10,50))
console.log(greaterThan(80,50))

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.

function greet(name){
  console.log("Hello, " + name + "!");
}

console.log(greet("Scott"));



// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madlib(a, b, c, d, e) {
    console.log("I decided to " + a + " and " + d + ". Afterward, I will " + b + " and " + c + " myself into the pit of istanity " + e);
}

madlib("sleep", "kick", "scream", "sing", "and I really can't spell today and don't even care.");
