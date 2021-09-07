//创建了一个用于存储10个字节的内存空间
        const bf = new ArrayBuffer(10);

        const bf2 = bf.slice(3, 5);

        console.log(bf, bf2);