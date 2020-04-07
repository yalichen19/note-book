const MyPromise = (() => {
  const PENDING = 'pending',
    RESOLVED = 'resolved',
    REJECTED = 'rejected',
    PromiseValue = Symbol('PromiseValue'),
    PromiseState =  Symbol('PromiseState'),
    changeState = Symbol('changeState'),
    thenables = Symbol('thenables'),
    catchables = Symbol('thenables')
    settleHandle = Symbol('settleHandle'),
    executeQueue = Symbol('settleHandle');
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
      } catch(err) {
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

    then(thenable, catchable) {
      this[settleHandle](RESOLVED, thenable, this[thenables]);
      if (catchable) {
        this.catch(catchable)
      }
    }

    catch(catchable) {
      this[settleHandle](REJECTED, catchable, this[catchables]);
    }

  }
})();

const pro = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    reject(1)
  }, 3000)
})
pro.then((data) => {
  console.log('resolved', data)
})

pro.then((data) => {
  console.log('resolved2', data)
})

pro.catch(error => {
  console.log('error', error)
})

pro.catch(error => {
  console.log('error2', error)
})  

console.log(pro);

setTimeout(() => {
  console.log(pro);
}, 3000)