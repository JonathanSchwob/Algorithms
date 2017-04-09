// Given an unsorted array of integers, find a pair with given sum in it.
// O(n) solution with O(n) space complexity 
const arr = [8, 7, 2, 5, 3, 1];
const sum = 10;

function findPairSum(array, sum) {
  let list = {};
  for (let i = 0; i < array.length; i++) {
    let target = sum - array[i];
    if (list[target] !== undefined) {
      return [list[target], i];
    } else {
      list[arr[i]] = i;
    }
  }
  return [-1, -1];
}

findPairSum(arr, 10);
//[0, 2]