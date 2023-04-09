// DSA PRACTICE

// 1-) suppose we want to write  a function that calculates the sum of all numbers from 1 up to (and including) some number of n

// first solution

// const addUpTo=(n)=>{
//     let total=0
//     for (let i = 0; i<= n; i++) {
//         total+= i

//     }
//     return total
// }
// let t1=performance.now()
// console.log(addUpTo(8))
// let t2=performance.now()
// console.log(`Time Elapsed: ${(t2-t1)/1000} seconds`)

// second method with big o notation less time complexcity is better than first

// const addUpToSecondMethod=(n)=>{
// return n*(n+1)/2
// }
// let t1=performance.now()
// console.log(addUpToSecondMethod(8))
// let t2=performance.now()
// console.log(`Time Elapsed: ${(t2-t1)/1000} seconds`)

// 2-) printing all pairs of data

// const prinAllData=(n)=>{
//     for (let i = 0; i< n;i++) {
//        for (let j = 0; j <n ; j++) {
//         console.log(i,j)
//        }

//     }
// }
// prinAllData(5)

// 3-)  big o(1) constant example
// const logAtLeast5=(n)=>{
//     for (let i = 1; i <= Math.max(5,n); i++) {
//        console.log(i)
//     }
// }

// logAtLeast5(3)
// const logAtMost5=(n)=>{
//     for (let i = 1; i <= Math.min(5,n); i++) {
//        console.log(i)
//     }
// }
// logAtMost5(6)

// function logUpTo(n) {
//     for (var i = 1; i <= n; i++) {
//         console.log(i);
//     }
// }
// let t1=performance.now()
// console.log(logUpTo(5000))
// let t2=performance.now()
// console.log(`Time Elapsed: ${(t2-t1)/1000} seconds`)

// const reverseArray=(array)=>{
//     let newArr=[]
//     for (let i = array.length-1; i >=0; i--) {
//         newArr.push(array[i])
//     }
//     return newArr
// }
// let t1=performance.now()
// console.log(reverseArray([1,2,3,4,5,6,7,8,9]))
// let t2=performance.now()
// console.log(`Time Elapsed: ${(t2-t1)/1000} seconds`)

// const multipltAll=(arr1,arr2)=>{
//     let total=0
// for (const i of arr1) {
// for (const j of arr2) {
//   total+=i*j
// }
// }
// return total
// }
// let t1=performance.now()
// console.log(multipltAll([1,2],[5,6]))
// let t2=performance.now()
// console.log(`Time Elapsed: ${(t2-t1)/1000} seconds`)

// big o (log n) example
// const logTimes=(array)=>{
//     let numOfLoop=0
//     for (let i = 1; i < array.length; i*=2) {
//        numOfLoop++
//     }
//     return numOfLoop
// }
// let t1=performance.now()
// console.log(logTimes([1,2,3,4]))
// let t2=performance.now()
// console.log(`Time Elapsed: ${(t2-t1)/1000} seconds`)

// const factorial=(n)=>{
//     let num=1
// for (let i = 1; i < n; i++) {
//    num=n*factorial(n-1)
// }
// return num
// }
// let t1=performance.now()
// console.log(factorial(6))
// console.log(factorial(11))
// console.log(factorial(13))
// let t2=performance.now()
// console.log(`Time Elapsed: ${(t2-t1)/1000} seconds`)

// problem solving questions

// question-) write a function which takes in a string and return counts of each character in the string

// const charCpunt = (array) => {
//   // make an object to return end
//   let result = {};
//   // loop over string for each character
//   for (let i = 0; i < array.length; i++) {
//       let char = array[i];
//     // if char is a  number/letter And is a key in object ,add one to count
//     if (result[char] > 0) {
//       result[char]++;
//     }
//     // if char is a  number/letter And not in object ,add it to  object and set the value of 1
//     else {
//       result[char] = 1;
//     }
//   }
//   return result;
// };
// console.log(charCpunt("hello friends"));

// second method

// const charCodeCount=(array)=>{
//     let result={}
//     for (let char of array) {
//          char=char.toLowerCase()

//         if(/[a-z0-9]/.test(char)){
//             result[char]= ++result[char] ||1
//         }
//     }
//     return result
// }

