//------------------------ problem one-------------------------------
function cubeNumber(input_number) {
  // Convert the input to a number if it's not already
  const number = parseFloat(input_number);

  // Check if the conversion was successful
  if (!isNaN(number)) {
    // Calculate the cube
    const result = Math.pow(number, 3);
    return result;
  } else {
    return "Invalid input. Please provide a valid number.";
  }
}

// -------------------problem two -----------------------------

function matchFinder(str1, str2) {
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    return "Please enter string"; // Bonus: Return a small amount if input is not valid strings
  }

  // Convert both strings to lowercase for case-insensitive matching
  const lowerStr1 = str1.toLowerCase();
  const lowerStr2 = str2.toLowerCase();

  // Check if a part of str2 is present in str1
  if (lowerStr1.includes(lowerStr2) || lowerStr2.includes(lowerStr1)) {
    return true;
  }

  return false;
}

//---------------------- problem three----------------------
function sortMaker(array) {
  if (!Array.isArray(array) || array.length !== 2) {
    return "Invalid Input";
  }

  const [first, second] = array;

  if (typeof first !== "number" || typeof second !== "number") {
    return "Invalid Input";
  }

  if (first < 0 || second < 0) {
    return "Invalid input";
  }

  if (first === second) {
    return "equal";
  }

  if (second > 0) {
    return [first, second].sort((a, b) => a - b);
  }

  return [first, second].sort((a, b) => b - a);
}

// -----------------------------problem four------------------------------

function findAddress(addressObj) {
    if (typeof addressObj !== 'object' || addressObj === null) {
        return "Invalid Input";
    }

    const street = addressObj.street !== undefined ? addressObj.street : "__";
    const house = addressObj.house !== undefined ? addressObj.house : "__";
    const society = addressObj.society !== undefined ? addressObj.society : "__";

    return `${street},${house},${society}`;
}


//------------------------------ problem five ----------------------------------
function canPay(notes, price) {
    if (!Array.isArray(notes) || notes.length === 0) {
        return "Empty array";
    }

    let totalAmount = 0;
    for (let i = 0; i < notes.length; i++) {
        totalAmount += notes[i];
    }

    return totalAmount >= price;
}



//------------------------ problem one Test cases--------------------
// console.log(cubeNumber(3)); // Output: 27
// console.log(cubeNumber(4)); // Output: 64
// console.log(cubeNumber("2")); // Output: 8
// console.log(cubeNumber("hello")); // Output: Invalid input. Please provide a valid number.

// --------------------------Test cases problem two---------------------
// console.log(matchFinder("John Doe", "ohn")); // Output: true
// console.log(matchFinder("JavaScript", "Code")); // Output: false
// console.log(matchFinder("Peter Parker", "Pen")); // Output: false
// console.log(matchFinder("Peter Parker", "pet")); // Output: false
// console.log(matchFinder(123, "abc")); // Output: Small amount
// console.log(matchFinder("Hello", true)); // Output: Small amount

// -----------------------------Test cases problem three-------------------------
// console.log(sortMaker([6, -6]));   // Output: [2, 3]
// console.log(sortMaker([4, 2]));   // Output: [2, 4]
// console.log(sortMaker([4, 4]));   // Output: equal
// console.log(sortMaker([1, 2]));   // Output: [1, 2]
// console.log(sortMaker([4, -2]));  // Output: Invalid
// console.log(sortMaker([3]));      // Output: Invalid Input
// console.log(sortMaker("string")); // Output: Invalid Input

// -------------------------------Test cases problem four------------------------
// console.log(findAddress({ street: 10, house: "15A", society: "Earth Perfect" }));
// Output: 10,15A,Earth Perfect

// console.log(findAddress({ street: 10, society: "Earth Perfect" }));
// Output: 10,__,Earth Perfect

// console.log(findAddress({ street: 10 }));
// Output: 10,__,__  

// -------------------------Test cases Problem five----------------------------------
// console.log(canPay([1, 2, 5], 10));   // Output: false
// console.log(canPay([1, 5, 5], 10));   // Output: true
// console.log(canPay([], 5));          // Output: Empty array
// console.log(canPay("invalid", 8));   // Output: Empty array