class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let max = 0;
        let localMax = 0;

        for (const num of nums) {
            if (num === 1) {
                localMax++;
                max = Math.max(localMax, max)
            } else {
                localMax = 0;
            }
        }

        return max;
    }
}
