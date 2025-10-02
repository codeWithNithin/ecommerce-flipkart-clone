// Merge Sort function
function mergeSort(arr, sortBy) {
  // Base case: if array has 1 or 0 elements, it is already sorted
  if (arr.length <= 1) return arr;

  // 1. Divide array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // 2. Conquer: Recursively sort both halves
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // 3. Combine: Merge sorted halves
  return merge(sortedLeft, sortedRight, sortBy);
}

// Merge two sorted arrays
function merge(left, right, sortBy) {
  const result = [];
  let i = 0; // index for left
  let j = 0; // index for right

  // Compare elements from both arrays and push the smallest first
  while (i < left.length && j < right.length) {
    if (left[i][sortBy] <= right[j][sortBy]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Push any remaining elements
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}

export default mergeSort;
