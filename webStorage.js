// localStorage.setItem('name','onur')

// console.log(localStorage.getItem('name'))

/*let basket = JSON.parse(localStorage.getItem('basket') || [])
const products = [
    {
        id: 1,
        title: 'mackbook pro 2021',
        price: 40_000
    },
    {
        id: 2,
        title: 'ıphone 14 pro 2021',
        price: 900
    },
    {
        id: 3,
        title: 'ıphone 14pro max 2021',
        price: 1_000
    }
]

function saveToStorage(){
    localStorage.setItem('basket', JSON.stringify(basket))
}

function addBasket(productId){
    basket.push(productId)
    saveToStorage()
}

function removeBasket(productId){
    basket = basket.filter(id => id === productId)
    saveToStorage()
}

function totalPrice(){
    return basket.reduce((prev, productId) =>{
    const product = products.find(p => p.id == productId)
    return prev += product.price

    }, 0 )
}

    addBasket(2)
    addBasket(1)
    console.log(totalPrice())*/