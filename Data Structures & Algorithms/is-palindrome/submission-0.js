class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0,
            r = s.length - 1;
            
        const alphaNum = new Set("abcdefghijklmnopqrstuvwxyz0123456789");
        s = s.toLowerCase();

        while (l < r) {
            while (l < r && !alphaNum.has(s[l])) {
                l++;
            }
            while (r > l && !alphaNum.has(s[r])) {
                r--;
            }

            if (s[l] !== s[r]) return false;

            l++;
            r--;
        }

        return true;
    }
}
