function testPromise() {
    return new Promise((resolve, reject) => {
        reject(10);
    });
}

function newNode() {
    console.log(1);

    (async () => {
        try {
            console.log(await testPromise())
        } catch (err) {
            console.log('err' + err);
        }
    })();
    console.log(2);
}

newNode();