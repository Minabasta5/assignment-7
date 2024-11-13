// Coding Steps:
// All questions should be printed to your Browser's console using console.log()

//1- Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// Programmatically subtract the value of the first element in the array from the value in the last element of the array.
// Do not use numbers to reference the last element, find it programmatically.
// ages[7] - ages[0] is not allowed!
// Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
// Use a loop to iterate through the array and calculate the average age.


//2- Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
// Use a loop to iterate through the array and calculate the average number of letters per name.
// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

// How do you access the last element of any array?

// How do you access the first element of any array?

//3- Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:

// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array

// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

// Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

// Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.

// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

// Write a function that takes an array of numbers and returns the average of all the elements in the array.

// Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

// Create a function of your own that solves a problem. In comments, write what the function does and why you created it.




// start the array 
let ages=[3, 9, 23, 64, 2, 8, 28, 93];
let  minus=ages[ages.length -1] - ages[0];
console.log(minus);
// new age to the array 
ages.push(100);
console.log(ages);
// repeat the sunstracion to test 
let minus1=ages[ages.length-1]- ages[0];
console.log(minus1);


let sum=0;


for(i=0;i <ages.length;i++){
sum += ages[i];
console.log(sum)
}
let average= sum / ages.length;
console.log(  'averge age is  ' + average);

// the second array 

let names=['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

let totalLetters =0;

for(i=0;i <names.length;i++){
    totalLetters+= names[i].length;
    console.log(totalLetters); 
}

 let averageLetters =totalLetters / names.length;
 console.log( " average letters is " + averageLetters);

let namesTogther =names.concat(' ');
console.log(namesTogther)


let concatNames="";
for ( let i =0; i <names.length;i++){
    concatNames=concatNames.concat(names[i] + " ");
    console.log(i,concatNames);
}

// the last element of the array

console.log(names[names.length -1]);

// the first of any array 

// console.log(arrayname[0]);
// for example
console.log(names[0]);
// output sam



let namsLength=[];


for (let i =0 ; i < names.length;i++){
    console.log(i );
    namsLength.push(names[i].length);
    console.log(namsLength);
}
let sumNames=0;
for ( let i =0;i< namsLength.length;i++){
    sumNames += namsLength[i];
    console.log(sumNames);

}


function nameItself(word,n){
    
let concato=word.repeat(n);


console.log(concato);
}
nameItself("mina",3);


// function for full name

function fullName(firstname, lastname){
    let fullName=firstname + " "+ lastname;
    console.log(fullName);
}
fullName('mina' ,' dimyan ');

function numbers(){

}


let numbers1 =[100,200,300,400];
let numbers2 =[1,2,3,6,8];

function sumNumbersArray(array){
  let   total =0;
    for( let i =0 ;i < array.length;i++){
        // console.log(total);
        total += array[i];
    }
    if (total >100){
        console.log(total ,true);
        return true
    }else {
        console.log(total, false);
        return false
    }
}
sumNumbersArray(numbers1);


// Write a function that takes an array of numbers and returns the average of all the elements in the array.
function numb(array){
    let total=0;
for(let i =0; i < array.length;i++){
    //   console.log(i);

      total += array[i];
      console.log(total);
}
    let average2= total / array.length;
    console.log(average2);}
numb(numbers1);


// Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
let numbers3=[20,30,40];
let numbers4=[50,60,70,80];

function twoAverages(array1,array2){
    console.log("parameters: ", array1 ,array2);

    let total1=0;
    let total2=0;

    for(const number of array1){
        total1 += number;
        console.log(number, total1);
    }

    for (const number of array2){
        total2 += number;
        console.log(number,array2);
    }

    let averag1=total1/array1.length;
    let averag2= total2/ array2.length;

    console.log(averag1,averag2);
    if (averag1 >averag2){
        console.log(true);
        return true;


    }else {
        console.log(false);
        return false;

    }
}
twoAverages(numbers3,numbers4);

// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
let isHotOutside=false;
let moneyInPocket=0;

function willBuyDrink(isHotOutside,moneyInPocket){
    if (moneyInPocket >10.50 && isHotOutside==true ){
        console.log("let`s buy a drink")
    }else{
        console.log("we cant buy a dring ")
    }
}
willBuyDrink(true,12.00);

//  MY OWN FUNCTION 
// IT SHOLUD calc the percent to pay as taxes

function calctaxpercent(salary,number){
    let taxpercent=salary * (number / 100);
    console.log(" the taxe percent of youy salary is :" ,taxpercent);
}
calctaxpercent(5000, 10  );