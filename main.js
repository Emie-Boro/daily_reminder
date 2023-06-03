const quoteList = [
        'Life comes from the earth and life returns to the earth',
        "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart",
        'Be brave enough to live the life of your dreams according to your vision and purpose instead of the expectations and opinions of others',
        'Do what is right, not what is easy nor what is popular',

    ]

    setInterval(()=>{
        document.getElementById('quote').innerHTML = quoteList[Math.floor(Math.random() * quoteList.length)];
    }, 60000)

setInterval(()=>{
    let ampm = null;
    if(new Date().getHours >= '12') {
        ampm = 'Good Afternoon'
    } else{
        ampm = 'Good Morning'
    }
    const greet = document.getElementById('greet')
    greet.innerHTML = ampm;

    const time = `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`;
    document.getElementById('time').innerHTML = time;
})
