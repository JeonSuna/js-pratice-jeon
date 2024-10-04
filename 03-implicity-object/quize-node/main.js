
function GetData() {
    let inputname = document.querySelector('#name')
    let hobby = document.querySelectorAll('input[name="hobby"]:checked')
    let gender = document.querySelector('input[name="gender"]:checked')
    let result = document.querySelector('#result')
    let genderMsg = ''
    let hobbyResult = ''
    hobby.forEach((item) => {
        hobbyResult += item.value +','
    })
    

    if (gender == null) {
        genderMsg = '입력하세요'

    } else {
        genderMsg = gender.value
    }
    result.innerHTML = `이름:${inputname.value} 
    <br> 취미:${hobbyResult}
    <br>
    성별:${genderMsg}`

}