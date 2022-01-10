const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  // O(n^2) that means i need nested loops
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j+1]) {
        // swap numbers
        let temp = array[j]; // temp = 99
        array[j] = array[j+1]; // 99 = 44
        array[j+1] = temp; // 44 = 99
      }
    }
  }
}

bubbleSort(numbers);
console.log(numbers);