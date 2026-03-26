function twoSum(nums, target) {
  const seen = new Map();

  for (let index = 0; index < nums.length; index += 1) {
    const num = nums[index];
    const needed = target - num;

    if (seen.has(needed)) {
      return [seen.get(needed), index];
    }

    seen.set(num, index);
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
