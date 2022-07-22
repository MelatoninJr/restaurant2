export default function menu() {
const content = document.getElementById('content')



const body = document.createElement('div')
body.classList.add('body')
content.append(body)



const sushiBodyTwo = document.createElement('div')
sushiBodyTwo.classList.add('sushibodytwo')

body.append(sushiBodyTwo)

const mainBodyTwo = document.createElement('div')
mainBodyTwo.classList.add('mainbodytwo')
body.append(mainBodyTwo)

/*
const pattern = document.createElement('img')
pattern.classList.add('pattern')
pattern.src = require('../src/japan3.png')
mainBodyTwo.append(pattern)
*/

const bento = document.createElement('img')
bento.classList.add('bento')
bento.src = require('../src/japan1.jpeg')
sushiBodyTwo.append(bento)




const koi = document.createElement('img')
koi.classList.add('koi')
koi.src = require('../src/japan4.png')
mainBodyTwo.append(koi)

const koitwo = document.createElement('img')
koitwo.classList.add('koitwo')
koitwo.src = require('../src/japan4.png')
mainBodyTwo.append(koitwo)

const realMenu = document.createElement('div')
realMenu.classList.add('realmenu')
mainBodyTwo.append(realMenu)

const textbox = document.createElement('div')
textbox.classList.add('textbox')
realMenu.append(textbox)

const menuTitle = document.createElement('div')
menuTitle.classList.add('menutitle')
menuTitle.innerText = 'menu'
textbox.append(menuTitle)

const menuContainer = document.createElement('div')
menuContainer.classList.add('menucontainer')
textbox.append(menuContainer)

const menuList = document.createElement('ul')
menuList.classList.add('menulist')
menuContainer.append(menuList)

const secondMenu = document.createElement('li')
secondMenu.classList.add('secondmenu')
secondMenu.innerText = 'omakase'
menuList.append(secondMenu)

const thirdMenu = document.createElement('li')
thirdMenu.innerText = 'octopus roll'
menuList.append(thirdMenu)

const fourthMenu = document.createElement('li')
fourthMenu.innerText = 'tuna roll'
menuList.append(fourthMenu)

const fifthMenu = document.createElement('li')
fifthMenu.innerText = 'wagyu skewer'
menuList.append(fifthMenu)

const sixthMenu = document.createElement('li')
sixthMenu.innerText = 'atlantic crab'
menuList.append(sixthMenu)

const seventhMenu = document.createElement('li')
seventhMenu.innerText = 'japanese carp'
menuList.append(seventhMenu)

const eigthMenu = document.createElement('li')
eigthMenu.innerText = 'salmon fusion'
menuList.append(eigthMenu)

const ninthMenu = document.createElement('li')
ninthMenu.innerText = 'takoyaki'
menuList.append(ninthMenu)
}