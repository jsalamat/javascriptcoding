// JS snippets

//======= Inserting Special Characters ==========
// Escape Sequence Characters
console.log("----Escape Sequence Characters----");
console.log("----------------------------------");
console.log("\'  Single quote");
console.log("\"  Double quote");
console.log("\\  Backslash");
console.log("\b  Backspace");
console.log("\f  Form feed");

console.log("\ddd  Octal sequence(3 digit: ddd)");
console.log("\xdd  Hexidecimal sequence (2 digits: dd)");
console.log("\udddd Unicode sequence (4 hex digits: dddd");
console.log("----------------------------------");
console.log("\n  Newline");
console.log("----------------------------------");
console.log("\r  Carriage return");
console.log("----------------------------------");
console.log("\t  Horizontal tab");
console.log("----------------------------------");

//example
console.log("This page \u00A9 JS Design");
// This page © JS Design

// ======= Replacing Pattern with New Strings ==========
// - Replace a matched substring with a new substring
// - used String's replace() method, with regular expression
