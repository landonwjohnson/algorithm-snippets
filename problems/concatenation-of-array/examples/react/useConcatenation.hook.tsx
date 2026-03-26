import { useMemo } from "react";

// Custom hook
export function useConcatenation(nums: number[]): number[] {
  // useMemo = React hook that caches the result
  // so we don’t recompute unless nums changes

  return useMemo(() => {
    // This function takes data and duplicates it back-to-back
    // Example: [1,2,3] → [1,2,3,1,2,3]

    // nums: number[] = an array of numbers

    // Create a result array to store the final output
    let result: number[] = [];

    // First pass:
    // Copy all elements from nums into result
    for (let num of nums) {
      result.push(num); // add to end of array
    }

    // Second pass:
    // Copy them again to duplicate the array
    for (let num of nums) {
      result.push(num);
    }

    // Return the duplicated array
    return result;
  }, [nums]); // Only recompute if nums changes
}
