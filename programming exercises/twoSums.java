class Main {
  public static void main(String[] args) {
    int [] array = {2, 7, 11, 15};
    twoSum(array, 9);
  }

  public static int[] twoSum(int[] nums, int target) {
        
        // sort array, just in case we get an array that is not sorted
        // first for loop start index 0
        // sedonc for loop starts index 1
        // check to see if sum or index 0 and index 1 === target
        // return indidces if so
        
        // what if there is empty array or only array.length of 1?
        // what about negative numbers?
        
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j ++) {
                int s = nums[i] + nums[j];
                if (s == target) {
                    return new int[] {i, j};
                }
            }
        }
        return new int[] {};
    }
}