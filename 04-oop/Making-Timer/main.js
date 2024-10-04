let time = document.querySelector('#time')
let btn = document.querySelector('#btn')
function GoTimer() {
    //show면 안보임, hide
    if (btn.textContent === 'show') {
        btn.innerHTML = 'hide'
        setInterval(printTimer, 1000)
        time.removeAttribute('class','hide')
    } else {
        time.setAttribute('class', 'hide')
        btn.innerHTML='show'
    }
}

//시간출력 함수 
function printTimer() {
    let clock = new Date()
    let hours = clock.getHours()
    let minutes = clock.getMinutes()
    let seconds = clock.getSeconds()

    let realTime = `${hours < 10 ? '0' + hours : hours}:${minutes<10?'0'+minutes:minutes}:${seconds<10?'0'+seconds:seconds}`

    
    time.innerHTML =realTime

}
