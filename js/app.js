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

function capitalizeWords(text) {
  let splittedText = text.split(" ");
  // console.log(splittedText);

  let result =
    splittedText[0][0].toUpperCase() +
    splittedText[0].slice(1) +
    " " +
    splittedText[1][0].toUpperCase() +
    splittedText[1].slice(1) +
    " " +
    splittedText[2][0].toUpperCase() +
    splittedText[2].slice(1);

  console.log(result);
}

capitalizeWords("Hello my world");
