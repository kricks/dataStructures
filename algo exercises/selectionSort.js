const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// my solution
function selectionSort(array) {
  let smallestItem;

  for (let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length; j++) {
      if (array[i] < array[j]) {
        smallestItem = array[i];
        array[i] = array[j];
        array[j] = smallestItem;
      }
    }
  }
  return array;
}

selectionSort(numbers);


// video solution
// function selectionSort(array) {
//   for (let i = 0; i < array.length; i++) {
//     let min = i;
//     let temp = array[i];
//     for(let j = i+1; j < array.length; j++) {
//       if (array[i] < array[j]) {
//         min = j;
//       }
//     }
//     array[i] = array[min];
//     array[min] = temp;
//   }
//   return array;
// }