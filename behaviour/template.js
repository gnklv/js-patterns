class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    responsibilities() {}

    work() {
        return `${this.name} do ${this.responsibilities()}`;
    }

    getPaid() {
        return `${this.name} has wage ${this.salary}`;
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    responsibilities() {
        return `process of programmes developing`;
    }
}

class Designer extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    responsibilities() {
        return `process of applications styling`;
    }
}

const dev = new Developer("George", 2000);
console.log(dev.getPaid());
console.log(dev.work());

const des = new Designer("Daria", 1800);
console.log(des.getPaid());
console.log(des.work());
