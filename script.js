// Declaring Arrays
let myArray = ["ThankGod", "Kayle", 25, 23, "Avocado"];
console.log(myArray);


//Accessing Arrays
let firstElement = myArray[0];
let lastElement = myArray[myArray.length - 1];
let middleElement = myArray[Math.floor(myArray.length / 2)];
console.log(firstElement, lastElement, middleElement);

//Using Array Properties

console.log("The number of elements in my array is:", myArray.length);

//Array Methods

//1. Push Method
myArray.push("Cherries");
console.log(myArray);

//2. Pop Method
myArray.pop();
console.log(myArray);

//Splice Method
myArray.splice(2, 1, "Kadosh");
console.log(myArray);

//Iterating Through Arrays
//1. Using a traditional for loop

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

//2. Using forEach Method
console.log("Using forEach Method");
myArray.forEach(element => console.log(element));

//Array Destructuring
const [firstEl, secondElement, ...restElements]  = myArray;
console.log("First Element:", firstEl);
console.log("Second Element:", secondElement);
console.log("Rest of the Elements:", restElements);