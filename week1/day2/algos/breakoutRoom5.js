// Breakout room members
// [ ] Fill out members array with name

// var members = ['Anthony', 'Vinh']

// ************************************************

/*
  String: Reverse

  Implement reverseString(str)
  Input: 'abc'
  Output: 'cba'
*/

var bestArray = ["Vinh", 1, 2, 3, "Raymond"]

function Loop() {
  var newArray = []
  for (var i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i])
  }
  return newArray
}

Loop(bestArray)

/*function reverseString(string) {
    var reverse = "";
    var temp;

    for (var i = string.length - 1; i >= 0; i--) {
        reverse += string[i]
    }
    return reverse;
}

string = "hello";
console.log(reverseString(string));*/

// ************************************************

/*
  Acronyms

  Create a function that, given a string, returns the string’s acronym
  (first letter of each word capitalized).

  Do it with .split first if you need to, then try to do it without
*/

function stringAcronym(str) {
  var arr = str.split(" ")
  console.log(arr) // ['Algo', 'in', 'the', 'morning']

  var acronym = ""
  for (var i = 0; i < arr.length; i++) {
    var first_letter = arr[i][0] //.toUpperCase()
    acronym = acronym + first_letter
  }
  return acronym
}

var string = "Algo in the morning"
console.log(stringAcronym(string))

/*var String = "hello anthony"
var res = String.split(" ");

// res == array  = ["hello", "anthony"]
console.log(res[0][0])*/

// ************************************************
/*
  Case insensitive string comparison

  const test1StrA = "ABC"
  const test1StrB = "abc"
  caseInsensitiveCompare(test1StrA, test1StrB) // Output: true
*/

function caseInsensitiveCompare(str1, str2) {
  // code here
}
