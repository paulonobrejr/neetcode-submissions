class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const hashS = new Set();
        const hashT = new Set();

        for (let x = 0; x < s.length; x++) {
            hashS[s[x]] = (hashS[s[x]] || 0) + 1;
            hashT[t[x]] = (hashT[t[x]] || 0) + 1;
        }

        for (const key in hashS) {
            if (hashS[key] !== hashT[key]) {
                return false;
            }
        }
        return true;
    }
}
