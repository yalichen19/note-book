var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Description_1 = require("./Description");
let UUser = class UUser {
    constructor() {
        this.loginId = 'xxx';
        this.loginPwd = '888';
    }
};
__decorate([
    Description_1.propDescription('账号')
], UUser.prototype, "loginId", void 0);
__decorate([
    Description_1.propDescription('密码')
], UUser.prototype, "loginPwd", void 0);
UUser = __decorate([
    Description_1.classDescription('用户')
], UUser);
const uu = new UUser();
Description_1.printObj(uu);
