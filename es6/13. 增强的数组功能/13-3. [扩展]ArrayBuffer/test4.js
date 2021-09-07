const bf = new ArrayBuffer(10); //10个字节的内存
        const arr = new Int16Array(bf);
        arr[0] = 2344; //操作了两个字节
        console.log(arr);