// RIOT Walk

// Repeat
// Input
// Output
// Test

// Walk-through

// Breakout room members
// [Chris H, Chris C, Leslie Z, Umer M, Vikram] Fill out members array with name

// var members = ['Name', 'Name']

// ************************************************

/*
  String: Reverse

  Implement reverseString(str)
  Input: 'abc'
  Output: 'cba'
*/

function reverseString(str) {
  var revStr = ""
  // str[0] // 'a'
  for (value of str) {
    console.log("value: ", value)
    revStr = value + revStr
    console.log(`revStr: `, revStr)
    console.log("*****************************")
  }
  return revStr
}

var strTestCase = "abc"
var myString = reverseString(strTestCase)
console.log(myString)

//   var newStr = ""
//   for (var i = 0; i < str.length; i++) {}
// }

// ************************************************

/*
  Acronyms

  Create a function that, given a string, returns the string’s acronym
  (first letter of each word capitalized).

  Do it with .split first if you need to, then try to do it without

  input: 'The quick brown fox, jumped over the lazy dog.'
// string.toUpperCase()
  output: 'TQBFJOTLD'

*/

function stringAcronym(str) {
  strlist = str.split(" ")
  s = ""

  for (var x in strlist) {
    s += x[0].toUpperCase()
  }

  return s
}

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
