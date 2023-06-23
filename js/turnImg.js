const changeImage=[
{
    word:'晴',
    url:'./images/day/qing.png'
},{
    word:'阴',
    url:'./images/day/yin.png'
}
,{
    word:'小雨',
    url:'./images/day/yu.png'
}
,{
    word:'多云',
    url:'./images/day/yun.png'
},
{
    word:'小雨转多云',
    url:'./images/day/yun.png'
},
{
    word:'阴转小雨',
    url:'./images/day/yu.png'
},
{
    word:'晴转多云',
    url:'./images/day/yun.png'
}
]
// 夜晚
const changeImageN=[
    {
        word:'晴',
        url:'./images/night/qing.png'
    },{
        word:'阴',
        url:'./images/night/yin.png'
    }
    ,{
        word:'小雨',
        url:'./images/night/yu.png'
    }
    ,{
        word:'多云',
        url:'./images/night/yun.png'
    },
    {
        word:'小雨转多云',
        url:'./images/night/yun.png'
    },
    {
        word:'阴转小雨',
        url:'./images/night/yu.png'
    },
    {
        word:'晴转多云',
        url:'./images/night/yun.png'
    }
    ]
function findImage(str){
    for(let i=0;i<changeImage.length;i++){
        if(str===changeImage[i].word){
            return changeImage[i].url
        }
    }
    return './images/day/yun.png'
}
function findImageN(str){
    for(let i=0;i<changeImageN.length;i++){
        if(str===changeImageN[i].word){
            return changeImageN[i].url
        }
    }
    return './images/night/yun.png'
}