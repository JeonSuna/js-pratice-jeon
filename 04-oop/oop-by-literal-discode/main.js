/* 생각해야 할 것
    (시간,)
    (내용,)
    (멤버)
        프로필 사진,
        고유 멤버 아이디,
        멤버이름
    (이모지)
        이모지 고유 아이디,
        이미지 카운트,
        이모지 추가한 멤버,
        이미지 추가 멤버 함수
    (이모지 추가 함수)
*/

let message = {
    mag: '디버깅 용도로 사용합니다',
    date: '2029-22-22-2',
    member: {
        photo: 'jeinsuna.png',
        memberId: 'jeun0593',
        nickName: 'suna'
    },
    emojis: [{  //이모지들을 저장함, 즉 배열에
        Id: 'thmbs',
        count: 2,
        members: ['kim', 'sun', 'park'],
        addMember: function (addname) {  //이미지 추가 멤버 함수
            this.members.push(addname)
            this.count++ //멤버 추가한다=이모지 누른 숫자 많아진다=이모지 count 증가
        }
    }],
    addEmojis: function (emojiId, memberId) { //이모지 추가 함수, 매개변수는 추가된 이미지와 멤버 아이디(누가 추가하는지 알아야함)
        if (this.emojis.every((value) => value.Id !== emojiId)) { //메세지의 이모지(배열)값의 iD들이 추가하려는 ID와 다를 때 (즉 새로운 이모지 추가)
            this.emojis.push({
                Id: emojiId,
                count: 1,
                members: memberId,
                addMember: function (addname) {  //이미지 추가 멤버 함수
                    this.members.push(addname)
                    this.count++ //멤버 추가한다=이모지 누른 숫자 많아진다=이모지 count 증가
                }
            })
        } else {       //추가하려는 이모지가 이미 존재 할 때, member의 count만 증가시킴
            let index = this.emojis.findIndex((value) => value.Id === emojiId) //이모지 배열에서 같은 아이디인 이모지의 인덱스를 찾음
            this.emojis[index].addMember(memberId) //addMember함수가 인자를 받고 count를 증가시킴
        }

    }
}
console.log(message)
message.addEmojis('angry', 'kim') //kim이 angry이모지 추가함
console.log(message) //emojis배열에 추가됨
message.addEmojis('thmbs','sun') //같은 thmb를 추가하여 , thmb의 count가 증가된걸 확인 가능