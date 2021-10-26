// declaration functionName=(argumentlist): returntype=>{}
const add = (a: number, b: number): number => {
    return a + b;
};

const subtract = (a: number, b: number): number => {
    return a - b;
};

function devide(a: number, b: number): number {
    return a / b;
}

const multiply = function (a: number, b: number): number {
    return a * b;
};
//void can retrun undefined and null
const logger = (message: string): void => {
    console.log(message);
};

const throwError = (message: string): string => {
    throw new Error(message);
};

const todayWeather = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
    console.log(date)
    console.log(weather)
}


logWeather(todayWeather);