// console.log(charCodeCount("hello friends"))

// function mao(string){
//     if(string.length<=1){
//         return string
//     }

//     let firstChar=string.charAt(0)
//     let lastChar=string.charAt(5)

//     return lastChar+firstChar
// }

// console.log(mao("ashish"))

// const sum=(array)=>{
//     let total=0;
//     for (let i = 0; i <= array; i++) {
//         total+=i
//     }
//     return total
// }

// console.log(sum(1000000000))

// const sum2=(n)=>{
//     let total=0;
//    total+= n*(n+1)/2
//    return total
// }

// console.log(sum2(1000000000))

// const printNumber=(n)=>{
//     for (let i = 0; i <=n; i++) {
//     console.log(i)
//     }

//     for (let j = n-1; j>0; j--) {
//     console.log(j)
//     }
// }

// console.log(printNumber(10))

// const printNumber2=(n)=>{
//     for (let i = 0; i<n; i++) {
//        for (let j = 0; j<n; j++) {
//         console.log(i,j)
//        }

//     }
// }

// console.log(printNumber2(10))

// function multiplyAll(arr) {
//     let product = 1;
//     // Only change code below this line
//   for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//    product*=arr[i][j]
//     }
//   }
//     // Only change code above this line
//     console.log(product) ;
//   }

//   multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

// write a funcyion to return a each character of a String

// const value="Hello ashish"
// const data=value.toLowerCase()

// const eachCharacter=(data)=>{
//     let result={}

//     for (let i = 0; i < data.length; i++) {
//        const char= data[i];
//        if(/[a-z0-9]/.test(char))
//         if(result[char]>0){
//             result[char]++
//         }else{
//             result[char]=1
//         }
//     }
//     return result
// }
// console.log(eachCharacter(data))

// let arr1=[1,2,3,4]
// let arr2=[1,4,9,16]
// const sqaureOfArray=(arr1,arr2)=>{
//     if(arr1.length !== arr2.length){
//         return false
//     }

//    for (let i = 0; i < arr1.length; i++) {
//     let correcti=arr2.iOf(arr1[i]**2)

//     if(correctIndex===-1){
//         return false
//     }
//     arr2.splice(correctIndex,1)
//    }
//    return true
// }

// console.log(sqaureOfArray(arr1,arr2))

// let arr1=[1,2,3,4]
// let arr2=[1,4,9,16]

// const sqaureOfArray=(arr1,arr2)=>{
//  if(arr1.length !== arr2.length){
//     return false
//  }

//  for (let i = 0; i < arr1.length; i++) {
//     let correctIndex=arr2.indexOf(arr1[i]**2)
//   console.log(correctIndex)
//     if(correctIndex===-1){
//         return false
//     }
//     arr2.splice(correctIndex,1)
//  }
// return true
// }
// console.log(sqaureOfArray(arr1,arr2))

// march 2019 19 tuesday

// const value1 = "ashish";
// const value2 = "hsihsa";

// const validAnagram = (value1, value2) => {
//   if (value1.length !== value2.length) {
//     return false;
//   }
//   let result = {};

//   for (let i = 0; i < value1.length; i++) {
//     let letter = value1[i];
//     // if letter exists increment otherwise set 1
//     result[letter] ? (result[letter] += 1) : (result[letter] = 1);
//   }

//   for (let j = 0; j < value2.length; j++) {
//     let letter = value2[j];
//     if (!result[letter]) {
//       return false;
//     } else {
//       result[letter] -= 1;
//     }
//   }
//   return true;
// };

// console.log(validAnagram(value1, value2));

// march 2019  20wednesday 21 thursday
// const array=[3,-3,0,1,2,5,6]

// const pairOfArray=(array)=>{

// for (let i = 0; i < array.length; i++) {
//  for (let j = 0; j < array.length; j++) {
//    if(array[i]+array[j]===0){
//     return [array[i],array[j]]
//    }
//  }
// }
// }

// console.log(pairOfArray(array))

// const sumZero=(array)=>{
//     let left=0;
//     let right=array.length-1

//    while(left<right){
//     let sum=array[left]+array[right]
//     if(sum===0){
//         return [array[left],array[right]]
//     }else if(sum>0){
//    right--
//     }else{
//         left++
//     }
//    }
// }

