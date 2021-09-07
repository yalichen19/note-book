const arr1 = Int32Array.of(35111, 7, 3, 11);

        const arr2 = new Int8Array(arr1);

        console.log(arr1 === arr2);
        console.log(arr1, arr2);