//literal을 생성자로 만든다 . 재활용을 위해
// message,member,emoji

//멤버도 여러명이다
function Member(id, nickName, photo) {
    this.id = id
    this.nickName = nickName
    this.photo = photo
}
//이모지도 계속 올라온다
function Emoji(emojiId) { //이모지 아이디를 매개변수로 갖음
    this.emojiId = emojiId
    this.count = 0
    this.members = []
    this.addMember = function (memberId) {
        this.count++
        this.members.push(memberId)   //이모지의 데이터만 다루는 메서드
        // (이모지의 카운트 증가, 이모지를 누른 아이디 추가)이기에 이모지 객체 안에 넣는 것이 좋다.
    }
}

//메ㅔㅅ지도 계속 올라오기 때문에 생성자 함수로
function Message(msg, member) { //메세지 출력한다, 출력시 필요 정보
    this.msg = msg
    this.msgId = ++msgId // 객체마다 메세지 아이디 고유하게 존재함 
    this.member = member
    this.date = new Date().toDateString() //날짜는 입력 받을 필요 x
    this.emojis = []
    this.addEmojis= function(emojiId, memberId) {
        if (this.emojis.every((value) => value.emojiId !== emojiId)) { //this는 message
            let emoji = new Emoji(emojiId)  //값이 다르면 생성자 함수 호출 emoji의 new객체 저장
            emoji.addMember(memberId) //새로 생성된 객체에 멤버추가 함수 호출하여 count증가 
            this.emojis.push(emoji) //새로 새성된 이모지 객체를 emojis 배열에 저장함
        } else {
            let index = this.emojis.findIndex((value) => value.emojiId === emojiId) 
            this.emojis[index].addMember(memberId)
        }
    }
}
let msgId = 0
let messages = [] //메세지 배열 객체를 담기위한 배열

let member1=new Member('sun','jeon','jeon.png')
let message1 = new Message('첫번째 메세지', member1)
messages.push(message1)
console.log(messages)

message1.addEmojis('angry', 'kim')
console.dir(messages)