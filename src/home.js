

export default function home()  {
    const content = document.getElementById('content')





const body = document.createElement('div')
body.classList.add('body')
content.append(body)




const sushiBody = document.createElement('div')
sushiBody.classList.add('sushibody')
body.append(sushiBody)

const mainBody = document.createElement('div')
mainBody.classList.add('mainbody')
body.append(mainBody)

const sushiImage = document.createElement('div')
sushiImage.classList.add('sushiimage')
sushiBody.append(sushiImage)



const actualImage = document.createElement('img')
actualImage.classList.add('actualimage')
actualImage.src = require('../src/sushitwo.jpg')
sushiImage.append(actualImage)

const mainContainer = document.createElement('div')
mainContainer.classList.add('maincontainer')
mainBody.append(mainContainer)

const homeWord = document.createElement('div')
homeWord.classList.add('homeword')
mainContainer.append(homeWord)

const realWord = document.createElement('div')
realWord.classList.add('realword')
homeWord.append(realWord)

const firstWord = document.createElement('div')
firstWord.classList.add('firstword')
firstWord.innerText = 'truly bottomless.'
realWord.append(firstWord)

const secondWord = document.createElement('div')
secondWord.classList.add('secondword')
secondWord.innerText = 'truly happy.'
realWord.append(secondWord)

const fourthWord = document.createElement('div')
fourthWord.classList.add('fourthword')
fourthWord.innerText = 'botSush.'
realWord.append(fourthWord)

const secondrealWord = document.createElement('div')
secondrealWord.classList.add('secondrealword')
homeWord.append(secondrealWord)

const thirdWord = document.createElement('div')
thirdWord.classList.add('thirdword')
secondrealWord.append(thirdWord)



const button = document.createElement('button')
button.classList.add('button')
button.innerText = 'discover'
secondrealWord.append(button)
}


