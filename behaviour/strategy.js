class Vehicle {
    constructor(timeTaken) {
        this.timeTaken = timeTaken;
    }

    travelTime() {
        return this.timeTaken;
    }
}

class Bus extends Vehicle {
    constructor() {
        super(10);
    }
}

class Taxi extends Vehicle {
    constructor() {
        super(5);
    }
}

class Car extends Vehicle {
    constructor() {
        super(3);
    }
}

class Commute {
    travel(transport) {
        return transport.travelTime();
    }
}

const commute = new Commute();

console.log(commute.travel(new Bus()));
console.log(commute.travel(new Taxi()));
console.log(commute.travel(new Car()));
