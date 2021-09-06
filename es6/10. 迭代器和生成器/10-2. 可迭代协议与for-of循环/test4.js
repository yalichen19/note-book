var obj = {
    a: 1,
    b: 2,
    [Symbol.iterator]() {
        const keys = Object.keys(this);
        let i = 0;
        return {
            next: () => {
                const propName = keys[i];
                const propValue = this[propName];
                const result = {
                    value: {
                        propName,
                        propValue
                    },
                    done: i >= keys.length
                }
                i++;
                return result;
            }
        }
    }
}

const arr = [...obj];
console.log(arr);

function test(a, b) {
    console.log(a, b)
}

test(...obj);