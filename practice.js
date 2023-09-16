/*let numOne = 3
let numTwo = 3
console.log(numOne == numTwo)

let js = 'javascript'
let py = 'python'
console.log(js == py)

let nums = [1, 2, 3, 4, 5]
nums[0] = 10
console.log(nums)

let nums1 = [1, 2, 3]
let nums2 = [1, 2, 3]

console.log (nums1 == nums2)

let user1 = {
    name: 'onur',
    surname: 'kocak',
}

let user2 = {
    name: 'onur',
    surname: 'kocak',
}
console.log(user1 == user2)

let name = 'Onur'
let surname = 'kocak'
let fullName = `${name} ${surname}`
console.log(fullName)

let string = 'lorem ipsum dolor ayşe fatma hayriye haydi çiftetelliye.'
string.match('love')
console.log(string)

let isRaining = true
isRaining
? console.log ('You need a rain coat.')
: console.log ('No need for a rain coat') 
isRaining = false
? console.log ('You need a rain coat.')
: console.log ('No need for a rain coat') 

const now = new Date()
console.log(now.getDay())

const date = new Date()
let year = date.getFullYear()
    month = date.getMonth()
    day = date.getDate()
    hour = date.getHours()
    minute = date.getMinutes()
    second = date.getSeconds()
    dayNumber = date.getDay()

let months = [
        'Ocak',
        'Şubat',
        'Mart',
        'Nisan',
        'Mayıs',
        'Haziran',
        'Temmuz',
        'Ağustos',
        'Eylül',
        'Ekim',
        'Kasım',
        'Aralık',
    ]
let days = [
        'Pazar',
        'Pazartesi',
        'Salı',
        'Çarşamba',
        'Perşembe',
        'Cuma',
        'Cumartesi'
    ]
let humanReadableDate = `${day} ${months[month]} ${year} ${days[dayNumber]} ${hour} : ${minute} : ${second} `

console.log(humanReadableDate)

let num = 3
if (num > 2 ){
    console.log(`${num}  is a positive Number`)
}

/*let result = prompt('2 + 5 kaç yapar?', '2+5')
if(result == '7'){
    console.log('doğru cevabı verdin hacı')
}
else {
    console.log('yanlış cevap hacı')
}

const number =  [0, 3, 35, 68, 94, 41, 'onur', true]
console.log('onur'.split(''))

const arr = Array(5).fill('onur')
console.log(arr)

const firstList = [1, 2, 3, 4]
const secondList = [4, 5, 6, 10]
let result = firstList.concat(secondList)
console.log(result)

firstList.push(11) //diziye yenisini eklemek
console.log(firstList)
firstList.pop()
console.log(firstList)

for (let i = 0; i <=100; i++){
    console.log(`${i} * ${i} = ${i * i}`)
}

const names = ['onur', 'furkan', 'berat', 'berke', 'alperen','emre']
for (let i = 0; i <= 5; i++){
    console.log(names[i])
}

let countries = ['turkey', 'finland', 'spain', 'portugal', 'cyprus']
let newCountries = []
for (let i = 0; i < countries.length; i++){
    newCountries.push(countries[i].toUpperCase())// touppercase (büyük harfle yazdırma) / (tolowercase küçük yazdırma)
}
console.log(newCountries)

function sayHello(){
    let msg = 'hello world!'
    return ('hello!')
}

function multiply(num1, num2){
    return num1 * num2
}
let total = multiply(5, 2)
console.log('Toplam', total)


/*let sayı = 10,
    sayı2 = 4
    let toplam = multiply(sayı, sayı2)

    function sumArrayValues(array){
        let esit = 0
       for (let i = 0; i < array.length; i++){
        esit += array[i]
       }
       return esit
    }
    let dizi = [2, 4, 6, 8, 10, 100]
    console.log('Toplam', sumArrayValues(dizi))

    function topla(){
        let total = 0
        for (let i =0; i < arguments.length; i++){
            total += arguments[i]
        }
        return total

    }
   console.log( topla(2, 5, 7, 9, 10))

   const sayyHello = function(name){
    return `Hello ${name}`
   }
   console.log(sayyHello('onur'));

   (function(){
    console.log('hey !')
   })()

   let sayHello2 = (function(name){
    console.log(`hello ${name}`)
   })('onur')
   
   // normal fonksiyon
   function hello(name){
    return `hello ${name}`

   }

   //ok fonksiyonu
   const hello2 = name => `hello ${name}`
   console.log(hello2('kamil'))

   let ad = 'onur'
    soyad = 'kocak'
    function letsLearnScope(){
       console.log(ad, soyad)
       if(true) {
        let ad = 'furkan'
        let soyad = 'kuzu'
            console.log(ad, soyad)
       }
       console.log(ad, soyad)
    }
    letsLearnScope()
    console.log(ad, soyad)

    function sayHello3(){
        console.log('hello')
    }
    setTimeout(sayHello3, 2000) // sonradan yazdırır setInterval ise her belirtilen saniye sonrasında yenisini yazdırır
    

    const map = new Map()
        map.set('name', 'onur')
        console.log(map)

    const stack = [
        ['html', 'css', 'javascript'],
        ['php', 'mysql','node.js']
    ]
    const [[firstItem], backend] = stack 

console.log(firstItem)

const namee = ['onur', 'gülizar', 'furkan', 'berke', 'berat']
const [myName, myWifeName, myFriendName, ...otherNames] = namee

console.log(myName)
console.log(myWifeName)
console.log(myFriendName)
console.log(otherNames)


function multiply(sayılar){
    return sayılar [0] * sayılar[1]
}
const sayılar = [10, 10 ]
console.log(multiply(sayılar))

/*let str = prompt('yorumunu yaz! Ama yazarken dikkatli ol')

let pattern = /24/

if (pattern.test(str)){
    alert('sen 24 yaşında değilsin!')
}*/

/*let strng = 'I love javascript'
console.log(strng.match(/love/))

const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

let matchReplaced = txt.replace(/Python|python/, 'JavaScript')
console.log(matchReplaced)

let firstName = '1Onur'

console.log(
    /^[a-z]$/.test(firstName)
    )

    let namess = ['onur', 'furkan', 'emre']
    console.table(namess)

    console.time('calculate 1m array')
    
    new Array(10e5).fill().map((value, index) => index)
    console.timeEnd('calculate 1m array')

    */