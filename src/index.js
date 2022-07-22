import './style.css';
import Icon from './sushi.jpg';
import homefunc from './home.js'
import menufunc from './menu.js'
import aboutfunc from './about.js'

const content = document.getElementById('content')



const header = document.createElement('div')
header.classList.add('header')
content.append(header)

/*
const body = document.createElement('div')
body.classList.add('body')
content.append(body)
*/
const logo = document.createElement('div')
logo.classList.add('logo')
header.append(logo)

const logoText = document.createElement('div')
logoText.classList.add('logotext')
logoText.innerText = 'botSush'
logo.append(logoText)

const logopic = document.createElement('div')
logopic.classList.add('logopic')
logo.append(logopic)


const linkBox = document.createElement('div')
linkBox.classList.add('linkbox')
header.append(linkBox)

const list = document.createElement('ul')
list.classList.add('links')
linkBox.append(list)

const home = document.createElement('li')
home.classList.add('homelink')
list.append(home)

const homeClick = document.createElement('a')
homeClick.classList.add('homeclick')
homeClick.innerText = 'home'
homeClick.href = 'file:///Users/dillonmorrison/repos/restaurant2/dist/index.html'
home.append(homeClick)

const menu = document.createElement('li')
menu.classList.add('menulink')
list.append(menu)

const menuClick = document.createElement('a')
menuClick.classList.add = 'homeclick'
menuClick.innerText = 'menu'
menu.append(menuClick)

const about = document.createElement('li')
about.classList.add('aboutlink')
list.append(about)

const aboutClick = document.createElement('a')
aboutClick.classList.add('aboutclick')
aboutClick.innerText = 'about'
about.append(aboutClick)

homefunc()

menuClick.addEventListener("click", function() {
    let grab = document.querySelector('.body')
    grab.remove()
    menufunc()

})


aboutClick.addEventListener("click", function() {
    let grab = document.querySelector(".body")
    grab.remove()
    aboutfunc()
})


homeClick.addEventListener("click", function() {
    let grab = document.querySelector(".body")
    grab.remove()
    homefunc()
})