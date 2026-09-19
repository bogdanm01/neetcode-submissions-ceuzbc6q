class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        map = {}

        for i in range(len(nums)):
            map[nums[i]] = i
        
        for i in range(len(nums)):
            needed_element = target - nums[i]
            if needed_element in map and i != map[needed_element]:
                return [i, map[needed_element]]

        return []
