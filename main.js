const colorList = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']

const htmlTime = document.getElementById('time');


setInterval(()=>{
    const hexColor1 = `${colorList[Math.floor(Math.random() * colorList.length)]}${colorList[Math.floor(Math.random() * colorList.length)]}`;
    const hexColor2 = `${colorList[Math.floor(Math.random() * colorList.length)]}${colorList[Math.floor(Math.random() * colorList.length)]}`;
    const hexColor3 = `${colorList[Math.floor(Math.random() * colorList.length)]}${colorList[Math.floor(Math.random() * colorList.length)]}`;

    const hexColor = `#${hexColor1}${hexColor2}${hexColor3}`;

    document.body.style.backgroundColor = hexColor;
    document.getElementById('color').innerHTML = hexColor;
}, 60000)

setInterval(()=>{
    let ampm= null;
    if(new Date().getHours >= '12') {
        ampm = 'Good Afternoon'
    } else{
        ampm = 'Good Morning'
    }
    document.getElementById('greet').innerHTML = ampm;
    const time = `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`;
    document.getElementById('time').innerHTML = time;
}, 1000)