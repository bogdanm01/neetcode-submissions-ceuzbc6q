class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let max = 0;
        let localMax = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 1) {
                localMax++;
                if (localMax > max) 
                    max = localMax;
            } else localMax = 0;
        }

        return max; 
    }
}
