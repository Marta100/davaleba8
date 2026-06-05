//ArrayTasks
//1)let arr = [1, [2, 3, [4, 5]], 5, [2, [3, 6]]] დაალაგე ზრდადობით და ამოიღე უნიკალურები გამოიყენე ForLoop
//let arr = [1, [2, 3, [4, 5]], 5, [2, [3, 6]]];
//function flatten(arr, result = []) {
  //for (let i = 0; i < arr.length; i++) {
    //if (Array.isArray(arr[i])) flatten(arr[i], result);
    //else result.push(arr[i]);
  //}
  //return result;
//}
//let flat = flatten(arr);
//let unique = [];
//for (let i = 0; i < flat.length; i++) {
  //let found = false;
  //for (let j = 0; j < unique.length; j++) {
   // if (flat[i] === unique[j]) { found = true; break; }
  //}
 // if (!found) unique.push(flat[i]);
//}
//for (let i = 0; i < unique.length; i++) {
  //for (let j = 0; j < unique.length - i - 1; j++) {
    //if (unique[j] > unique[j + 1]) {
     // [unique[j], unique[j + 1]] = [unique[j + 1], unique[j]];
    //}
 // }
//}
//console.log(unique);

//2)იპოვე ყველაზე მაღალი rating-ის მქონე პროდუქტი,
//  მაგრამ ისეთი, რომლის ფასიც < 1000.
//let products = [
  //{ name:"Phone", price:1200, rating:4.5 },
  //{ name:"Laptop", price:2500, rating:4.8 },
  //{ name:"Book", price:30, rating:4.9 },
  //{ name:"TV", price:800, rating:4.0 }
//]
//let bestProduct = null;
//for (let i = 0; i < products.length; i++) {
  //if (products[i].price < 1000) {
    //if (bestProduct === null || products[i].rating > bestProduct.rating) {    
     // bestProduct = products[i];
    //} 
  //}
//}
//console.log(bestProduct);

//3)let sentence = "dog cat dog bird cat dog fish bird"
//რედიუსის დახმარებით დათვალე რომელი რამდენჯერ მეორდება და for ლუპის დახმარებით იპოვე მეტჯერგამეორებული
//let sentence = "dog cat dog bird cat dog fish bird";
//let words = sentence.split(" ");
//let count = {};
//for (let i = 0; i < words.length; i++) {
  //let word = words[i];
  //count[word] = count[word] ? count[word] + 1 : 1;
//}
//let mostFrequent = null;
//for (let word in count) {
  //if (mostFrequent === null || count[word] > count[mostFrequent]) {
   // mostFrequent = word;
  //}
//}
//console.log("Most frequent:", mostFrequent);

//ForLoop tasks
//1)დაწერე ფუნქცია for loop-ის გამოყენებით, რომელიც დაითვლის რამდენჯერ გვხვდება კონკრეტული ასო მოცემულ სტრინგში
//function countChar(str, char) {
  //let count = 0;
  //for (let i = 0; i < str.length; i++) {
    //if (str[i] === char) count++;
 // }
  //return count;
//}
//console.log(countChar("hello world", "l")); 

//2) დაწერე ფუნქცია, რომელიც შეამოწმებს არის თუ არა სტრინგი პალინდრომი
//function isPalindrome(str) {
  //str = str.replace(/\s/g, "").toLowerCase();
  //for (let i = 0; i < str.length / 2; i++) {
   // if (str[i] !== str[str.length - 1 - i]) return false;
  //}
 // return true;
//}
//console.log(isPalindrome("ana")); 
//console.log(isPalindrome("abba")); 
//console.log(isPalindrome("hello")); 

//3)შექმენი ფუნქცია, რომელიც მიიღებს ორ რიცხვების მასივს, გააერთიანებს მათ, წაშლის დუბლიკატებს და დაითვლის ჯამს
//function mergeSumUnique(arr1, arr2) {
  //let merged = [];
  //for (let i = 0; i < arr1.length; i++) merged.push(arr1[i]);
  //for (let i = 0; i < arr2.length; i++) merged.push(arr2[i]);
  
  //let unique = [];
  //for (let i = 0; i < merged.length; i++) {
   // let found = false;
   // for (let j = 0; j < unique.length; j++) {
     // if (merged[i] === unique[j]) { found = true; break; }
   // }
    //if (!found) unique.push(merged[i]);
  //}
  
  //let sum = 0;
  //for (let i = 0; i < unique.length; i++) sum += unique[i];
  //return sum;
//}
//console.log(mergeSumUnique([1, 2, 3], [2, 3, 4])); 

//4)შექმენი ფუნქცია ფაქტორიალის დასათვლელად
//function factorial(n) {
  //let result = 1;
  //for (let i = 2; i <= n; i++) result *= i;
  //return result;
//}
//console.log(factorial(5)); 

//5)Two Sum - მოძებნე მასივში ის წყვილები, რომელთა ჯამიც უდრის მოცემულ რიცხვს
//function twoSum(arr, target) {
  //for (let i = 0; i < arr.length; i++) {
   // for (let j = i + 1; j < arr.length; j++) {
      //if (arr[i] + arr[j] === target) {
       // return [arr[i], arr[j]];
     //}
   // }
  //}
 // return null;
//}
//console.log(twoSum([1, 2, 3, 4, 5, 6, -7, -8], -15)); 




