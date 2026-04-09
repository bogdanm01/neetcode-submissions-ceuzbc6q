class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans = [];
        let n = nums.length * 2;

        for (let i = 0; i < n; i++) {
            ans[i] = nums[i % nums.length]
        }

        return ans;
    }
}
