const MyPromise = (() => {
  const PENDING = 'pending',
    RESOLVED = 'resolved',
    REJECTED = 'rejected',
    PromiseValue = Symbol('PromiseValue'),
    PromiseState =  Symbol('PromiseState'),
    changeState = Symbol('changeState');
  return class MyPromise {
    constructor(executor) {
      this[PromiseState] = PENDING;
      const resolve = (data) => {
        this[changeState](RESOLVED, data);
      }
      const reject = (data) => {
        this[changeState](REJECTED, data);
      }
      try {
        executor(resolve, reject);
      } catch(err) {
        reject(err)
      }
    }

    [changeState](newState, newValue) {
      if (this[PromiseState] !== PENDING) {
        return;
      }
      this[PromiseState] = newState;
      this[PromiseValue] = newValue;
    }
  }
})();

const pro = new MyPromise((resolve) => {
  setTimeout(() => {
    resolve(1)
  }, 1000)
})

console.log(pro);

setTimeout(() => {
  console.log(pro);
}, 3000)