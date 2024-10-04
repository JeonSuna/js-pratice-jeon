"use strict";
let result1 = document.querySelector('#result1')
let result2=document.querySelector('#result2')

let divNode = document.createElement('div')
let link = document.createElement('a')
let linkAttribute = document.createAttribute('href')
linkAttribute.value='#'
let linkText = document.createTextNode('link')

let divText = document.createTextNode('hello')


// <div><a href="#">link </a> hello </div>
result1.appendChild(divNode)
divNode.appendChild(link)
link.setAttributeNode(linkAttribute)
link.appendChild(linkText)
divNode.appendChild(link)
divNode.appendChild(divText)


