// ? Task-1
function numCounter(text) {
  let letters = text.replace(/[^a-z]/gi, "");
  return letters.length;
}

console.log(numCounter("JavaScript function"));

// ? Task-2
function isLucky(num) {
  let firstSum = +num[0] + +num[1] + +num[2];
  let secondSum = +num[3] + +num[4] + +num[5];
  if (firstSum == secondSum) {
    return true;
  } else {
    return false;
  }
}

console.log(isLucky("145064"));

// ? Task-3
// function capitalizeWords(words) {

// }

// console.log(capitalizeWords("Hello my world"));
