// Part ONE

// create a class for a vehicle
// • each vehicle instance should have the following properties: make, model, year
// • each vehicle instance should have access to a method called honk, which returns the string "Beep"
// • each vehicle instance should have a method called toString, which returns the string containing the make, model and year

class Vehicle {
	constructor(make, model, year) {
		this.make = make;
		this.model = model;
		this.year = year;
	}
	honk() {
		return "Beep";
	}
	toString() {
		return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
	}
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.honk(); // "Beep"
myFirstVehicle.toString(); // "The vehicle is a Honda Monster Truck from 1999"

// Part TWO

// create a class for a car
// • the Car class should inherit from Vehicle and each car instance should have a property called numWheels which has a value of 4

class Car extends Vehicle {
	constructor(make, model, year) {
		super(make, model, year);
		this.numWheels = 4;
	}
}

let myFirstCar = new Car("Toyota", "Corolla", 2005);
myFirstCar.honk(); // "Beep"
myFirstCar.toString(); // "The vehicle is a Toyota Corolla from 2005"
myFirstCar.numWheels; // 4

// Part THREE

// create a class for a motorcycle
// • this class should inherit from Vehicle and each motorcycle instance should have a property called numWheels which has a value of 2
// • it should also have a revEngine method which returns "VROOM!!!"

class Motorcycle extends Vehicle {
	constructor(make, model, year) {
		super(make, model, year);
		this.numWheels = 2;
	}
	revEngine() {
		return "VROOM!!!";
	}
}

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);
myFirstMotorcycle.honk(); // "Beep"
myFirstMotorcycle.toString(); // "The vehicle is a Honda Nighthawk from 2000"
myFirstMotorcycle.revEngine(); // "VROOM!!!"
myFirstMotorcycle.numWheels; // 2

// Part FOUR

// create a class for a garage
// • it should have a property called vehicles, which will store an array of vehicles and
// • a property called capacity, which is a number indicating how many vehicles will fit in the garage
// • when you create a garage, vehicles will always be empty, you only need to provide the capacity

// • a garage should also have an add method, which attempts to add a vehicle to the array of vehicles
// • however, if you try to add something, which is not a vehicle, the garage should return the message "Only vehicles are allowed in here!"
// • also, if the garage is at capacity, it should say "Sorry, we're full"

class Garage {
	constructor(capacity) {
		this.vehicles = [];
		this.capacity = capacity;
	}
	add(vehicle) {
		if (!(vehicle instanceof Vehicle)) return "Only vehicles are allowed in here!";
		if (this.vehicles.length === this.capacity) return "Sorry, we're full";
		this.vehicles.push(vehicle);
		return "Vehicle added!";
	}
}

let garage = new Garage(2);
garage.vehicles; // []
garage.add(new Car("Hyundai", "Elantra", 2015)); // "Vehicle added!"
garage.vehicles; // [Car]
garage.add("Taco"); // "Only vehicles are allowed in here!"
garage.add(new Motorcycle("Honda", "Nighthawk", 2000)); // "Vehicle added!"
garage.vehicles; // [Car, Motorcycle]
garage.add(new Motorcycle("Honda", "Nighthawk", 2001)); // "Sorry, we're full"
