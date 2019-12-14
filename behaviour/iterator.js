class MyIterator {
    constructor(data) {
        this.index = 0;
        this.data = data;
    }

    [Symbol.iterator]() {
        return {
            next: () => {
                if (this.index < this.data.length) {
                    return {
                        value: this.data[this.index++],
                        done: false
                    };
                } else {
                    this.index = 0;

                    return {
                        done: true,
                        value: void 0
                    };
                }
            }
        };
    }
}

const iterator = new MyIterator(['this', 'is', 'iterator']);

for (const val of iterator) {
    console.log("value iterator", val);
}


function* generator(collection) {
    let index = 0;

    while (index < collection.length) {
        yield collection[index++];
    }
}

const gen = generator(['this', 'is', 'iterator']);

/*for (const val of gen) {
    console.log("Value generator", val);
}*/

console.log("value generator", gen.next().value);
console.log("value generator", gen.next().value);
console.log("value generator", gen.next().value);
