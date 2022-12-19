// 7 kyu Jaden Casing Strings

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// string words only
// uppercase first letter of each word

// map a new array and for each element uppercase first letter

String.prototype.toJadenCase = function () {
  return this.split(" ").map(element => element[0].toUpperCase() + element.slice(1)).join(" ")
};

console.log("How can mirrors be real if our eyes aren't real".toJadenCase()) // "How Can Mirrors Be Real If Our Eyes Aren't Real"