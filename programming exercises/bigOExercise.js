// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; //o(1)
  let b = 10; //o(1)
  let c = 50; //o(1)
  for (let i = 0; i < input; i++) {
    let x = i + 1; //o(n)
    let y = i + 2; //o(n)
    let z = i + 3; //o(n)

  }
  for (let j = 0; j < input; j++) {
    let p = j * 2; //o(n)
    let q = j * 2; //o(n)
  }
  let whoAmI = "I don't know"; //o(1)

  // big O -> O(4 + 5n)  or O(4 + 7n) if we are including the for declarations 
}