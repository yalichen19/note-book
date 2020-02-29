interface CallBackType <K,V> {
  (key: K, value: V):void;
}
export default class Dictionary <K, V> {
  private keys: K[] = [];
  private values: V[] = [];
  
  get size() {
    return this.keys.length;
  }

  set(key: K, value: V) {
    const index = this.keys.indexOf(key);
    if(index === -1) {
      this.keys.push(key)
      this.values.push(value)
    } else {
      this.values[index] = value;
    }
  }

  forEach(callback: CallBackType<K,V>) {
    this.keys.forEach((key, index) => {
      callback(key, this.values[index])
    })
  }

  delete(key: K) {
    const index = this.keys.indexOf(key);
    if (index === -1) {
      return;
    }
    this.keys.splice(index, 1);
    return this.values.splice(index, 1)[0];
  }

  get(key: K) {
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

  has(key: K) {
    return this.keys.includes(key)
  }

}
