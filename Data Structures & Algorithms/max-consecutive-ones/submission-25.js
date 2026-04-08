class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let localMax = 0;
        let res = 0;

        for (const num of nums) {
            if (num === 1) localMax++;
            else localMax = 0;
            res = Math.max(localMax, res);
        }

        return res;
    }
}
