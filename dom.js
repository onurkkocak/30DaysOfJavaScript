//const h1 = document.getElementsByTagName('h1')

/*for (let i = 0; i < h1.length; i++){
    console.log(h1[i])
}*/

/*const title = document.getElementById('title')

title.setAttribute('style', 'color: blue; background-color: yellow')
title.textContent = 'yeni deger'
title.style.color='blue'
title.style.backgroundColor = 'purple'
title.title= 'test başlık'
title.className = 'adana'

*/
/*let h1 = document.createElement('h1')
    h1.className = 'test'
    h1.style.backgroundColor='blue'
    h1.textContent = 'bu javascript ile oluşturuldu'
    document.body.appendChild(h1)
*/

/*const button = document.getElementById('btn')
button.addEventListener('click', function(e){
    console.log('butona basıldı')
})

/*const  h1 = document.querySelector('h1')
console.log(h1.attributes.style)*/

/*const aTags = document.querySelectorAll('a')

aTags.forEach(a => {
    a.addEventListener('click', e => {
        const href = e.target.getAttribute('href')
        if (href.includes ('http') && ! confirm('dış bağlantıya gidiyorsun dikkat ettin mi?')){
            
            e.preventDefault()


        }
    })
})*/

/*const h1 = document.querySelector('h1')

let propName = 'color'
h1.style.setProperty(propName, 'red')


const input = document.querySelector('input')
input.addEventListener('select', e => {
    console.log(
        e.target.value.substring(
        e.target.selectionStart,
        e.target.selectionEnd
    ))
})

const textarea = document.querySelector('textarea')
const actionButtons = document.querySelectorAll('.action-btn')

actionButtons.forEach(button => {
    button.addEventListener('click', e =>{
        console.log(
            textarea.selectionStart,
            textarea.selectionEnd
        )
        console.log(e.target.dataset.type)
    })
})*/
const form1 = document.getElementById('form1')
console.log(form1.elements)

const tab = document.querySelector('.tab')
const buttons = tab.querySelectorAll('nav button')
const contents = tab.querySelectorAll('.contents section')

buttons[0].classList.add('active')

console.log(
    [...contents].slice(1).forEach( content => content.style.display = 'none')
     )
     buttons.forEach((button, index) => button.addEventListener('click', e => {
        buttons.forEach(btn => btn.classList.remove('active'))
        e.target.classList.add('active')
        contents.forEach(content => content.display = 'none')
        contents[index].style.display = 'block'
     }))


    
     