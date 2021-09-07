class User {

}

function ConstructorProxy(Class, ...propNames) {
    return new Proxy(Class, {
        construct(target, argumentsList) {
            const obj = Reflect.construct(target, argumentsList)
            propNames.forEach((name, i) => {
                obj[name] = argumentsList[i];
            })
            return obj;
        }
    })
}

const UserProxy = ConstructorProxy(User, "firstName", "lastName", "age")

const obj = new UserProxy("袁", "进", 18);
console.log(obj)

class Monster {

}

const MonsterProxy = ConstructorProxy(Monster, "attack", "defence", "hp", "rate", "name")

const m = new MonsterProxy(10, 20, 100, 30, "怪物")
console.log(m);