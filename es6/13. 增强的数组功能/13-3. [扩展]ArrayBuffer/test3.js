const bf = new ArrayBuffer(10); //10个字节的内存

        const arr1 = new Int8Array(bf);
        const arr2 = new Int16Array(bf);
        console.log(arr1 === arr2);
        console.log(arr1.buffer === arr2.buffer);

        arr1[0] = 10;

        console.log(arr1)
        console.log(arr2);