"use strict";
// Create a function that takes an array, an index, and a value as parameters. Inside the function,
//  use the splice method to insert the value at the specified index in the array. Return the modified array.
function insertValueAtIndex(array, index, value) {
    if (index < 0 || index > array.length) {
        console.log("Index is out of bounds.");
        return array;
    }
    array.splice(index, 0, value);
    return array;
}
const originalArray = [1, 2, 3, 4, 5];
const newIndex = 2;
const newValue = 99;
const modifiedArray = insertValueAtIndex(originalArray, newIndex, newValue);
console.log(modifiedArray);
function first(array, index, value) {
    array.splice(index, 0, value);
    return array;
}
var newarray = first([1, 2, 3, 4, 5,], 4, 100);
console.log(newarray);
// Implement a simple shopping cart program using an array. Create functions to add items, remove items,
//  and update quantities using the splice method. Print the cart's contents after each operation
var cart = ["Pant", "Shirt", "Vest"];
console.log(cart);
function cart1(Add_items) {
    Add_items.splice(0, 0, "Belt", "Boxer");
    return Add_items;
}
var Added_items = cart1(cart);
console.log(Added_items);
function cart2(remove_items) {
    remove_items.splice(1, 1);
    return remove_items;
}
var removed_items = cart2(Added_items);
console.log(removed_items);
function quantities(Add_quantity) {
    Add_quantity.splice(1, 0, "Qty.1");
    Add_quantity.splice(3, 0, "Qty.2");
    Add_quantity.splice(5, 0, "Qty.2");
    Add_quantity.splice(7, 0, "Qty.3");
    return Add_quantity;
}
var update_Qty = quantities(removed_items);
console.log(update_Qty);
// Write a program that uses a while loop to print the first 25 integers.
function printFirst25integers() {
    let count = 1;
    while (count <= 25) {
        console.log(count);
        count++;
    }
}
printFirst25integers();
// Write a program that uses a while loop to print the first 10 even numbers.
function printFirst10evennumbers() {
    let count = 1;
    let evenCount = 0;
    while (evenCount < 10) {
        if (count % 2 === 0) {
            console.log(count);
            evenCount++;
        }
        count++;
    }
}
printFirst10evennumbers();
// Create a function that takes a positive integer as
//  parameter and uses a while loop to calculate and return the factorial of that number.
function calculate_factorial(number) {
    let factorial = 1;
    while (number > 0) {
        factorial *= number;
        number--;
    }
    return factorial;
}
const result = calculate_factorial(8);
console.log(result);
// Write a program having an array
//  of numbers if the number is negative it should remove the negative number from the array.
function removeNegativeNumbers(numbers) {
    return numbers.filter(number => number >= 0);
}
const numberArray = [2, -99, 10, -15, 1, 9, -2];
const positiveNumbers = removeNegativeNumbers(numberArray);
console.log("Original Array:", numberArray);
console.log("Array without Negative Numbers:", positiveNumbers);
// Create a function that takes an array of numbers as parameter. 
// Use a while loop to calculate and return the sum of all the numbers in the array.
function Sum_of_Array(Take_array) {
    let index = 0;
    let array_sum = 0;
    while (index < Take_array.length) {
        array_sum += Take_array[index];
        index++;
    }
    return array_sum;
}
var Total_sum = Sum_of_Array([100, 200, 300, 400, 500]);
console.log("Total sum of array", Total_sum);
// Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the
// converted temperatures in an array. 
// Use a while loop to perform the conversion for each temperature.
function convert_CtoF(temp) {
    let i = 0;
    let F = 0;
    let Fahrenheit = [];
    while (i < temp.length) {
        F = (temp[i] * 9 / 5) + 32; // Conversion formula
        Fahrenheit.push(F);
        i++;
    }
    return Fahrenheit;
}
var centi_temp = [15, 45, 50];
console.log("Temprature in C", centi_temp);
var Temp_in_Fahrenheit = convert_CtoF(centi_temp);
console.log("Temprature in F", Temp_in_Fahrenheit);
