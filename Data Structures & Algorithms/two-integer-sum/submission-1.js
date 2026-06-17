class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for (let x = 0; x < nums.length; x++) {
            let pair = nums.indexOf(target - nums[x]);
            if (pair !== -1 && x !== pair) return [x, pair];
        }
    }
}
