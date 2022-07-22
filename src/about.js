export default function about()  {
    const content = document.getElementById('content')



    const body = document.createElement('div')
    body.classList.add('body')
    content.append(body)
    


const sushiBodyThree = document.createElement('div')
sushiBodyThree.classList.add('sushibodythree')
body.append(sushiBodyThree)



const mainBodyThree = document.createElement('div')
mainBodyThree.classList.add('mainbodythree')
sushiBodyThree.append(mainBodyThree)



const firstRow = document.createElement('div')
firstRow.classList.add('firstrow')
mainBodyThree.append(firstRow)

const gridOne = document.createElement('div')
gridOne.classList.add('grid')
firstRow.append(gridOne)

const gridTwo = document.createElement('div')
gridTwo.classList.add('grid')
firstRow.append(gridTwo)

const gridThree = document.createElement('div')
gridThree.classList.add('grid')
firstRow.append(gridThree)

const testt = document.createElement('img')
testt.classList.add('testt')
testt.src = require('../src/chef2.png')
gridOne.append(testt)

const picTwo = document.createElement('img')
picTwo.classList.add('pictwo')
picTwo.src = require('../src/sushi3.png')
gridTwo.append(picTwo)

const picThree = document.createElement('img')
picThree.classList.add('picthree')
picThree.src = require('../src/chef1.png')
gridThree.append(picThree)

const overlayOne = document.createElement('div')
overlayOne.classList.add('overlayone')
gridOne.append(overlayOne)




}