// console.log(sumZero(array))

// const countUniqueValues=(array)=>{
//     let i=0
//     for (let j = 1; j < array.length; j++) {
//        if(array[i]!==array[j]){
//         i++
//         array[i]=array[j]
//         // console.log(array[i],array[j])
//        }
//        console.log(i,j)
//     }

// }

// console.log(countUniqueValues([1,1,2,,3,4,5]))

// function countDuplicates(arr) {
//     let counts = [];
//     for (let i = 0; i < arr.length; i++) {
//       let element = arr[i];
//       // console.log(counts[element]=element )
//       counts[element]=element ;
//       console.log(counts)
//     }
//    console.log(counts) ;
//   }
//   const arr = ["1", "5", "9", "14", "5", "22", "48", "25", "22", "20", "9", "13"];
//   // const unique=Array.from(new Set(arr))
//   // console.log(unique)
//   countDuplicates(arr);

// array sorting
// let array=[2,8,9,5,7,12,6,1,3,10,4,11]

// start DSA

// ------------Qusetion 1---------------------------

// const sortArray=()=>{
//   for (let i = 0; i < array.length; i++) {
//    for (let j = 0; j < array.length; j++) {
//      if(array[j]>array[j+1]){
//        let temp=array[j] //isme first position store kiya hai
//        array[j]=array[j+1] //maii isme first position ki jagah second position change kr raha hu
//        array[j+1]=temp  // fhir isme second position pahle ayega fhir first position ayega
//       }
//     }
//     console.log(array)
//   }
// }
// sortArray()

// ------------Qusetion 2---------------------------

// sum of numbers

// const sum = (n) => {
//   let total = 0;
//   total = (n * (n + 1)) / 2;
//   console.log(total);
// };
// let t1=performance.now()
// sum(10);
// let t2=performance.now()
// console.log(`Time Elapsed: ${(t2-t1)/1000} second`)

// const sum = (n) => {
//   let total = 0;
// for (let i = 0; i <= n; i++) {
//     total += i
//   }
//   console.log(total);
// };
// let t1=performance.now()
// sum(10);
// let t2=performance.now()
// console.log(`Time Elapsed: ${(t2-t1)/1000} second`)

// --------------Question3-------------------------

// write a function which takes in a string and return counts of each character in a string

// const count=(name)=>{
// let result={}

// for (let i = 0; i < name.length; i++) {
//  let char=name[i]
// if(/[a-z0-9]/.test(char)){
//  if(result[char]>0){
//     result[char]++
//  }else{
//     result[char]=1
//  }
// }
// }
// console.log(result)
// }
// let name="Hello everone"
// count(name)

// --------------Question6------------------

// reversing a name by for loop method
// let a="ashish"

// const reverse=()=>{
//     let b=""
// for (let i = a.length-1; i >=0; i--) {
//    b +=a[i]
// }
// console.log(b)
// }
// reverse(a)

// --------------Question7------------------

// reversing a number by for loop method
// let a=[1,2,3,4,5,6,7]

// const reverse=()=>{
//     let b=[]
// for (let i = a.length-1; i >=0; i--) {
//    b .push(a[i])
// }
// console.log(b)
// }
// reverse(a)

// --------------Question9------------------
// let a=10
// const reverse=()=>{
//     for (let i = 0; i<a; i++) {
//         console.log(i)
//     }
// }
// reverse()

// ---------------Question10----------------

// finding factorial using of for loop

// const factorial=(n)=>{
//     let num=1
// for (let i = 1; i < n; i++) {
//    num=n*factorial(n-1)
// }
// return num
// }

// let t1=performance.now()
// console.log(factorial(5))
// let t2=performance.now()
// console.log(`Time Elapsed: ${(t2-t1)/1000} seconds`)

// -------------------Question11--------------
// write a function called same which accept s two Arrays.The functionshould return true if everyvalue in the array has its corresponding value squared in the second array.the frequency of values must be the same

// const same=(arr1,arr2)=>{
//     if(arr1.length !==arr2.length){
//         return false
//     }
//     for (let i = 0; i < arr1.length; i++) {
//      let value=arr2.indexOf(arr1[i]**2)
//      console.log(value)
//      if(value===-1){
//         return false
//      }
//         arr2.splice(value,1)

