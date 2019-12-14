class Light {
    constructor(light, command) {
        this.light = light;
        this.command = command;
    }

    sign() {
        return this.command;
    }
}

class RedLight extends Light {
    constructor() {
        super("red", "STOP");
    }
}

class YellowLight extends Light {
    constructor() {
        super("yellow", "PREPARE");
    }
}

class GreenLight extends Light {
    constructor() {
        super("green", "GO");
    }
}

class TrafficLight {
    constructor() {
        this.states = [
            new RedLight(),
            new YellowLight(),
            new GreenLight()
        ];
        this.current = this.states[0];
    }

    change() {
        const total = this.states.length;
        let index = this.states.findIndex(light => light === this.current);

        if (index + 1 < total) {
            this.current = this.states[index + 1];
        } else {
            this.current = this.states[0];
        }
    }

    sign() {
        return this.current.sign();
    }
}

const traffic = new TrafficLight();
console.log(traffic.sign());  // STOP

traffic.change();
console.log(traffic.sign());  // PREPARE

traffic.change();
console.log(traffic.sign()); // GO

traffic.change();
console.log(traffic.sign()); // STOP

