class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    fire(action) {
        this.observers.forEach(observer => {
            observer.update(action);
        });
    }
}

class Observer {
    constructor(state) {
        this.state = state;
        this.initialState = state;
    }

    update({ type, payload }) {
        switch (type) {
            case "INCREMENT":
                this.state = ++this.state;
                break;
            case "DECREMENT":
                this.state = --this.state;
                break;
            case "ADD":
                this.state += payload;
                break;
            default:
                this.state = this.initialState;
        }
    }
}

const stream$ = new Subject();

const obs1 = new Observer(1);
const obs2 = new Observer(10);

stream$.subscribe(obs1);
stream$.subscribe(obs2);

stream$.fire({ type: "INCREMENT" });
stream$.fire({ type: "INCREMENT" });
stream$.fire({ type: "DECREMENT" });
stream$.fire({ type: "ADD", payload: 10 });

console.log(obs1.state);
console.log(obs2.state);
