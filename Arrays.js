// ! All Javascript Arrays Methods
/*
 ! The concat() method is used to join two or more arrays.
 ! This method does not change the existing arrays, but returns a new array, containing the values of the joined arrays.
*/
var car1 = ['bmw','audi','mercedes']
var car2 = ['volvo','nano']
var car3 = ['xylo','sentro','duster']
var car = car1.concat(car2,car3)
//console.log(car); // ? ["bmw", "audi", "mercedes", "volvo", "nano", "xylo", "sentro", "duster"]
/*
 ! JavaScript Array constructor Property
*/
// ! For JavaScript arrays the constructor property returns function Array() { [native code] }
// ! we can use the constructor property to check if a variable is an array.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.constructor); // ? [Function: Array]

/*
 ! JavaScript Array copyWithin() Method
 ! The copyWithin() method copies array elements to another position in the array, overwriting the existing values.
 ! Note: this method overwrites the original array.
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"]; // ? Copy the first two array elements to the last two array elements
//console.log(fruits.copyWithin(2,0)); // ? [ 'Banana', 'Orange', 'Banana', 'Orange' ]
var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
//console.log(fruits.copyWithin(2, 0, 3)); // ? [ 'Banana', 'Orange', 'Banana', 'Orange', 'Apple', 'Papaya' ]

/*
! JavaScript Array entries() Method
! The entries() method returns an Array Iterator object with key/value pairs.
! For each item in the original array, the new iteration object will contain an array with the index as the key, and the item value as the value:
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var f = fruits.entries();
for(x of f){
  //console.log(x); // ? [ 0, 'Banana' ]  [ 1, 'Orange' ] [ 2, 'Apple' ] [ 3, 'Mango' ] 
}

/*
! JavaScript Array every() Method
! The every() method checks if all elements in an array pass a test.
! The every() method executes the function once for each element present in the array:
        ! If it finds an array element where the function returns a false value, every() returns false (and does not check the remaining values)
        ! If no false occur, every() returns true
! Note: every() does not execute the function for array elements without values.
! Note: every() does not change the original array        
*/
var ages = [28, 33, 19, 15];

function checkAdult(age) {
  return age >= 18;
}
//console.log(ages.every(checkAdult)); // ? false
/*
! JavaScript Array fill() Method
! The fill() method fills the specified elements in an array with a static value.
! You can specify the position of where to start and end the filling. If not specified, all elements will be filled.
! Note: this method overwrites the original array.
! fill(value,start,end) end index is exclusive.
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
//console.log(fruits.fill("Kiwi"));  // ? [ 'Kiwi', 'Kiwi', 'Kiwi', 'Kiwi' ]
var fruits = ["Banana", "Orange", "Apple", "Mango"];
//console.log(fruits.fill("Kiwi", 2, 4)); // ? [ 'Banana', 'Orange', 'Kiwi', 'Kiwi' ] 

/*
! JavaScript Array filter() Method
! The filter() method creates an array filled with all array elements that pass a test
! Note: filter() does not execute the function for array elements without values.
! Note: filter() does not change the original array.

*/
var ages = [32, 33, 16, 40];
const filterAdult = age => age >=18;
//console.log(ages.filter(filterAdult)); // ? [ 32, 33, 40 ]

/*
! JavaScript Array find() Method
! The find() method returns the value of the first element in an array that pass a test
! The find() method executes the function once for each element present in the array:
           ! If it finds an array element where the function returns a true value, find() returns the value of that array element (and does not check the remaining values)
           ! Otherwise it returns undefined
! Note: find() does not execute the function for empty arrays.
! Note: find() does not change the original array.    

*/
var ages = [3, 10, 19, 20];
const findAboveAge=age=>age>=18;
//console.log(ages.find(findAboveAge)); // ? 19
const findBelowAge = age => age >=29;
//console.log(ages.find(findBelowAge)); // ? undefined

