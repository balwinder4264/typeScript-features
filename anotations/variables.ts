//this is just anotatins
let apples: number = 5;
let speed: string = 'fast';
let hasNAme: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;
//built in objects 
let now: Date = new Date();

// Array value will be string
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3, 4, 5];
let truths: boolean[] = [true, true, false];

class Car {

}
let car: Car = new Car();

//Object literal
let point: { x: number; y: number } = {
    x: 10,
    y: 2
};

//Function

const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

//variable declaration
//Variable intializatiion;
//If both are in one line then we donot need to use anotation 


//When to use anotations
//1) Function that return the 'any' type
const json = '{"x":10,"y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);

//2) when we declare a variable in one line
//and declare it later
let words = ['red', 'green', 'blue'];

let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
    if (words[i] === "green") {
        foundWord = true;
    }
}

//3) variable whose type cannot be ifred correctly

let number = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < number.length; i++) {
    if (number[i] > 0) {
        numberAboveZero = number[i]
    }
}









