var num = [1,2,3,4,5,6,7,8,9,10]

//Print odd numbers in an array
var oddNumbers = function(){
    for(let i in num){
        if((num[i]%2) !== 0){
            console.log(num[i]);
        }
    }
}
console.log(oddNumbers())


//Convert all the strings to title caps in a string array
var titleCaps = function (str) {
    for (var i = 0; i < str.length; i++) {
        var word = str[i].toLowerCase()
      str[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
    return str;
  }
  console.log(titleCaps(["vamSi","heLlo","worlD"]));

//Sum of all numbers in an array
let op = function () {
    return num.reduce((total, item) => {
        return total = total + item;
    }, 0)
}
console.log(op());


//Return all the palindromes in an array
let palindrome = function(arr){
    let op=[]
    for(let i=0;i <arr.length;i++){
        var reverseString = arr[i].split('').reverse().join('');
        if(arr[i] == reverseString){
            op.push(arr[i]);
        }
    }
    return op;
}
console.log(palindrome(["racecar","level","guvi","vamsi"]));


//Return median of two sorted arrays of same size
let arr1=[4,7,2,9,3];
let arr2=[24,56,13,10,89];
arr1.sort((a,b)=> a-b)
arr2.sort((a,b)=> a-b)
var median = function(arr){
    arr.sort((a,b) => a-b);
    return arr[Math.floor(arr.length/2)];
}
console.log("median of first array "+median(arr1)+" and "+"median of 2nd array "+median(arr2))


//Remove duplicates from an array

let chars = [1,2,2,4,1,3,2];

let uniqueChars = [];
chars.forEach((c) => {
    if (!uniqueChars.includes(c)) {
        uniqueChars.push(c);
    }
});

console.log(uniqueChars);


//Rotate an array by k times and return the rotated array
var rotate = function(k){
    var slicedpart= num.slice(0,k);
    num.splice(0,k);
    num.push(...slicedpart);
    return num;
}
console.log(rotate(4));