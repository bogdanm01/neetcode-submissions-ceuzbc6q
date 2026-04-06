class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let res = 0;
        let count = 0;

        for (const num of nums) {
            if (num === 1) count++;
            else count = 0;
            res = Math.max(res, count);
        }

        return res;
    }
}
