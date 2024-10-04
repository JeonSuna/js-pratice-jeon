//생성자 함수로 준비 
function User2(name, age) {
    this.name = name
    this.age = age
    this.sayHello = function () {
        console.log(`${this.name},${this.age}`)
    }
}
//일반 함수로 이용, new를 이용하지 않아서 this가 준비되지 않는다.
//그 상태에서 this사용시 에러 .왜? new를 이용 안함 ,this즉 객체가 준비 안됨 
// User2('홍길동', 20)//error

//모형(생성자 함수)를 선언하고 모형을 통해 동일 구조의 객체를 반복 생성한다
let user1 = new User2('홍길동', 25)
let user2 = new User2('김길동', 32)


//즉 동일 구조 방법을 위한 것,,,,,,,이라는 걸 명심하자 생성자함수는 모형이다