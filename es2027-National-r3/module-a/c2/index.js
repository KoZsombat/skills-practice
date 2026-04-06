function chunkArray(array, chunkSize) {
  const res = []

  for (let index = 0; index < array.length; index++) {
    let arr = array.slice(index, chunkSize + index)
    res.push(arr)

    index += chunkSize - 1
  }

  return res
}

// Example usage:
console.log(chunkArray([1, 2, 3, 4, 5], 2)); // Output: [[1, 2], [3, 4], [5]]
console.log(chunkArray([1, 2, 3, 4, 5], 3)); // Output: [[1, 2, 3], [4, 5]]
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4)); // Output: [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10]]