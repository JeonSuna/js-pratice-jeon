"use strict";
//----------test1------------
// function myFun1() {
//     return new Promise(() => {
//         let variable = setInterval(() => {
//             console.log('in promise')
//         }, 1000)
//         setTimeout(() => {
//             clearInterval(variable)
//         },3000)
//     })
// }

// console.log('step1')
// console.log('step2')
// myFun1()

//------------test2------------------

// function myFun2() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(10)
//         },3000)
//     })
// }
// myFun2().then((value) => {
//     console.log(`result:${value}`)
// })

//-------------test3-------------------

// function myFun3(num) {
//     return new Promise((resolve, reject) => {
//         if (num > 0) {
//             resolve(num * num)
//         } else {
//             reject('0보다 큰 수를 지정하시기를 바랍니다')
//         }
//     })
// }
// myFun3(-1)
//     .then((value) =>
//         console.log(`result:${value}`),
//  )
//     .catch((error) => {
//         console.log(error)
//     })
//     .finally(() => {
//     console.log('무조건 실행')
// })

//----------test4-------
// function squareAfterTwoSeconds(number) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(number * number)
//         },2000)
//     })
//     // 여기에 Promise를 반환하는 코드를 작성하세요
//     // Promise는 2초 후에 입력받은 숫자의 제곱을 반환해야 합니다
// }

// // 테스트
// squareAfterTwoSeconds(4)
//     .then(result => console.log(result))
//     .catch(error => console.error(error));

// console.log("계산 시작");

//---------------------tset5-----------


//문제: 온라인 쇼핑몰의 주문 처리 시스템을 구현하세요. 다음 단계를 Promise를 사용하여 구현해야 합니다:

// 상품 재고 확인(1초 소요)
// 결제 처리(2초 소요)
// 주문 확인 이메일 발송(1.5초 소요)

// 각 단계에서 80 % 의 확률로 성공하고, 20 % 의 확률로 실패합니다.
//모든 단계가 성공적으로 완료되면 "주문이 성공적으로 처리되었습니다"를 출력하고,
// 어느 단계에서든 실패하면 해당 단계의 실패 메시지를 출력해야 합니다.
function checkStock() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let percent = Math.random()
            if (percent >= 0.8) {
                resolve('재고 성공')
            } else {
                reject('상품 재고 단계는 실패하였습니다')
            }
        }, 1000);
    });
}


function processPayment() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let percent2 = Math.random()
            if (percent2 >= 0.8) {
                resolve('결제 성공')
            } else {
                reject('결제 단계는 실패하였습니다')
            }
        }, 1000);
    });
}

function sendEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let percent3 = Math.random()
            if (percent3 >= 0.8) {
                resolve('이메일 성공')
            } else {
                reject('이메일 발송 단계는 실패하였습니다')
            }
        }, 1500);
    });
}

function processOrder() {
    checkStock()
        .then((value) => {
            console.log(value)
            return processPayment()
        })
        .then((value) => {
            console.log(value)
            return sendEmail()
        })
        .then((value) => {
            console.log(value)
            console.log('주문이 성공적으로 처리되었습니다')
        })

        .catch((error) => {
            console.log(error)
            console.error('주문 처리 실패연:{error}')
        })

    // 여기에서 위의 세 함수를 순차적으로 호출하고 결과를 처리하세요
}

processOrder();

