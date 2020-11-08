






1. // (_completed below_) Define a function, as a function declaration, `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them.
// If they are the same, return that number. Use the if-else construct or a ternary expression -  the Math.max method is not allowed.

function maxOfTwoNumbers(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
  
  // or more "elegantly" using the fantastic ternary expression!
  // return  x >= y ? x : y;
}

console.log(maxOfTwoNumbers(3, 9));


// 2. Define a function as a function expression, `maxOfThree`, that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

const maxOfThree = function(a, b, c) {
    if (a >= b && a >= c) {
      return a;
    } else if (b >= a && b >= c) {
      return b;
    } else {
      return c;
    }
  }
  console.log(maxOfThree(5,8,10));

// 3. Define a function, as a function declaration, `isCharAVowel` that takes a character as an argument and returns true if it is a vowel, false otherwise.

function isCharAVowel(char) {
  char = char.toLowerCase();
  return ('aeiouy'.indexOf(char) > -1);
}

console.log(isCharAVowel('u'))


// 4. Define a function, as a function expression, `sumArray` that takes an array of numbers and returns the sum of those numbers. For example, `sumArray([2, 4, 5]);` would return `11`.

const sumArray = function(arr) {
  let sum = 0;
  arr.forEach(function(num) {
    sum += num;
  });
  return sum;
}

console.log(sumArray([4, 6, 12]));








// 5. Define a function, as a function declaration, `multiplyArray` that takes an array of numbers and returns the product of those numbers. For example, `multiplyArray([2, 4, 5]);` would return `40`.





function multiplyArray(arr) {
  let product = 1;
  arr.forEach(function(arr) {
    product *= arr;
  });
  return product;
}


console.log(multiplyArray([2,4,5]))




// 6. Define a function, as a function expression, `numArgs` that returns the number of arguments passed to the function when called.

const numArgs = function(...args) {
return args.length;

}
console.log(numArgs('mike', false , 5 ))


// 7. Define a function, as a function declaration, `reverseString` that takes a string, reverses the characters and returns it. For example, `reverseString('rockstar');` would return the string "ratskcor".

function reverseString(string){
  let revString = "" 
  for (let i = string.length - 1; i >= 0; i--) {
    revString += string[i];
  }
  return revString
}
console.log(reverseString("maicol"))


// 8. Define a function, as a function expression, `longestStringInArray` that takes an array of strings as an argument and returns the longest string's length.
const longestStringInArray = function(arr) {
  let longest = 0;
  arr.forEach(function(str) {
      if (str.length > longest) {  
          longest = str.length;   
      }
  });
  return longest;
};

console.log(longestStringInArray(['mike', 'maicol', 'michael']))





// 9. Define a function, as a function declaration, `stringsLongerThan` that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, `stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);` would return `["hello", "morning"]`.


function stringsLongerThan(arr, length){
  return arr.filter(str =>{
     return (str.length  > length) ;
  });
};
console.log(stringsLongerThan(['mike', 'maicol' , 'mikey', 'michael'], 4))






