function drawSevenDayWeatherUp(datalist){
    const pre7BoxUp = document.querySelector('.pre7u');
    for(let i=0;i<datalist.length;i++){
    const pre7InnerBox = document.createElement('div');
    pre7InnerBox.className = 'pre7u_innder';
    const inner1Box = document.createElement('div');
    inner1Box.className = '_7inner1u';
    const inner2Box = document.createElement('div');
    inner2Box.className = '_7inner2u';
    const image = document.createElement('img');
    image.src = findImage(datalist[i].text)
    const inner3Box = document.createElement('div');
    inner3Box.className = '_7inner3u';
    inner1Box.innerHTML=formatDate(datalist[i].fxDate)
    inner3Box.innerHTML=`${datalist[i].textDay}`
    inner2Box.appendChild(image);
    pre7InnerBox.appendChild(inner1Box);
    pre7InnerBox.appendChild(inner3Box);
    pre7InnerBox.appendChild(inner2Box);
    pre7BoxUp.appendChild(pre7InnerBox);  
    }
}
function drawSevenDayWeatherD(datalist){
    const pre7BoxD = document.querySelector('.pre7d');
    for(let i=0;i<datalist.length;i++){
    const pre7InnerBox = document.createElement('div');
    pre7InnerBox.className = 'pre7d_innder';
    const inner1Box = document.createElement('div');
    inner1Box.className = '_7inner1d';
    const inner2Box = document.createElement('div');
    inner2Box.className = '_7inner2d';
    const image = document.createElement('img');
    image.src = findImageN(datalist[i].text)
    const inner3Box = document.createElement('div');
    inner3Box.className = '_7inner3d';
    inner1Box.innerHTML=formatDate(datalist[i].fxDate)
    inner3Box.innerHTML=`${datalist[i].textNight}`
    inner2Box.appendChild(image);
    pre7InnerBox.appendChild(inner1Box);
    pre7InnerBox.appendChild(inner3Box);
    pre7InnerBox.appendChild(inner2Box);
    pre7BoxD.appendChild(pre7InnerBox);  
    }
}

const container = document.querySelector('.pre7');
container.addEventListener('wheel', (event) => {
  event.preventDefault();
  container.scrollLeft += event.deltaY;
});