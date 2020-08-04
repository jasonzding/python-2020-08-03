// Breakout room members
// [ ] Fill out members array with name

// var members = ['James "Jim" H', 'Aleks Y, 'Robert O', 'Darius Sparks']

// ************************************************

/*
  String: Reverse

  Implement reverseString(str)
  Input: 'abc'
  Output: 'cba'
*/

function reverseString(str) {
  rev_str = ""
  for (x = str.length - 1; x >= 0; x--) {
    rev_str += str[x]
  }
  return rev_str
}
console.log(reverseString("help"))

// array[3] = p
// array[2] = l
// array[1] = e
// arry[0] = h
// ************************************************

/*
  Acronyms

  Create a function that, given a string, returns the string’s acronym
  (first letter of each word capitalized).

  Do it with .split first if you need to, then try to do it without
*/

function stringAcronym(str) {
  let acro = ""
  for (let i = 0; i < str.length; i++) {
    acro += str[i][0]
  }
  return acro
}
console.log(stringAcronym(["Will", "this", "work", "though"]))

// ("t", "h")
// ************************************************
/*
  Case insensitive string comparison

  const test1StrA = "ABC"
  const test1StrB = "abc"
  caseInsensitiveCompare(test1StrA, test1StrB) // Output: true
*/

function caseInsensitiveCompare(stringA, stringB) {
  if (stringA.length != stringB.length) {
    return false
  }
  stringA = stringA.toLowerCase()
  stringB = stringB.toLowerCase()
  return stringA == stringB
}

console.log(caseInsensitiveCompare("WILL THIS WORK", "will this work"))
