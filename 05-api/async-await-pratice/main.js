"use strict";

//async-await
//then의 프로미스 값을 반환하는 것을 편하게..
//------------------test1---------------------------
// async function myFun() {
//     setTimeout(() => {
//         console.log('myFun1 call')
//     }, 2000);
// }
// async function myFun2() {
//     setTimeout(() => {
//         console.log('myFun2 call')
//     }, 1000);
// }
// console.log('step1')
// console.log('step2')
// console.log('step3')
// myFun()
// myFun2()

//-----------------test2----------------------
// function myFun1() {
//     return new Promise((resolve, reject) => {
//         resolve(1)
//     })
// }
// myFun1().then((value) => {
//     console.log(value)
// })
// ///위에는 원래 하던 방법

// async function myFun2() {
//     return 2 //원래는 return new Promise~했는데.. 명시적으로 적지 않아도 내부적으로 resolve를 활용함
//            // return Promise.resolve(2);
// }
// myFun2().then((value) => {
//     console.log(value)
// })

//---------------------test3--------------
//원래는....콜백지옥?
// function getData(num) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(num)
//         },1000)
//     })
// }
// getData(1)
//     .then((value) => {
//         console.log(`${value} data`)
//         return getData(2)
//     })
//     .then((value) => {
//         console.log(`${value} data`)
//         return getData(3)
//     })
//     .then((value) => {
//         console.log(`${value} data`)
//     })

//------------------test4-----싫어싫어 더 간편하게 할래~------------
// function getData(num) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(num)
//         }, 1000)
//     })
// }

// async function myFun3() {
//     console.log(await getData(1))
//     console.log(await getData(2))
//     console.log(await getData(3))
// }
// myFun3()

//----------------------------test5-----await을 사용함,..하지만 이제 순차적인 대기를 곁들인
//await를 이용한 순차적 실행 
function funA() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('funA data')
        }, 1000)
    })
}

function funB() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('funB data') //resolve호출
        }, 1000)
    })
}
//funA가 호출되고 즉시 await된다 , promise가 resolve될 때까지 실행이 중지됨
//---------------------------------비교~~~중요~~~--------------------------------------
// async function data() {
//     console.log(await funA())
//     console.log(await funB()) //같은 1초인데 funA와 funB가 동시에 출력 안됨,
//                         // 왜냐면 funA가  await여서 funA실행 후 funB가 실행
//funA가 호출되고 즉시 await된다. promise가 resolve 될 때까지 실행이 일시 중지됨
                        //실행과 결과를 동시에
// }
// data()
/
//--------------------------------test6--------await를 이용한...하지만 이제 병렬실행을 곁들인
//조건: await의 사용 위치가 함수를 호출하는 위치가 아닌 결과 데이터에 
async function data() {
    let adata = funA()
    let bdata = funB()
    console.log(await adata)
    console.log(await bdata)
    //await funA()는 funA()가 반환한 Promise가 이행될 때까지 기다립니다.
    // Promise가 이행되면(약 1초 후), 그 결과값('funA data')이 result 변수에 할당됩니다.
    //즉 실행과 결과를 분리시킴
}
data()
//funA()가 호출되고 반환된 Promise가 adata에 저장됩니다. 이 시점에서 funA()의 비동기 작업이 시작됩니다.
//즉시 funB()가 호출되고 반환된 Promise가 bdata에 저장됩니다.funB()의 비동기 작업도 시작됩니다.
//await adata에서 funA()의 Promise가 resolve될 때까지 기다립니다(약 1초).
//funA()의 결과가 출력됩니다.
//await bdata에서 funB()의 Promise가 resolve될 때까지 기다립니다.
//그러나 이미 funB()가 funA()와 거의 동시에 시작되었으므로,
//이 시점에서는 거의 즉시 결과를 받을 수 있습니다.



