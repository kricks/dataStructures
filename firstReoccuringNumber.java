//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

// need to store numbers that i have iterrated through
// when i store, i will check stored numbers with current number
import java.util.*;

class Main {
  public static void main(String[] args) {
    int[] array1 = { 2, 5, 1, 2, 3, 5, 1, 2, 4 }; // return 2
    int[] array2 = { 2, 1, 1, 2, 3, 5, 1, 2, 4 }; // return 1
    int[] array3 = { 2, 3, 4, 5 }; // return null
    int[] array4 = { 2, 5, 5, 2, 3, 5, 1, 2, 4 }; // return 5
    int[] array5 = {};
    System.out.println(findOccuring(array4));
  }

  public static Integer findOccuring(int[] input) {
    HashSet<Integer> set = new HashSet<Integer>();
    for (int i = 0; i < input.length; i++) {
      if (set.isEmpty()) {
        set.add(input[i]);
      } else {
        if (set.contains(input[i])) {
          return input[i];
        } else {
          set.add(input[i]);
        }
      }
    }
    return null;
  }
}

// Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
