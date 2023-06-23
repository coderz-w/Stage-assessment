async function getTheDayWeather(city){
    let res=await axios.get(`https://devapi.qweather.com/v7/weather/24h?key=${apiKey2}&location=${city}`) 
    return res

}
function drawTheDayWeather(datalist){
const pre24Box = document.querySelector('.pre24');
for(let i=0;i<datalist.length;i++){
const pre24InnerBox = document.createElement('div');
pre24InnerBox.className = 'pre24_innder';
const inner1Box = document.createElement('div');
inner1Box.className = '_24inner1';
const inner2Box = document.createElement('div');
inner2Box.className = '_24inner2';
const image = document.createElement('img');
image.src = findImage(datalist[i].text)
const inner3Box = document.createElement('div');
inner3Box.className = '_24inner3';
inner1Box.innerHTML=getTime(datalist[i].fxTime)
inner3Box.innerHTML=`${datalist[i].temp}°`
inner2Box.appendChild(image);
pre24InnerBox.appendChild(inner1Box);
pre24InnerBox.appendChild(inner2Box);
pre24InnerBox.appendChild(inner3Box);
pre24Box.appendChild(pre24InnerBox);  
}
}
