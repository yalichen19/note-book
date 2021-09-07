//创建了一个用于存储10个字节的内存空间
        const bf = new ArrayBuffer(10);

        const view = new DataView(bf, 3, 4);

        // console.log(view);

        view.setInt16(1, 3);
        console.log(view);

        console.log(view.getInt16(1));