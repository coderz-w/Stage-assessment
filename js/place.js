// function getIPAndAddress() {
//     const apiKey = 'a1340c0aac18f066c5c79706dfb30ef3';
//     const ipApiUrl = 'https://api.ipify.org/?format=json';
//     axios.get(ipApiUrl)
//       .then(response => {
//         const ip = response.data.ip;
//         console.log('IP:', ip); // 当前用户 IP 地址
//         return axios.get(`	
//         https://restapi.amap.com/v3/ip?ip=${ip}&key=${apiKey}`);
//       })
//       .then(async response => {
//         const address =await response.data
//         cityName=address.city
//         cityId=address.adcode
//         getHeaderCity(address.city)
//         getNowCinfo()
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   }
// function getCurrentCityId(city) {
//     let flag=0
//     for(let i=0;i<adcode.length;i++){
//         if(flag==1){
//             break
//         }
//        for(j=0;j<adcode[i].city.length;j++){
//         if(city===adcode[i].city[j].name){
//             cityId=adcode[i].city[j].adcode
//             console.log(cityId)
//             flag=1
//             break
//         }
//        }
//     }
//   }
//   getIPAndAddress();
// 什么lj高德害的看我和风
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successCallback);
  } else {
    console.log("浏览器不支持地理定位");
  }
  
  async function successCallback(position) {
    let chart = await echarts.init(document.getElementById("chartContainer"));
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let _position=`${longitude},${latitude}`
    let id=await changeNowCityToLocationId(_position)
    let info=await getNowinfo(id)
    getHeaderC(info.now)
    // res为3天预报
    let res=await getTwo(id)
    reportTc(res.data.daily)
    // res1为24小时天气
    let res1=await getTheDayWeather(id)
    drawTheDayWeather(res1.data.hourly)
    // 7天
    let res2=await getseven(id)
    // 渲染曲线图
    loadDataAndRenderChart(res2.data.daily)
    // 
    drawSevenDayWeatherUp(res2.data.daily)
    drawSevenDayWeatherD(res2.data.daily)
    // res3为建议
    let res3=await getLiveindex(id)
    drawLiveindex(res3)
  }
  