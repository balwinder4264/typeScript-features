const carMakers = ['ford', "toyota", 'chevy'];
const dates = [new Date(), new Date()];

const carByMake = [
    ['g150'],
    ['corola'],
    ['camaro']
];

// Help with inference when extracting values

const car1 = carMakers[0];
const myCar = carMakers.pop();

//Prevent in incomapitable values 
// carMakers.push(100);

//help with 'map'

carMakers.map((car: string): string => {
    return car;
});

//Flexible types

const importantDates: (Date | string)[] = [new Date()];
importantDates.push("2030-10-10");