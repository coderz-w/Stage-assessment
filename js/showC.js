// 获取当前温度风向等信息
// function getNowCinfo(){
//     axios.get(`https://restapi.amap.com/v3/weather/weatherInfo?city=${cityId}&key=${apiKey}`).then(res=>{return res.data}).then(data=>{getHeaderC(data)})
//     axios.get(`https://restapi.amap.com/v3/weather/weatherInfo?city=${cityId}&key=${apiKey}&extensions=all`).then(res=>{return res.data.forecasts[0].casts}).then(data=>{reportTc(data)})
// }
async function getNowinfo(city){
    let res=await axios.get(`https://devapi.qweather.com/v7/weather/now?location=${city}&key=${apiKey2}`)
    return res.data
}
// 将经纬度或城市名转换为城市id
async function changeNowCityToLocationId(city){
   let res=await axios.get(`https://geoapi.qweather.com/v2/city/lookup?location=${city}&key=${apiKey2}`)
        // 记录城市id和名称
        cityName=res.data.location[0].name
        locationId=res.data.location[0].id
        getHeaderCity(res.data.location[0].name)
        return locationId=res.data.location[0].id   
}
// 获取2天天气预报
async function getTwo(city){
    let res=await axios.get(`https://devapi.qweather.com/v7/weather/3d?location=${city}&key=${apiKey2}`)
    return res
}
// 获取7天天气预报
async function getseven(city){
    let res=await axios.get(`https://devapi.qweather.com/v7/weather/7d?location=${city}&key=${apiKey2}`)
    return res
}