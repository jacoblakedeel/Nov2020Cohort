// Given an array nums. We define a running sum of an 
// array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.
// Example 1
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2
// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].



// const runningSum = (arr) =>{
//     let result = [];
//     let sum = 0;

//     for(i=0; i<arr.length; i++){
//         sum += arr[i];
//         result.push(sum)
//     }
//     return(result)
// }



// var nums = [1, 2, 3, 4];

// console.log(runningSum(nums));






// Write a function findLongestSubString that accepts a string and returns
// the length of longest sub string with unique characters
// findLongestSubString('thisishowwedoit')); //6 (wedoit)
// findLongestSubString('supercalifragilisticexpialidocious')); //10 (supercalif)



// const findLongestSubString = (s) => {
//     let set = new Set();

//     let left = 0;
//     let right = 0;
//     let maxLength = 0;

//     while(right<s.length){
//         if(!set.has(s[right]))
//         {
//             set.add(s[right]);
//             maxLength = Math.max(maxLength, set.size);
//             right++;
//         }
//         else
//         {
//             set.delete(s[left]);
//             left++;
//         }
//     }

//     return maxLength;
// }

// console.log(findLongestSubString('supercalifragilisticexpealidocious'));