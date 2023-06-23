// 高德
const apiKey = "a1340c0aac18f066c5c79706dfb30ef3";
// 百度
const apiKey1 = "4G3BZ-OOJWZ-3EJXU-ZSCWG-DTMZ5-QWBBF";
// 和风
// const apiKey2='89768f944fcb461b9ee6c04c1e928c03'
// const apiKey2='60a13d9c31ec42f1bdbae23e3d53002d'
 const apiKey2='0ebba5bf0ebd43a1a82e6bda5798facc'

const appid = 13324392;
const appsecret = "9nzMPkAY";
let cityName = "";
let locationId = "";
var options = {
  xAxis: {
    show: false,
    data:['','','','','','','','','',''],
    axisLabel:{
      interval:7,
    }
  },
  yAxis: {
    show: false,
    min:16,
    max:35,
  },
  series: [
    {
      name: "白天",
      type: "line",
      smooth:true,
      data: [],
      lineStyle: {
        color: '#ffc36a' // 自定义折线颜色为红色
      },
      label: {
        show: true,
        formatter: function(params) {
          return params.value + '°';
        },
        position: 'top' 
      },
    },
    {
      name: "黑夜",
      type: "line",
      smooth:true,
      data: [],
      lineStyle: {
        color: '#90d9fa' // 自定义折线颜色为红色
      },
      label: {
        show: true,
        formatter: function(params) {
          return params.value + '°';
        }, 
        position: 'bottom' 
      },
    },
  ],
  grid: {
    width: "600px",
  },
};
// 格式化时间
function getTime(input) {
  const date = new Date(input);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  if (hours === 0 && minutes === 0) {
    return "明天";
  } else {
    const timeString = `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
    return timeString;
  }
}
function formatDate(input) {
  const date = new Date(input);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${month}/${day}`;
}
// 数据重载
async function resetdata(str) {
  let id = await changeNowCityToLocationId(str);
  let info = await getNowinfo(id);
  getHeaderC(info.now);
  // res为3天预报
  let res = await getTwo(id);
  reportTc(res.data.daily);
  // res1为24小时天气
  let res1 = await getTheDayWeather(id);
  drawTheDayWeather(res1.data.hourly);
  let res2 = await getseven(id);
  drawSevenDayWeatherUp(res2.data.daily);
  drawSevenDayWeatherD(res2.data.daily);
   // 渲染曲线图
   loadDataAndRenderChart(res2.data.daily)
   // 
  // res3为建议
  let res3 = await getLiveindex(id);
  drawLiveindex(res3);
}
// 感谢gpt
async function loadDataAndRenderChart(data) {
  options.series[0].data=[]
  options.series[1].data=[]
  for (let i = 0; i < data.length; i++) {
    // 异步加载数据
    const tempMax = await loadTempMaxData(data,i);
    const tempMin = await loadTempMinData(data,i);
    options.series[0].data.push(tempMax);
    options.series[1].data.push(tempMin);
  }

  // 渲染图表
  let chart = echarts.init(document.getElementById("chartContainer"));
  chart.setOption(options);
}

function loadTempMaxData(data,i) {
  return new Promise((resolve) => {
      const tempMax = data[i].tempMax;
      resolve(tempMax);
  });
}

// 异步加载最低温度数据
function loadTempMinData(data,i) {
  return new Promise((resolve) => {
      const tempMin = data[i].tempMin;
      resolve(tempMin);
  })  
}
// 节流函数
function mydebounce(fn,delay){
  let timer=null
  const _debounce=()=>{
    if(timer) clearTimeout(timer)
    timer=setTimeout(()=>{
      fn()
      timer=null
    },delay)
  }
  return _debounce
}