var arrayOfAttendees = [
  "Chris C", // 0
  "Chris B", // 1
  "Chris H", // 2
  "James", // 3
  "Aleks", // 4
  "Britt", // 5
  // 6
]
// arrayOfAttendees[10] = "Hyunsoo"
// console.log(arrayOfAttendees[3])
var someThing = []

var students = {
  // key: value
  chrisC: "Connolly",
  james: "Hartung",
}

// students["james"] = "Ysursa"
// console.log(students["james"])
// console.log(students.james)

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  // The function code should be here
  var lettersSeen = {
    // a: 0,
  }
  // loop at least once to read each character in the string
  // start   condition  step
  //                  string.length = 14

  for (var i = 0; i < string.length; i++) {
    console.log("*****************************")
    console.log("i: ", i)
    console.log("string[i]: ", string[i])
    var character = string[i]
    // if this is the first time we saw this letter
    if (character in lettersSeen) {
      // increment our counter
      lettersSeen[character] = lettersSeen[character] + 1
      // lettersSeen[character] += 1
      // lettersSeen[character]++
    } else {
      // else this is the first time we saw it
      // set the value of that letter = 1
      lettersSeen[character] = 1
    }
  }

  console.log(lettersSeen)
  return lettersSeen
}
// var someVar = 'Happy Thursday'
// count(someVar)
count("Happy Thursday")

// Coolers | storage

// Primitive data types
// number
var fishCaught = 0
// count

// string
var fishWeCaught = "Salmon"

// boolean
// yes or no
var didWeCatchAFishToday = false
// do some stuff
didWeCatchAFishToday = true

// null
// undefined
// NaN

// Composite data types
// objects
var someObject = {
  key: true,
  keya: "string",
  keyb: 0,
  keyc: [],
  keyd: {},
}[
  // key: value

  // array
  (0, 1, 2, 3, 4)
]
// perserving the order

// Function usage

// Set up
// Do the work
// Do some final work
// Return the work
