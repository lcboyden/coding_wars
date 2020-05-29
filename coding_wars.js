// 0) Write a function called dividez that takes two numbers and returns the result of division
// dividez(4,2) => 2
//I worked with Caden, and then with Joey

// let answer = 2;
// const INVALID_INPUT_ERROR_MESSAGE = "Invalid Input";

// function dividez(num1, num2) {
//   if (typeof num1 !== "number" || typeof num2 !== "number") { 
//     return INVALID_INPUT_ERROR_MESSAGE
//   }
//   return num1 / num2;
// };

// // answer = dividez(4,2);
// // console.log(answer);

// function testDividez(result, expected) {
//   // let result = dividez(4, 2);
//   if (result !== expected) {
//     console.log("dividez failed, should equal " + expected);
//     return;
//   }
//   // result = dividez(4, 2)
//   if (result === INVALID_INPUT_ERROR_MESSAGE) {
//     console.log(result);
//     console.log(typeof result);
//     console.log("dividez failed, should equal " + expected);
//     return;
//   }
//   console.log("test worked");
// }; 

// testDividez(dividez(8,2), 4);
///////////////////////////////////////////////////////////////////////

// 1. Write a function named reverseString that takes a string and reverses it.
// ie reverseString('yoyo') => 'oyoy'
//I worked with Joey

// const INVALID_INPUT_ERROR_MESSAGE = "Invalid Input";

// function reverseString(str) {
//   if (typeof str !== "string") {
//     return INVALID_INPUT_ERROR_MESSAGE;
//   };

//   let charArray = str.split('');
//   charArray.reverse();
//   let newString = charArray.join("");
//   return newString;
// };

// function testReverseString() {
//   let result = reverseString("something");

//     if (result == INVALID_INPUT_ERROR_MESSAGE) {
//       console.log(result);
//       console.log(typeof result);
//       return
//     };

//     if (result !== "gnihtemos") {
//       console.log('test fail, result should have been gnihtemos');
//       return 
//     };

//   console.log("test successful");
// };

// testReverseString();
/////////////////////////////////////////////////////////////////////////////////

// 2. Write a function named arrayToString that takes an array of strings and returns one string with all values from array combined with '-'.
// ie arrayToString(['yo','my','yoyo']) => 'yo-my-yoyo'
// I worked with Joey.

// let flowers = ["roses", "lilies", "periwinkles", "marigolds", "violets"];
// const INVALID_INPUT_ERROR_MESSAGE = "invalid input bb";

// function arrayToString(someArray) {
//   for(var i = 0; i < someArray.length; i++) {
//     if (typeof someArray[i] !== "string") {
//       return INVALID_INPUT_ERROR_MESSAGE;
//     }; 
//   }
//   newString = someArray.join("-")
//   return newString
// };

// // console.log(arrayToString(flowers));

// function testArrayToString() {
//   let result = arrayToString(flowers);
//   if (result == INVALID_INPUT_ERROR_MESSAGE) {
//       console.log(result);
//       console.log(typeof result);
//       return
//       };
//   if (result !== "roses-lilies-periwinkles-marigolds-violets") {
//     console.log(result)
//     console.log("test failed, should have been roses-lilies-periwinkles-marigolds-violets");
//     return
//   };
//   console.log("you passed, congrats")
// };

// testArrayToString();
/////////////////////////////////////////////////////////////////////////

// 3. Write a function named sumArray that takes an array of numbers and returns the sum.
// ie sumArray([1,2,3]) => 6
// I worked with Joey
//   function sumArray(nums = []) {
//     let numsum = 0;
    
//     for (let i in nums) {
//       if (typeof nums[i] != "number") {
//         return "INVALID INPUT";
//       }
//       numsum += nums[i];
//     }
//     return numsum
//   }

// let testArray = [1,2,3,4,5]

// function testSumArray() {
//   let result = sumArray(testArray)
//   if (result == "INVALID INPUT") {
//       console.log("test failed")
//       console.log(result)
//       return
//   }
//   if (result !== 15) {
//     console.log("test failed, expected 15")
//     return
//   }
//       console.log("test passed")
//   }
// }

// testArray();
///////////////////////////////////////////////////////////////////////////////////

// 4.Write a function named removeItemFromArray that takes an array of anytype and a index and removes the item of a given index and returns new array. This one is up to you to think about how to handle invalid input. discuss this with your partner first
// ie removeItemFromArray([1,'2' ,'hello'], 2) => [1, '2']
// I worked with Joey

// let flowers = ["roses", "lilies", "periwinkles", "marigolds", "violets"];
// const INVALID_INPUT_ERROR_MESSAGE = "invalid input bb";

// function removeItemFromArray(someArray, someIndex) {
//   for(var i = 0; i < someArray.length; i++) {
//         if (typeof someArray[i] !== "string") {
//           return INVALID_INPUT_ERROR_MESSAGE;
//         };
//       }; 
//   if (typeof someIndex !== "number" || someIndex >= someArray.length) {
//     return INVALID_INPUT_ERROR_MESSAGE;
//   };
  
//   someArray.splice(someIndex, 1);
//   return someArray;
// };

// // console.log(removeItemFromArray(flowers, 1));

// function testRemoveItemFromArray() {
//   let result = removeItemFromArray(flowers, 0);

//   if (result == INVALID_INPUT_ERROR_MESSAGE) {
//     console.log("failed test");
//     return
//   };

//   if (JSON.stringify(result) !== JSON.stringify([ 'lilies', 'periwinkles', 'marigolds', 'violets' ])) {
//     console.log("failed test")
//     return 
//   };
//   console.log("test passed horray");
// };

// testRemoveItemFromArray();