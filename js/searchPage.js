let pageSearchView=document.querySelector('.searchPage')
let keyToSearch=document.querySelector('.h_inner')
let pre=document.querySelector('.check')
let currentLocation=document.querySelector('._currentElse')
let historybox=document.querySelector('.historybox')
let input=document.querySelector('input')
let historyout=document.querySelector('.history')
let img=document.querySelector('#deleteHistory')
let hotCityBox=document.querySelector(".hotCitybox").querySelectorAll('div')
keyToSearch.addEventListener('click',function(){
   pageSearchView.style.display='block' 
   currentLocation.innerHTML=cityName
   currentLocation.addEventListener('click',resetdata(`${currentLocation.innerHTML}`))
   loadHistoryCity()
})
pre.addEventListener('click',function(){
    pageSearchView.style.display='none'
})
input.addEventListener('keydown',function(e){
    if (e.key === 'Enter'){
        addToHistoryCity(input.value)
        loadHistoryCity()
        resetdata(input.value)
        pageSearchView.style.display='none'
    }
})
input.addEventListener('focus',function(){
   
})
input.addEventListener('input',function(){console.log(input.value)})
input.addEventListener('blur',function(){
    
})
img.addEventListener('click',function(){
    localStorage.removeItem('historyCity')
    loadHistoryCity()

})
function loadHistoryCity() {
    if (!localStorage.getItem('historyCity')) {
      localStorage.setItem('historyCity', JSON.stringify([]));
    }
    const historyCity = JSON.parse(localStorage.getItem('historyCity'));
    if(historyCity.length==0){
        historyout.style.display='none'
    }
    else {
        historyout.style.display='block'
    }
    historybox.innerHTML=''
    historyCity.reverse().forEach(city => {
        let innerBox = document.createElement('div');
        innerBox.innerHTML=city
        innerBox.addEventListener('click',resetdata(`${innerBox.innerHTML}`))
        innerBox.addEventListener('click',addToHistoryCity(innerBox.innerHTML))
        innerBox.addEventListener('click',function(){pageSearchView.style.display='none'})
        historybox.appendChild(innerBox)
    });
  }

  for(let i=0;i<hotCityBox.length;i++){
    hotCityBox[i].addEventListener('click',function(){
        resetdata(hotCityBox[i].innerText)
        addToHistoryCity(hotCityBox[i].innerText)
        pageSearchView.style.display='none'
    })
  }
  function addToHistoryCity(city) {
    const historyCity = JSON.parse(localStorage.getItem('historyCity'))??[];
    // 去重
    const index = historyCity.findIndex(item => item === city);
    if (index > -1) {
    historyCity.splice(index, 1); 
    }
    historyCity.push(city);
    localStorage.setItem('historyCity', JSON.stringify(historyCity));
  }
  