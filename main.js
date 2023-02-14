
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnPhrase = document.querySelector("#btnPhrase")
const btnReset = document.querySelector("#btnReset")



btnPhrase.addEventListener('click', handlePhraseClick)
btnReset.addEventListener('click', handleResetClick)

const phrase = [
    'A vida trará coisas boas se tiver paciência.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.',
    'Não há que ser forte. Há que ser flexível.',
    'Siga os bons e aprenda com eles.',
    'A juventude não é uma época da vida, é um estado de espírito.',
    'Quem olha para fora sonha; quem olha para dentro acorda.',
    'O riso é a menor distância entre duas pessoas.',
    'Uma bela flor é incompleta sem as suas folhas.',
    'Nós somos o que pensamos.',
    'A vontade das pessoas é a melhor das leis.',
    'Nós somos o que pensamos.',
    'Você sempre será a sua melhor companhia!',
    'Acredite em milagres, mas não dependa deles.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
]


let randomPhraseSorte = phrase[Math.floor(Math.random() * phrase.length)]


function handlePhraseClick() {
    toggleScreen()
    randomPhrase()
    screen2.querySelector("p").innerText = `${randomPhraseSorte}`
}

function handleResetClick() {
    toggleScreen()   
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function randomPhrase() {
    randomPhraseSorte = phrase[Math.floor(Math.random() * phrase.length)]
}




