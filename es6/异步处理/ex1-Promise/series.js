const MyPromise = (() => {
  const PENDING = 'pending',
    RESOLVED = 'resolved',
    REJECTED = 'rejected',
    PromiseValue = Symbol('PromiseValue'),
    PromiseState = Symbol('PromiseState'),
    changeState = Symbol('changeState'),
    thenables = Symbol('thenables'),
    catchables = Symbol('thenables')
  settleHandle = Symbol('settleHandle'),
    executeQueue = Symbol('settleHandle'),
    linkPromise = Symbol('linkPromise');
  return class MyPromise {
    constructor(executor) {
      this[PromiseState] = PENDING;
      this[thenables] = [];
      this[catchables] = [];
      const resolve = (data) => {
        this[changeState](RESOLVED, data, this[thenables]);
      }
      const reject = (data) => {
        this[changeState](REJECTED, data, this[catchables]);
      }
      try {
        executor(resolve, reject);
      } catch (err) {
        reject(err)
      }
    }

    [changeState](newState, newValue, queue) {
      if (this[PromiseState] !== PENDING) {
        return;
      }
      this[PromiseState] = newState;
      this[PromiseValue] = newValue;
      queue.forEach(handle => {
        handle(newValue);
      });
    }

    [settleHandle](immediatelyState, settleFunc, queue) {
      if (this[PromiseState] === immediatelyState) {
        setTimeout(() => {
          settleFunc(this.PromiseValue);
        }, 0)
      } else {
        queue.push(settleFunc);
      }
    }

    [linkPromise](thenable, catchable) {
      console.log('thenable, catchable', thenable, catchable)
      function exec (resolve, reject, handle, data) {
        try {
          console.log('handle', handle)
          const result = handle(data);
          console.log(result, 'result44444')
          if (result instanceof MyPromise) {
            result.then(data => resolve(data)).catch(err => reject(err));
          } else {
            resolve(result);
          }
        } catch (error) {
          console.log('===============')
          reject(error)
        }
      }
      return new MyPromise((resolve, reject) => {
        if (thenable) {
          this[settleHandle](RESOLVED, (data) => {
            exec(resolve, reject, thenable, data)
          }, this[thenables]);
        }

        if (catchable) {
          this[settleHandle](REJECTED, (data) => {
            exec(resolve, reject, catchable, data)
          }, this[catchables]);
        }
      })
    }

    then(thenable, catchable) {
      if (catchable) {
        this.catch(catchable)
      }
      return this[linkPromise](thenable, catchable);
    }

    catch(catchable) {
      console.log('**************')
      return this[linkPromise](undefined, catchable);
    }

  }
})();

const pro = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 3000)
}).then((data) => {
  console.log('resolved', data)
  return data + 1
}).then((data) => {
  console.log('resolved2', data)
  new Error('xxx');
})
console.log(pro)

pro.catch(error => {
  console.log('error', error)
  return new Promise((resolve, reject) => {
    reject(0)
  })
}).catch(error => {
  console.log('error2', error)
})

console.log(pro);

setTimeout(() => {
  console.log(pro);
}, 3000)