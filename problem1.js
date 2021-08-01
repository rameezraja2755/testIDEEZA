const lengthOfLongestSubstring = function (fullString) {
  let hashTable = {};
  let longestSubstringLength = 0;
  let currentLongestSubstringLength = 0;
  let length = fullString.length;
  let endPositionOfLongestSubstring = 0;
  for (let i = 0; i < length; i++) {
    if (hashTable[fullString[i]]) {
      currentLongestSubstringLength = 1;
      hashTable = {}
    } else {
      currentLongestSubstringLength++;
    }
    hashTable[fullString[i]] = i + 1;
    if(longestSubstringLength < currentLongestSubstringLength ){
        longestSubstringLength = currentLongestSubstringLength;
        endPositionOfLongestSubstring = i;
    }
  }

  const subString = fullString.substring(endPositionOfLongestSubstring - longestSubstringLength + 1, endPositionOfLongestSubstring + 1);
  const res = {
    longestSubstringLength: longestSubstringLength,
    subString: subString
  }
  return res;
};

const result = lengthOfLongestSubstring("abcabcwfgwbb");

console.log( "longest sub string", result.subString )
console.log( "length of longest sub string", result.longestSubstringLength )