from typing import List


def two_sum(nums: List[int], target: int) -> List[int]:
    seen: dict[int, int] = {}

    for index, num in enumerate(nums):
        needed = target - num
        if needed in seen:
            return [seen[needed], index]
        seen[num] = index

    return []


if __name__ == "__main__":
    print(two_sum([2, 7, 11, 15], 9))
