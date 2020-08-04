// Breakout room members
// [ ] Fill out members array with name

// var members = ['Name', 'Name']

// ************************************************

/*
  String: Reverse

  Implement reverseString(str)
  Input: 'abc'
  Output: 'cba'
*/

function trackAndFieldLapCounter() {
  var counter = 0

  for (var i = 0; i < 10; i++) {
    counter = counter + 1
  }
  console.log(counter)
}

function reverseString(str) {
  // code here
  var revStr = ""
  //str[2]
  //    start              stop  increment
  for (var i = str.length - 1; i >= 0; i--) {
    revStr = revStr + str[i]
  }
  return revStr
}
//          0 1 2
var myStr = "abc"
console.log(reverseString(myStr))

// ************************************************

/*
  Acronyms

  Create a function that, given a string, returns the string’s acronym
  (first letter of each word capitalized).

  Do it with .split first if you need to, then try to do it without
*/

function stringAcronym(str) {
  newArr = str.split("")
  console.log(newStr)
  for (var i = arr.length - 1; i >= 0; i--) {}
}
myStr = "hello world"
console.log(stringAcronym(myStr))

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
