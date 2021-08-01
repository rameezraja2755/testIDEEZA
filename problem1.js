var lengthOfLongestSubstring = function (fullString) {
  let hashTable = {};
  let longestSubstringLength = 0;
  let currentLongestSubstringLength = 0;
  let length = fullString.length;
  for (let i = 0; i < length; i++) {
    if (hashTable[fullString[i]]) {
      currentLongestSubstringLength = 1;
      hashTable = {}
    } else {
      currentLongestSubstringLength++;
    }
    hashTable[fullString[i]] = i + 1;
    longestSubstringLength = Math.max(longestSubstringLength, currentLongestSubstringLength);
  }
  return longestSubstringLength;
};

console.log(lengthOfLongestSubstring("abcabcwfgwbb"));
