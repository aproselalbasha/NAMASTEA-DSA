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

// ========================================
// star pattern crete a 4*4 star

const n = 4;
for (var i = 0; i < n; i++) {
  let num = "";
  for (var j = 0; j < n; j++) {
    num = num + "*";
  }
  console.log(num);
}
// ================
// *
// **
// ***
// ****
const n1 = 4;
for (var i = 0; i < n1; i++) {
  let num = "";
  for (var j = 0; j <= i; j++) {
    num = num + "*";
  }
  console.log(num);
}

// =================
// 1
// 12
// 123
// 1234
// 12345

var n2 = 5;
for (let i = 0; i < n2; i++) {
  let count = "";
  for (let j = 0; j <= i; j++) {
    count = count + (j + 1);
  }
  console.log(count);
}

// // =========
// 1
// 22
// 333
// 4444
// 55555

let n3 = 5;
for (let i = 0; i < n3; i++) {
  let count = "";
  for (let j = 0; j <= i; j++) {
    count = count + (i + 1);
  }
  console.log(count);
}
// ==============================
// *****
// ****
// ***
// **
// *

let n4 = 5;
for (let i = 0; i < n4; i++) {
  let count = "";
  for (let j = 0; j < n4 - i; j++) {
    count = count + "*";
  }
  console.log(count);
}
// ===============
// ----*
// ---**
// --***
// -****
// *****

let n4 = 5;
for (let i = 0; i < n4; i++) {
  let count = "";
  for (let j = 0; j < n4 - (i + 1); j++) {
    count = count + "-";
  }
  for (let k = 0; k < i + 1; k++) {
    count = count + "*";
  }
  console.log(count);
}
// =================
// 1
// 10
// 101
// 1010
// 101010
let n5 = 5;
for (let i = 0; i < n5; i++) {
  let count = "";
  let flip = 1;
  for (let j = 0; j <= i; j++) {
    count = count + flip;
    if (flip == 0) {
      flip = 1;
    } else flip = 0;
  }

  console.log(count);
}
// ===============
// 1
// 01
// 010
// 1010
// 10101

let n5 = 5;
let flip = 1;
for (let i = 0; i < n5; i++) {
  let count = "";

  for (let j = 0; j <= i; j++) {
    count = count + flip;
    if (flip == 0) {
      flip = 1;
    } else flip = 0;
  }

  console.log(count);
}
