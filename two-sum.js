console.clear();

// Find whether the given array has a pair of numbers that add up to the target

// const twoSum = (numbers, target) => {
//   for (const num1 of numbers) {
//     console.log("num1: ", num1);
//     for (const num2 of numbers) {
//       console.log("- num2: ", num2);
//     }
//   }
// };

const twoSum = (numbers, target) => {
  // store the numbers we've seen so far
  // we'll use a POJO (Plain Old JavaScript Object)
  const hash = {};
  for (const number of numbers) {
    hash[number] = true;
    if (hash[target - number] === true) {
      return true;
    }
  }

  return false;
};

const result1 = twoSum([5, 3, 4, 8], 11);
const result2 = twoSum([5, 3, 4, 8], 100);
console.log("result1 should be true and is: ", result1);
console.log("result2 should be false and is: ", result2);
