"use strict";
let input=document.querySelector('#input')
let result = document.querySelector('#result')
let array = []

function addFun() {
    let list = document.createElement('li')
    let listTxt = document.createTextNode(input.value)
    list.appendChild(listTxt)
    result.insertBefore(list, result.childNodes[0])
    input.value = ''
    


    list.addEventListener('click', (e) => {
        result.removeChild(e.target)  ////
    })
}


