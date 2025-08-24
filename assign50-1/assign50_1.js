let numbers=[3,23,7,17,42,9,22,4,33,88,13,27,10,64];
function isEven(number){
  return number%2 === 0;
}
function isOdd(number){
  return number%2 !== 0;
}

function showEven(){
  let evenArr=numbers.filter(isEven);
  let res = document.getElementById("result");
  res.innerHTML="";
  for(let i=0;i<evenArr.length-1;i++){
  res.innerHTML += `${evenArr[i]},`;
  }
  res.innerHTML += `${evenArr[evenArr.length-1]}`;
}

function showOdd(){
  let oddArr=numbers.filter(isOdd);
  let res = document.getElementById("result");
  res.innerHTML="";
  for(let i=0;i<oddArr.length-1;i++){
  res.innerHTML += `${oddArr[i]},`
  }
  res.innerHTML += `${oddArr[oddArr.length-1]}`;
}