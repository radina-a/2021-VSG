function countDuplicate(input) {
  let array = input.sort();
  let duplicates = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i - 1]) {
      duplicates.push(array[i]);
    }
  }

  let uniqueDuplicates = [...new Set(duplicates)];
  return uniqueDuplicates.length;
}
countDuplicate([1, 3, 4, 3, 4, 4]);