/*
! JavaScript Array findIndex() Method
! The findIndex() method returns the index of the first element in an array that pass a test
! The findIndex() method executes the function once for each element present in the array:
      ! If it finds an array element where the function returns a true value, findIndex() returns the index of that array element (and does not check the remaining values)
      ! Otherwise it returns -1

*/
var ages = [3, 10, 19, 20];
const findAboveIndexAge=age=>age>=18;
//console.log(ages.findIndex(findAboveAge)); // ? 2
const findBelowIndexAge = age => age >=29;
//console.log(ages.findIndex(findBelowAge)); // ? -1

/*
! JavaScript Array forEach() Method
! The forEach() method calls a function once for each element in an array, in order.
*/
var fruits = ["apple", "orange", "cherry"];
fruits.forEach(fruit => {
  // console.log(fruit);  // ? apple orange cherry
})
/*
! JavaScript Array from() Method
! The Array.from() method returns an Array object from any object with a length property or an iterable object.
*/
var myArr = Array.from("ABCDEFG"); // ? Create an Array from a String
//console.log(myArr); // ? ["A", "B", "C", "D", "E", "F", "G"]
/*
! JavaScript Array includes() Method
! The includes() method determines whether an array contains a specified element.
! This method returns true if the array contains the element, and false if not.
! Note: The includes() method is case sensitive.
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
//console.log(fruits.includes("Mango")); // ? true
//console.log(fruits.includes("Mangoef")); // ? false

/*
! JavaScript Array indexOf() Method
! The indexOf() method searches the array for the specified item, and returns its position.
! The search will start at the specified position, or at the beginning if no start position is specified, and end the search at the end of the array.
! Returns -1 if the item is not found.
! If the item is present more than once, the indexOf method returns the position of the first occurence.
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.indexOf("Apple")); // ? 2
// console.log(fruits.indexOf("Applehhh")); // ? -1
/*
! JavaScript Array isArray() Method
! The isArray() method determines whether an object is an array.
! This function returns true if the object is an array, and false if not.
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a=4;
// console.log(Array.isArray(fruits)); // ? true
// console.log(Array.isArray(a)); // ? false
/*
! JavaScript Array join() Method
! The join() method returns the array as a string.
! The elements will be separated by a specified separator. The default separator is comma (,).
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.join()); // ? Banana,Orange,Apple,Mango
// console.log(fruits.join('-')); // ? Banana-Orange-Apple-Mango

/*
! JavaScript Array keys() Method
! The keys() method returns an Array Iterator object with the keys of an array.
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var fk = fruits.keys();
for(x of fk) {
  // console.log(x); // ? 0 1 2 3
}
/*
! JavaScript Array length Property
! The length property sets or returns the number of elements in an array.
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.length); // ? 4
/*
! JavaScript Array lastIndexOf() Method
! The lastIndexOf() method searches the array for the specified item, and returns its position.
! The search will start at the specified position, or at the end if no start position is specified, and end the search at the beginning of the array.
! Returns -1 if the item is not found.
! If the item to search for is present more than once, the lastIndexOf method returns the position of the last occurence.
*/
var fruits = ["Banana", "Orange", "Apple", "Mango", "Banana", "Orange", "Apple"];
var a = fruits.lastIndexOf("Apple"); 
// console.log(a); // ? 6
/*
! JavaScript Array map() Method
! The map() method creates a new array with the results of calling a function for every array element.
! The map() method calls the provided function once for each element in an array, in order.
! Note: map() does not execute the function for array elements without values.
! Note: this method does not change the original array.
*/
var numbers = [4, 9, 16, 25];
var x = numbers.map(Math.sqrt)
// console.log(x); // ? [ 2, 3, 4, 5 ]
/*
! JavaScript Array pop() Method
! The pop() method removes the last element of an array, and returns that element.
! Note: This method changes the length of an array.
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.pop()); // ? Mango
// console.log(fruits); // ? [ 'Banana', 'Orange', 'Apple' ]

/*
! JavaScript Array prototype Constructor
! The prototype constructor allows you to add new properties and methods to the Array() object.
! Note: Prototype is a global object constructor which is available for all JavaScript objects.
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
Array.prototype.myUcase = function() {
  for (i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
};
// fruits.myUcase();
// console.log(fruits); // ? [ 'BANANA', 'ORANGE', 'APPLE', 'MANGO' ]


/*
! JavaScript Array push() Method
! The push() method adds new items to the end of an array, and returns the new length.
! Note: The new item(s) will be added at the end of the array.
! Note: This method changes the length of the array.
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.push("Kiwi")); // ? 5  "kiwi" will be added and new length 5 will be returned


/*
! JavaScript Array reduce() Method
! The reduce() method reduces the array to a single value.
! The reduce() method executes a provided function for each value of the array (from left-to-right).
! The return value of the function is stored in an accumulator (result/total).
! Note: reduce() does not execute the function for array elements without values.
! Note: this method does not change the original array.
*/
var num =[1,2,3,4]
const sum = function(result,item){
  return result + item
}
// console.log(num.reduce(sum)); // ? 10
/*
! JavaScript Array reverse() Method
! The reverse() method reverses the order of the elements in an array.
! Note: this method will change the original array.
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.reverse()); // ? [ 'Mango', 'Apple', 'Orange', 'Banana' ]

/*
! JavaScript Array shift() Method
! The shift() method removes the first item of an array.
! Note: This method changes the length of the array.
! Note: The return value of the shift method is the removed item.
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.shift()); // ? Banana
/*
! JavaScript Array slice() Method
! The slice() method returns the selected elements in an array, as a new array object.
! The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.
! Note: The original array will not be changed.
*/
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
// console.log(citrus); // ? [ 'Orange', 'Lemon' ] (end index is Exclusive)

