const arr = Int8Array.of(125, 7, 3, 11);
        const arr2 = arr.map(item => item * 2)
        console.log(arr2);

        // arr[1] = 100;
        // console.log(arr);
        // console.log(arr[1])
        // for (const item of arr) {
        //     console.log(item)
        // }

        // arr[4] = 1000; //无效
        // delete arr[0]; //无效
        // console.log(arr)