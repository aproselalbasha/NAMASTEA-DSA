// Write a function that returns the number of negative numbers in an array.

let arr1 = [2, -6, 4, 8, 1, -9];
function countnegative() {
  count = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] < 0) {
      count++;
    }
  }
  return count;
}

console.log("number of negative numbers = " + countnegative(arr1));
// ===============================
// Write a function that returns the largest number in an array.
let arr2 = [2, -6, 4, 8, 1, -9];
function largestnumber(arr) {
  let larger = -Infinity;
  for (var i = 0; i < arr2.length; i++) {
    if (larger < arr2[i]) {
      larger = arr2[i];
    }
  }
  return larger;
}
console.log("larger number is = " + largestnumber(arr2));
// ====================================
// Write a function that returns the smallest number in an array.

let arr3 = [2, -6, 4, 8, 1, -9];
function smallernumber(arr) {
  let small = Infinity;
  for (var i = 0; i < arr3.length; i++) {
    if (small > arr3[i]) {
      small = arr3[i];
    }
  }
  return small;
}
console.log("smallest number is = " + smallernumber(arr3));
// ========================================

// Write a function secondLargest(arr) that returns the second largest distinct number in an array.

let arr4 = [2, -6, 4, 8, 1, -9];
function secoundlarger(arr) {
  if (arr4.length < 2) return "Array should have at least two numbers";
  let firstlarger = -Infinity;
  let secoundlarger = -Infinity;
  for (var i = 0; i < arr4.length; i++) {
    if (firstlarger < arr4[i]) {
      secoundlarger = firstlarger;
      firstlarger = arr4[i];
    } else if (secoundlarger < arr4[i] && secoundlarger != firstlarger) {
      secoundlarger = arr4[i];
    }
  }
  return secoundlarger;
}
console.log("secound larger number is = " + secoundlarger(arr4));
