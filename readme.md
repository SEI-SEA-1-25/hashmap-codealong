# Lab - Solve A Hash Map Problem!

## The Problem - isSubArray

Given two arrays where arr1.length > arr2.length, check if arr2 is a sub-array. Order doesn't matter!

```javascript
isSubArray(
  ["hey", "what", "is", "up", "with", "hashmap"],
  ["up", "with", "hashmap"]
);
// --> true

isSubArray(
  ["hey", "what", "is", "up", "with", "hashmap"],
  ["down", "with", "hashmap"]
);
// --> false, contains a word that's not in the first list

isSubArray(
  ["hey", "what", "is", "up", "with", "hashmap"],
  ["hashmap", "is", "what", "is", "up"]
);
// --> false, too many "is" words!
```

## Directions

Work in the file called `is-sub-array.js` Run it with Nodemon and see if you get `true` and `false` printed out!

## Step 1

Think about how you can use a hash table (aka an object) as you go through the first array, storing keys and values.

Then stop thinking about it and... do it?

## Step 2

Now loop through the second array (without nesting it in the first loop!), checking to see if every item from the second loop occurs in the first loop. Don't forget to "scratch it out" every time you find a match.

## Stretch Goal

A similar problem is [finding all sub-arrays with a sum of 0](https://www.geeksforgeeks.org/print-all-subarrays-with-0-sum/)! Have fun with it.