//     }
//     return true
// }

// console.log(same([1,2,3],[1,4,9]))

// ------------------Question12---------------------

// sum of zeroes in an array

// let array=[-3,-2.-1,0,1,2,3,4]

// const sumOfZero=()=>{
//     for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//     if(array[i]+array[j]==0){
//         console.log(array[i],array[j])
//     }

//     }

//     }
// }
// sumOfZero()

// ------------------Question13-----------------------

// implement a function called CountUniquesValues,which accept as a sorted array,and counts the unique value s in the array.There can be a negative number in the array,but it will always be sorted

// const uniqueValue=(array)=>{
//     let count=[]
//     let temp
// for (let i = 0; i < array.length; i++) {
//   if(array[i]!==temp){
//     count.push(array[i])
//     temp=array[i]
//   }

//   console.log(count)
// }
// }

// uniqueValue([1,2,3,4,4,4,7,7,12,12,13])

// -----------------------------Question14----------------------

// maximum n sum of an array of an integer

// const sum=(array,n)=>{
// let max=[]
// let total=0
// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//        if(array[j]<array[j+1]){
//         let temp=array[j]
//         array[j]=array[j+1]
//         array[j+1]=temp
//        }
//     }
// max=array
// }
// for (let i = 0; i < n; i++) {
//      total += max[i];
//      console.log(max[i])
// }
// console.log(total)
// }
// sum([1,2,5,2,8,1,5],4)

// --------------------------Question15---------------------------

// write a function called maxsubarraysum which accept an array of integer and a number called n.The function should calculate the maximumm sum of n consecutive elements in the array

// --------------------------Question15----------------------

// Given a sorted array of integers.Write a function called search,that accept a value and return the index where the value passed to the function is located,if the is not found,return -1

// const search=(array,n)=>{
// for (let i = 0; i < array.length; i++) {
//     if(array[i]===n){
//        return i
//     }
// }
// return -1
// }
// console.log(search([1,2,3,4,5,6],2))

// --------------------------Question16----------------------------

// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true

// function areThereDuplicates(...array) {
//   let temp = {};
//   for (let i = 0; i < array.length; i++) {
//     let a = array[i];
//     //  temp[a] = (temp[a] || 0) + 1;
//     if (temp[a] > 0) {
//       temp[a]++;
//     } else {
//       temp[a] = 1;
//     }
//     if (temp[a] > 1) {
//       return true;
//     }
//   }

//   return false;
// }
// console.log(areThereDuplicates(1, 2, 2)) //true

// -----------------------Question17----------------------------------

// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// function sameFrequency(num1, num2) {
//   num1 = num1.toString();
//   num2 = num2.toString();
//   let frequency1 = {};
//   let frequency2 = {};
//   if (num1.length !== num2.length) {
//     console.log(false);
//   }
//   for (let i = 0; i < num1.length; i++) {
//     let a = num1[i];
//     if (frequency1[a] > 0) {
//       frequency1[a]++;
//     } else {
//       frequency1[a] = 1;
//     }
//   }
//   for (let i = 0; i < num2.length; i++) {
//     let b = num2[i];
//     if (frequency2[b] > 0) {
//       frequency2[b]++;
//     } else {
//       frequency2[b] = 1;
//     }
//   }
//   console.log(frequency1);
//   console.log(frequency2);

//   for (let key in frequency1) {
//     if (frequency1[key] !== frequency2[key]) {
//       return false;
//     }
//   }
//   return true
// }

// console.log(sameFrequency(34,14)); // true

// ------------------------------Question18---------------------------

// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// const averagePair=(array,n)=>{
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//             console.log(array[i]+array[j])
//             if((array[i]+array[j])/2===n)
//             return true
//         }

//     }
//     return false
// }
// console.log(averagePair([1,2,3],2.5)) // true
// console.log(averagePair([1,3,3,5,6,7,10,12,19],8) )// true
// console.log(averagePair([-1,0,3,4,5,6], 4.1) )// false
// averagePair([],4) // false

// --------------------------------Question19----------------------------

// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// const isSubsequence=(arr1,arr2)=>{
// for (let i = 0; i < arr1.length; i++) {
//     const element = arr2.indexOf(arr1[i]);
//     if(element===-1){
//         return false
//     }
// }
// return true
// }

// console.log(isSubsequence('hello', 'hello world')); // true
// console.log(isSubsequence('sing', 'sting')); // true
// console.log(isSubsequence('abc', 'abracadabra')); // true
// console.log(isSubsequence('abc', 'acb')); // false (order matters)

// ---------------------first Method---------------------------

// finding factorial

// const factorial = (num) => {
//   let total = 1;
//   for (let i = 1; i <= num; i++) {
//     total *= i;
//   }
//   return total;
// };
// console.log(factorial(5));

// -------------------------second method------------------------

// const factorial=(num)=>{
//     if(num===1) return 1
// return num * factorial(num-1)
// }
// console.log(factorial(5))

// ---------------------------Qusetion20----------------------------------------

// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

// const maxSubarraySum = (array, n) => {
//   if (array.length < n || array.length === 0) {
//     return -1;
//   }

//   let sum = 0;
//   for (let i = 0; i < n; i++) {
//     sum =sum+ array[i];
//   }

//   let maxSum = sum;
//   let start = 0;

// //   n ka mtlb hai n ki value se start hoga
//   for (let j = n; j < array.length; j++) {
//     sum = sum + array[j] - array[start++];
//     if (sum > maxSum) {
//       maxSum = sum;
//     }
//   }
//   return maxSum
// };

// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));

// -------------------------Question21----------------------------------

// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

// const findLongestSubstring = (array) => {
//   if (!array) {
//     return 0;
//   }

//   let longest = 0;
//   let start = 0;
//   let far = {};

//   for (let end = 0; end < array.length; end++) {
//     const element = array[end];
//     if (far[element]) {
//       start = Math.max(start, far[element]);
//     }
//     longest = Math.max(longest, end - start + 1);
//     far[element] = end + 1;
//   }
//   return longest;
// };
// console.log(findLongestSubstring("thisishowwedoit"));

// ------------------------------Practice--------------------------------
// const reverse = (array) => {
//   let store = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     store.push(array[i]);
//   }
//   let a = store.join("");
//   console.log(a);
// };
// reverse("ashish");

// const reverse = (array) => {
//   let store = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     store.push(array[i]);
//   }
//   // let a = store.join("");
//   console.log(store);
// };
// reverse([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// const sort = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (array[j] > array[j + 1]) {
//         let temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }
//   console.log(array);
// };

// sort([8, 7, 6, 4, 2, 3, 4, 5, 1, 0]);

// const dublicate = (array) => {
//   let count = {};

//   for (let i = 0; i < array.length; i++) {
//     let element = array[i];
//     if (count[element] > 0) {
//       count[element]++;
//     } else {
//       count[element] = 1;
//     }

//     if (count[element] > 1) {
//       count[element]--;
//     }
//   }
//   const propertyNames = Object.keys(count);

//   console.log(propertyNames);
// };
// dublicate(["a", "b", "c", "b", "d", "a", "e", "f", "c", "g", "h", "a"]);

// const dublicate = (array) => {
//   let count = {};

//   for (let i = 0; i < array.length; i++) {
//     let element = array[i];
//     if (count[element] > 0) {
//       count[element]++;
//     } else {
//       count[element] = 1;
//     }

//     if (count[element] > 1) {
//       count[element]--;
//     }
//   }
//   const propertyNames = Object.keys(count);
//   let a = propertyNames.join("");
//   console.log(a);
// };
// dublicate("ashishhhh");

const removeDublicate = (array) => {
  let count = [];

  for (let i = 0; i < array.length; i++) {
    let exists = false;
    for (let j = 0; j < count.length; j++) {
      if (JSON.stringify(count[j]) === JSON.stringify(array[i])) {
        exists = true;
      }
    }
    if (!exists) {
      count.push(array[i]);
    }
  }
  console.log(count);
};

removeDublicate([
  {
    first: "ashish",
    last: "verma",
  },

  {
    first: "manish",
    last: "kumar",
  },

  {
    first: "ashish",
    last: "verma",
  },
  {
    first: "aman",
    last: "singh",
  },
]);

