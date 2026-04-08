class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let localMax = 0;
        let max = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 1) localMax++;
            else  localMax = 0;
            max = Math.max(max, localMax);
        }

        return max;
    }
}
