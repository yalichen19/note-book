Object.defineProperty(exports, "__esModule", { value: true });
function classDescription(description) {
    return function (target) {
        target.prototype.$classDescription = description;
    };
}
exports.classDescription = classDescription;
function propDescription(description) {
    return function (target, propsName) {
        if (!target.$propDescriptions) {
            target.$propDescriptions = [];
        }
        target.$propDescriptions.push({
            propsName,
            description
        });
    };
}
exports.propDescription = propDescription;
function printObj(obj) {
    if (obj.$classDescription) {
        console.log(obj.$classDescription);
    }
    else {
        console.log(obj.__proto__.constructor.name);
    }
    if (!obj.$propDescriptions) {
        obj.$propDescriptions = [];
    }
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const result = obj.$propDescriptions.find(ele => ele.propsName === key);
            if (result) {
                console.log(`${result.description}: ${obj[key]}`);
            }
            else {
                console.log(`${key}: ${obj[key]}`);
            }
        }
    }
}
exports.printObj = printObj;
