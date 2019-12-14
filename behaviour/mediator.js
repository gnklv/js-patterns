class User {
    constructor(name) {
        this.name = name;
        this.room = null;
    }

    send(message, to) {
        this.room.send(message, this, to);
    }

    receive(message, from) {
        console.log(`${from.name} => ${this.name}: ${message}`);
    }
}

class ChatRoom {
    constructor() {
        this.users = {};
    }

    register(user) {
        this.users[user.name] = user;
        user.room = this;
    }

    send(message, from, to) {
        if (to) {
            to.receive(message, from);
        } else {
            Object.entries(this.users).forEach(([key, user]) => {
                if (user !== from) {
                    user.receive(message, from);
                }
            });
        }
    }
}

const george = new User("George");
const daria = new User("Daria");
const igor = new User("Igor");

const room = new ChatRoom();

room.register(george);
room.register(daria);
room.register(igor);

george.send("Hello", daria);
daria.send("Hey", george);
igor.send("Hello everyone");
