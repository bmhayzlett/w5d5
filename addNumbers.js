

var readline = require("readline");

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {

  if (numsLeft > 0) {
    numAdded(sum, numsLeft, completionCallback);
  }
  else {
    return completionCallback(sum);
  }
}


var numAdded = function (sum, numsLeft, completionCallback){
  reader.question("Add!", function(number) {
    var newSum = sum + parseInt(number);
    console.log(newSum);
    addNumbers(newSum, numsLeft-1, completionCallback);
  });
};


var completionCallback = function(sum) {
  console.log("DONE! SUM=" + sum);
  reader.close();
};

addNumbers(0,3,completionCallback);


// function addTwoNumbers(callback) {
//   reader.question("Enter #1", function (numString1) {
//     reader.question("Enter #2", function (numString2) {
//       var num1 = parseInt(numString1);
//       var num2 = parseInt(numString2);
//       console.log(num1);
//       console.log(num2);
//
//       callback(num1 + num2);
//     });
//   });
// }
// var addNumbers = function (sum, numsLeft, completionCallback) {
//   if (numsLeft > 0) {
//     completionCallback
//     addNumbers(, numsLeft - 1, completionCallback)
//     };
//   }
// };
//
// var completionCallback = function(callback, sum) {
//   reader.question("Ender #1", function (numString) {
//     var num1 = parseInt(numString);
//   }
//   console.log(num 1 + sum)
//   callback(num1 + sum)
// };

// var nextNum = parseInt(reader, 10);
//
// reader.question("Ender #1", function (numString) {
//   var num = parseInt(numString);
// }
// callback(num + nextNum)