/*
! JavaScript Array some() Method
! The some() method checks if any of the elements in an array pass a test (provided as a function).
! The some() method executes the function once for each element present in the array:
! If it finds an array element where the function returns a true value, some() returns true (and does not check the remaining values)
! Otherwise it returns false
! Note: some() does not execute the function for array elements without values.
! Note: some() does not change the original array.
*/
var ages = [3, 10, 18, 20];
const someAges = (age) => age>=18
// console.log(ages.some(someAges)); // ? true

/*
! JavaScript Array sort() Method
! The sort() method sorts the items of an array.
! The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down).
! By default, the sort() method sorts the values as strings in alphabetical and ascending order.
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.sort()); // ? [ 'Apple', 'Banana', 'Mango', 'Orange' ]
var ages = [3, 10, 18, 20];
// console.log(ages.sort((a,b)=> b-a)); // ? [ 20, 18, 10, 3 ]

/*
! JavaScript Array splice() Method
! The splice() method adds/removes items to/from an array, and returns the removed item(s).
! Note: This method changes the original array.
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 2, "Lemon", "Kiwi");
// console.log(fruits); // ? [ 'Banana', 'Orange', 'Lemon', 'Kiwi' ]

var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// fruits.splice(2, 2);
// console.log(fruits); // ? [ 'Banana', 'Orange', 'Kiwi' ]
/*
! JavaScript Array toString() Method
! The toString() method returns a string with all the array values, separated by commas.
! Note: This method will not change the original array.
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.toString();
// console.log(x); // ? Banana,Orange,Apple,Mango

/*
! JavaScript Array unshift() Method
! The unshift() method adds new items to the beginning of an array, and returns the new length.
! Note: This method changes the length of an array.
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon","Pineapple");
// console.log(fruits); // ? [ 'Lemon', 'Pineapple', 'Banana', 'Orange', 'Apple', 'Mango' ]

/*
! JavaScript Array valueOf() Method
! The valueOf() method returns the array.
! This method is the default method of the array object. Array.valueOf() will return the same as Array
! Note: This method will not change the original array.
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var v = fruits.valueOf();
// console.log(v); // ? ["Banana", "Orange", "Apple", "Mango"]