let counter = 0;
fucntion inception() {
  // base case is to quit out of recursion
  if (counter > 3) {
    return 'done';
  }
  counter++;
  // recursive case
  return inception();
}

inception();

// identify the base case
// identify the recursive case
// get closer and closer to the base case and return when needed. usually you have 2 returns