Object.defineProperty(exports, "__esModule", { value: true });
class Dictionary {
    constructor() {
        this.keys = [];
        this.values = [];
    }
    get size() {
        return this.keys.length;
    }
    set(key, value) {
        const index = this.keys.indexOf(key);
        if (index === -1) {
            this.keys.push(key);
            this.values.push(value);
        }
        else {
            this.values[index] = value;
        }
    }
    forEach(callback) {
        this.keys.forEach((key, index) => {
            callback(key, this.values[index]);
        });
    }
    delete(key) {
        const index = this.keys.indexOf(key);
        if (index === -1) {
            return;
        }
        this.keys.splice(index, 1);
        return this.values.splice(index, 1)[0];
    }
    get(key) {
        const index = this.keys.indexOf(key);
        if (index === -1) {
            return;
        }
        return this.values[index];
    }
    clear() {
        this.keys = [];
        this.values = [];
    }
    has(key) {
        return this.keys.includes(key);
    }
}
exports.default = Dictionary;
