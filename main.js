const colorList = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']

const namePrompt = prompt('What is your name?')
document.getElementById('name').innerHTML = namePrompt
document.title = namePrompt
const htmlTime = document.getElementById('time');


setInterval(()=>{
    const righthexColor1 = `${colorList[Math.floor(Math.random() * colorList.length)]}${colorList[Math.floor(Math.random() * colorList.length)]}`;
    const righthexColor2 = `${colorList[Math.floor(Math.random() * colorList.length)]}${colorList[Math.floor(Math.random() * colorList.length)]}`;
    const righthexColor3 = `${colorList[Math.floor(Math.random() * colorList.length)]}${colorList[Math.floor(Math.random() * colorList.length)]}`;

    const lefthexColor1 = `${colorList[Math.floor(Math.random() * colorList.length)]}${colorList[Math.floor(Math.random() * colorList.length)]}`;
    const lefthexColor2 = `${colorList[Math.floor(Math.random() * colorList.length)]}${colorList[Math.floor(Math.random() * colorList.length)]}`;
    const lefthexColor3 = `${colorList[Math.floor(Math.random() * colorList.length)]}${colorList[Math.floor(Math.random() * colorList.length)]}`;

    const lefthexColor = `${colorList[Math.floor(Math.random() * colorList.length)]}${colorList[Math.floor(Math.random() * colorList.length)]}`;

    const rightColor = `#${righthexColor1}${righthexColor2}${righthexColor3}`;
    const leftColor = `#${lefthexColor1}${lefthexColor2}${lefthexColor3}`;
    document.body.style.backgroundImage = `linear-gradient(to bottom right, ${rightColor}, ${leftColor})`
    document.body.style.backgroundSize = 'cover'
    document.body.style.backgroundPosition = 'center'
    document.body.style.backgroundRepeat = 'no-repeat'
    document.getElementById('color').innerHTML = `${rightColor}  ${leftColor}`

}, 500)

setInterval(()=>{
    document.getElementById('time').innerHTML = new Date()
}, 1000)