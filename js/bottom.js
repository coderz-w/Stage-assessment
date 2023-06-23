async function getLiveindex(city) {
  let res = await axios.get(
    `https://devapi.qweather.com/v7/indices/1d?location=${city}&key=${apiKey2}&type=1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16`
  );
  return res.data.daily
}
function drawLiveindex(data){
  let divs=document.querySelector('.bottom').querySelectorAll('.botli')
  divs[0].querySelector('.advice').innerHTML=data[2].category
  divs[1].querySelector('.advice').innerHTML=data[0].category
  divs[2].querySelector('.advice').innerHTML=data[2].category
  divs[3].querySelector('.advice').innerHTML=data[15].category
  divs[4].querySelector('.advice').innerHTML=data[8].category
  divs[5].querySelector('.advice').innerHTML=data[3].category
  divs[6].querySelector('.advice').innerHTML=data[1].category
  divs[7].querySelector('.advice').innerHTML=data[5].category
  divs[8].querySelector('.advice').innerHTML=data[14].category
  divs[9].querySelector('.advice').innerHTML=data[12].category
  divs[10].querySelector('.advice').innerHTML=data[9].category
  divs[11].querySelector('.advice').innerHTML=data[11].category
  divs[12].querySelector('.advice').innerHTML=data[7].category
  divs[13].querySelector('.advice').innerHTML=data[8].category
  divs[14].querySelector('.advice').innerHTML=data[4].category
  divs[15].querySelector('.advice').innerHTML=data[4].category
}