// const maxSubarraySum = (array, n) => {
//   if (!array.length || array.length < n) {
//     return -1;
//   }
//   let sum = 0;
//   for (let i = 0; i < n; i++) {
//     sum += array[i];
//   }

//   let maxSum = sum;

//   let start = 0;

//   for (let j = n; j < array.length; j++) {
//     sum = sum + array[j] - array[start++];
//     if (sum > maxSum) {
//       maxSum = sum;
//     }
//   }
//   return maxSum;
// };

// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));

// const longestSubstring = (array) => {
//   let count = {};
//   let start = 0;
//   let longest = 0;

//   for (let end = 0; end < array.length; end++) {
//     const char = array[end];
//     if (count[char]) {
//       start = Math.max(start, count[char]);
//     }
//     longest = Math.max(longest, end - start + 1);
//     count[char] = end + 1;
//   }
//   return longest;
// };

// console.log(longestSubstring("thisishowwedoit"));

// const longestSubstring = (array) => {
//   let longest = 0;
//   let start = 0;
//   let count = {};

//   for (let end = 0; end < array.length; end++) {
//     const element = array[end];

//     if (count[element]) {
//       start = Math.max(start, count[element]);
//     }
//     longest = Math.max(longest, end - start + 1);
//     count[element] = end + 1;
//   }
//   return longest;
// };
// console.log(longestSubstring("thisishowwedoit"));

// ------------------------------Practice end--------------------------------

// ------------------------------Question22-------------------------------------
// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

// function isPalindrome(str) {
//   let count = [];
//   for (let i = 0; i <= str.length; i++) {
//     count.push(str[i]);
//   }
//   let a = count.join("");
//   console.log(a);

//   let count1 = [];
//   for (let i = str.length - 1; i >= 0; i--) {
//     count1.push(str[i]);
//   }
//   let b = count1.join("");
//   console.log(b);
//   if (a === b) {
//     return true;
//   }
//   return false;
// }

// console.log(isPalindrome("awesome")); // false
// console.log(isPalindrome("foobar")); // false
// console.log(isPalindrome("tacocat")); // true
// console.log(isPalindrome("amanaplanacanalpanama")); // true
// console.log(isPalindrome("amanaplanacanalpandemonium")); // false

// ---------------------------------Question-23--------------------------------------
// Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.

// function someRecursive(array) {
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] % 2 !== 0) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(someRecursive([1, 2, 3, 4]));

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

// -------------------------------Question-24-------------------------------

// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

// const flatten = (array) => {
//   let totalArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (Array.isArray(array[i])) {
//       totalArray = totalArray.concat(flatten(array[i]));
//     } else {
//       totalArray.push(array[i]);
//     }
//   }
//   return totalArray;
// };

// console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
// // flatten([[1],[2],[3]]) // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3

// ----------------------------------Question25-----------------------------------------
// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

// const capitalizeFirst = (array) => {
//   let res = [];
//   for (let i = 0; i < array.length; i++) {
//     let element = array[i].charAt(0).toUpperCase();
//     let rest = array[i].slice(1);
//     if (array[i]) {
//       res.push(`${element}${rest}`);
//     }
//   }
//   console.log(`${res}`);
// };

// console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']

// -------------------------------question-26-----------------------------
// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

// function capitalizedWords(array) {
//   let res = [];
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i].toUpperCase();
//     res.push(element);
//   }
//   return res;
// }

// let words = ["i", "am", "learning", "recursion"];
// console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']

// ----------------------------question27--------------------------------------

// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

// const collectStrings = () => {
//   for (let key in obj) {
//   }
// };

// const obj = {
//   stuff: "foo",
//   data: {
//     val: {
//       thing: {
//         info: "bar",
//         moreInfo: {
//           evenMoreInfo: {
//             weMadeIt: "baz",
//           },
//         },
//       },
//     },
//   },
// };

// collectStrings(obj); // ["foo", "bar", "baz"])

// function linearSearch(array, n) {
//   // add whatever parameters you deem necessary - good luck!
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] === n) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(linearSearch([10, 15, 20, 25, 30], 15));
