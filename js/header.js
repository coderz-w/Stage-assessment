function getHeaderCity(str){
    const city=document.querySelector('._hcity')
    city.innerHTML=str
  }
function getHeaderC(obj){
    const C=document.querySelector(".sc1")
    const desc=document.querySelector('.sc2')
    const wind=document.querySelector(".sc3")
    C.innerHTML=`${obj.temp}°`
    desc.innerHTML=obj.text
    wind.innerHTML=`${obj.windDir}&nbsp;&nbsp;${obj.windScale}级`
}
function reportTc(dataList){
    let ntem=document.querySelector("._rtoday").querySelector(".tdu").querySelectorAll("div")
    let ndesc=document.querySelector("._rtoday").querySelector(".tdd").querySelector('div')
    let nimg=document.querySelector("._rtoday").querySelector(".tdd").querySelector('img')
    let wtem=document.querySelector("._rtomor").querySelector(".tdu").querySelectorAll("div")
    let wdesc=document.querySelector("._rtomor").querySelector(".tdd").querySelector('div')
    let wimg=document.querySelector("._rtomor").querySelector(".tdd").querySelector('img')
    ntem[1].innerHTML=`${dataList[0].tempMin}/${dataList[0].tempMax}°`
    ndesc.innerHTML=`${dataList[0].textDay}转${dataList[0].textNight}`
    if(dataList[0].textDay===dataList[0].textNight){
        ndesc.innerHTML=`${dataList[0].textDay}`
    }
    nimg.src=findImage(dataList[0].textDay)
    wtem[1].innerHTML=`${dataList[1].tempMin}/${dataList[1].tempMax}°`
    wdesc.innerHTML=`${dataList[1].textDay}转${dataList[1].textNight}`
    if(dataList[1].textDay===dataList[1].textNight){
        wdesc.innerHTML=`${dataList[1].textDay}`
    }
    wimg.src=findImage(dataList[1].textDay)
}