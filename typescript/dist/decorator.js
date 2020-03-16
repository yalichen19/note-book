var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function test(target) {
    console.log(target);
}
function test2(str) {
    return function (target) {
        console.log(target);
    };
}
function d1() {
    console.log('d1');
    return function (target) {
        console.log('d1 decorator');
    };
}
function d2() {
    console.log('d2');
    return function (target) {
        console.log('d2 decorator');
    };
}
let K = class K {
};
K = __decorate([
    test,
    test2('描述信息'),
    d1(),
    d2()
], K);
function d(target, key) {
    console.log(target, key);
}
class AA {
    constructor() {
        this.props1 = '111';
    }
    method1() {
    }
    method2() {
    }
}
__decorate([
    d
], AA.prototype, "props1", void 0);
__decorate([
    d
], AA, "porps1", void 0);
function enumerable(target, key, descriptor) {
    descriptor.enumerable = true;
}
const a = new AA();
for (const key in a) {
    console.log(key);
}
