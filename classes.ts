class Vehicle {
    // color: string = 'red';
    constructor(public color: string) { }
    protected honk(): void {
        console.log('beep');
    }
}
// const vehicle = new Vehicle("orange");
// console.log(vehicle.color)
class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
    }
    private drive(): void {
        console.log("vroom");
    }
    statDrivingProcess(): void {
        this.drive();
        this.honk()
    }
}
const car = new Car(4, 'red');
car.statDrivingProcess();
// car.honk();
//modifiers public private protected
// public acceble any where 
//private accesable in the class 
// same as private protected acceable in child classes
// ####################################################################