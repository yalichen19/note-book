node-redis: https://github.com/NodeRedis/node-redis

```js
// 创建连接
const redis = require("redis");
const client = redis.createClient({
  host: "127.0.0.1",
  port: 6379,
  password: "认证密码"
});

// 通过 client 操作数据库
// 操作方式和 redis 原生方式基本一致
client.set("key", "value", (err, reply) => {
  
})

client.get("key", (err, reply) => {
  
})
```


转化成 promise 使用
```js
// 创建连接
const redis = require("redis");
const {promisify} = require("util"); // node 内置模块
const client = redis.createClient({
  host: "127.0.0.1",
  port: 6379,
  password: "认证密码"
});

// client.get("key", (err, reply) => {
  
// })

const getAsync = promisify(client.get).bind(client);
getAsync("key").then(reply => {

}).catch(err => {

})
```