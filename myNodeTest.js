function test (cb){
    cb();
}

function first(){
console.log(1);
test(() => setImmediate(() => console.log(10)));
console.log(2);
}

//first();

    function testPromise(){
        return new Promise((resolve,reject) => {
            reject(10);
        });
    }

    function second(){
        console.log(1);
        testPromise().then((res) => console.log(10)).catch(err => console.log("err" +err));
        console.log(2);
    }

    //second();


    function newNode(){
        console.log(1);
    
        called = async () => {
            try{
                console.log(await testPromise())
        }catch(err){
            console.log('err' + err);
        }
        }  
        console.log(2);
        called();
    }
        
    newNode();