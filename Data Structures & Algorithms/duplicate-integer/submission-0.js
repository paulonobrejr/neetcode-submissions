class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hash = [];
        for (let x = 0; x < nums.length; x++) {
            if (hash.includes(nums[x])) return true;
            hash.push(nums[x]);
        }

        return false;
    }
}
