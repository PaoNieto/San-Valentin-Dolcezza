const buttonNo = document.querySelector('#No')
const buttonYes = document.querySelector('#Yes')

let fontSize = 2

let messages = [
    'Estás segura? :/',
    'Piensalo bien',
    'Pero bien :s',
    'Mira el otro botón :D'
]

buttonNo.addEventListener('click', ()=>{
fontSize = +fontSize +.5
buttonYes.style.fontSize = `${fontSize}rem`

const indexRandom = Math.floor(Math.random() *messages.length)

buttonNo.textContent = messages[indexRandom]
})

buttonYes.addEventListener('click', ()=>{    
    document.querySelector('#message').style.display = 'flex'
})
