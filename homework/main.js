function Product(name, price) {
    this.name = name
    this.price = price
}
let products = [
    new Product('대뱃살', 3000),
    new Product('목살', 5000),
    new Product('배꼽살', 4000),
    new Product('중뱃살', 1000)
]

let listProduct = ''

//첫 화면 보이게 출력

let selectNode = document.getElementById('products')
products.forEach((item, index) => {
    listProduct += `<option value="${index}>"> ${item.name}-${item.price} </option>`
})
selectNode.innerHTML = listProduct

//선택 함수 
let result = document.querySelector('#result')
function selectChange(e) {
    let values = e.target.selectedOptions

    if (values.length !== 0) {
        let resultTxt = '<h4>선택한 상품</h4>'
        resultTxt += '<ul>'
        let totalPrice = 0
        for (let i = 0; i < values.length; i++){
            let product = products[values[i].value]
            console.log(products)
            resultTxt += `<li>${product.name} -${product.price}</li>`
            totalPrice += product.price

        }
    }

   
}
